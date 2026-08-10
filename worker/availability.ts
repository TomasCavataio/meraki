import ICAL from 'ical.js'
import type { AvailabilityResponse, BlockedRange } from '../shared/availability'

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/

function isComponentData(value: unknown): value is unknown[] {
  return Array.isArray(value)
}

function formatIcalDate(time: { year: number; month: number; day: number }) {
  return `${String(time.year).padStart(4, '0')}-${String(time.month).padStart(2, '0')}-${String(time.day).padStart(2, '0')}`
}

function isValidRange(range: BlockedRange) {
  return ISO_DATE.test(range.start) && ISO_DATE.test(range.endExclusive) && range.start < range.endExclusive
}

export function mergeBlockedRanges(ranges: BlockedRange[]) {
  const sorted = ranges.filter(isValidRange).sort((left, right) => left.start.localeCompare(right.start))
  const merged: BlockedRange[] = []

  for (const range of sorted) {
    const previous = merged.at(-1)
    if (!previous || range.start > previous.endExclusive) {
      merged.push({ ...range })
      continue
    }

    if (range.endExclusive > previous.endExclusive) previous.endExclusive = range.endExclusive
  }

  return merged
}

export function parseBookingCalendar(ics: string, windowStart: string, windowEndExclusive: string): BlockedRange[] {
  if (!ISO_DATE.test(windowStart) || !ISO_DATE.test(windowEndExclusive) || windowStart >= windowEndExclusive) {
    throw new Error('Invalid availability window')
  }

  const parsed: unknown = ICAL.parse(ics)
  if (!isComponentData(parsed)) throw new Error('Invalid iCalendar payload')
  const calendar = new ICAL.Component(parsed)
  const ranges = calendar.getAllSubcomponents('vevent').map((component) => {
    const event = new ICAL.Event(component)
    return {
      start: formatIcalDate(event.startDate),
      endExclusive: formatIcalDate(event.endDate),
    }
  })

  return mergeBlockedRanges(ranges)
    .filter((range) => range.endExclusive > windowStart && range.start < windowEndExclusive)
    .map((range) => ({
      start: range.start < windowStart ? windowStart : range.start,
      endExclusive: range.endExclusive > windowEndExclusive ? windowEndExclusive : range.endExclusive,
    }))
}

export function createAvailabilityResponse(ics: string, now: Date): AvailabilityResponse {
  const windowStart = now.toISOString().slice(0, 10)
  const windowEnd = new Date(Date.UTC(now.getUTCFullYear() + 1, now.getUTCMonth(), now.getUTCDate() + 1))

  return {
    blockedRanges: parseBookingCalendar(ics, windowStart, windowEnd.toISOString().slice(0, 10)),
    syncedAt: now.toISOString(),
  }
}
