import { useEffect, useState } from 'react'
import type { AvailabilityResponse } from '../../shared/availability'
import { isAvailabilityResponse } from '../utils/calendar'

type AvailabilityState =
  | { status: 'loading' }
  | { status: 'ready'; data: AvailabilityResponse }
  | { status: 'error' }

export function useAvailability() {
  const [state, setState] = useState<AvailabilityState>({ status: 'loading' })

  useEffect(() => {
    const controller = new AbortController()

    async function loadAvailability() {
      try {
        const response = await fetch('/api/availability', {
          headers: { accept: 'application/json' },
          signal: controller.signal,
        })
        if (!response.ok) throw new Error(`Availability returned ${response.status}`)
        const payload: unknown = await response.json()
        if (!isAvailabilityResponse(payload)) throw new Error('Invalid availability response')
        setState({ status: 'ready', data: payload })
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return
        setState({ status: 'error' })
      }
    }

    void loadAvailability()
    return () => controller.abort()
  }, [])

  return state
}

