import { createAvailabilityResponse } from './availability'

const API_PATH = '/api/availability'
const CACHE_SECONDS = 15 * 60
const MAX_FEED_BYTES = 1_000_000

class FeedTooLargeError extends Error {}

async function readTextWithLimit(response: Response, limit: number) {
  const contentLength = Number(response.headers.get('content-length'))
  if (Number.isFinite(contentLength) && contentLength > limit) throw new FeedTooLargeError()
  if (!response.body) return ''

  const reader = (response.body as ReadableStream<Uint8Array>).getReader()
  const decoder = new TextDecoder()
  let bytesRead = 0
  let text = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    bytesRead += value.byteLength
    if (bytesRead > limit) {
      await reader.cancel()
      throw new FeedTooLargeError()
    }
    text += decoder.decode(value, { stream: true })
  }

  return text + decoder.decode()
}

function jsonResponse(body: object, init: ResponseInit = {}) {
  const headers = new Headers(init.headers)
  headers.set('content-type', 'application/json; charset=utf-8')
  headers.set('x-content-type-options', 'nosniff')
  return Response.json(body, { ...init, headers })
}

export async function handleAvailability(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  if (request.method !== 'GET') {
    return jsonResponse({ code: 'method_not_allowed' }, { status: 405, headers: { allow: 'GET' } })
  }

  const cacheKey = new Request(new URL(API_PATH, request.url), { method: 'GET' })
  const cached = await caches.default.match(cacheKey)
  if (cached) return cached

  try {
    const feedResponse = await fetch(env.BOOKING_ICAL_URL, {
      headers: { accept: 'text/calendar, text/plain;q=0.9' },
      redirect: 'follow',
    })
    if (!feedResponse.ok) throw new Error(`Calendar upstream returned ${feedResponse.status}`)

    const ics = await readTextWithLimit(feedResponse, MAX_FEED_BYTES)
    const response = jsonResponse(createAvailabilityResponse(ics, new Date()), {
      headers: { 'cache-control': `public, max-age=300, s-maxage=${CACHE_SECONDS}` },
    })
    ctx.waitUntil(caches.default.put(cacheKey, response.clone()))
    return response
  } catch (error) {
    console.error(JSON.stringify({
      message: 'availability_sync_failed',
      error: error instanceof FeedTooLargeError ? 'feed_too_large' : error instanceof Error ? error.message : 'unknown_error',
    }))
    return jsonResponse({ code: 'availability_unavailable' }, {
      status: 503,
      headers: { 'cache-control': 'no-store', 'retry-after': '300' },
    })
  }
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url)
    if (url.pathname === API_PATH) return handleAvailability(request, env, ctx)
    if (url.pathname.startsWith('/api/')) return jsonResponse({ code: 'not_found' }, { status: 404 })
    return env.ASSETS.fetch(request)
  },
} satisfies ExportedHandler<Env>
