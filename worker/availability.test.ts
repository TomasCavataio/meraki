import { describe, expect, it } from 'vitest'
import { createAvailabilityResponse, mergeBlockedRanges, parseBookingCalendar } from './availability'

const calendar = `BEGIN:VCALENDAR\r
VERSION:2.0\r
BEGIN:VEVENT\r
UID:private-booking-reference\r
SUMMARY:Guest name must never leave the Worker\r
DTSTART;VALUE=DATE:20260812\r
DTEND;VALUE=DATE:20260816\r
END:VEVENT\r
BEGIN:VEVENT\r
UID:second\r
DTSTART;VALUE=DATE:20260816\r
DTEND;VALUE=DATE:20260818\r
DESCRIPTION:A folded private desc\r
 ription\r
END:VEVENT\r
END:VCALENDAR\r
`

describe('Booking.com iCal parsing', () => {
  it('returns merged, end-exclusive ranges and drops event metadata', () => {
    const response = createAvailabilityResponse(calendar, new Date('2026-08-10T12:00:00.000Z'))

    expect(response).toEqual({
      blockedRanges: [{ start: '2026-08-12', endExclusive: '2026-08-18' }],
      syncedAt: '2026-08-10T12:00:00.000Z',
    })
    expect(JSON.stringify(response)).not.toContain('Guest')
    expect(JSON.stringify(response)).not.toContain('private-booking-reference')
  })

  it('clips ranges to the requested window and ignores past events', () => {
    const withPastEvent = calendar.replace('END:VCALENDAR', `BEGIN:VEVENT\r\nDTSTART;VALUE=DATE:20260701\r\nDTEND;VALUE=DATE:20260705\r\nEND:VEVENT\r\nEND:VCALENDAR`)

    expect(parseBookingCalendar(withPastEvent, '2026-08-14', '2026-08-17')).toEqual([
      { start: '2026-08-14', endExclusive: '2026-08-17' },
    ])
  })

  it('merges overlapping and adjacent valid ranges', () => {
    expect(mergeBlockedRanges([
      { start: '2026-09-10', endExclusive: '2026-09-12' },
      { start: '2026-09-01', endExclusive: '2026-09-05' },
      { start: '2026-09-05', endExclusive: '2026-09-07' },
      { start: 'invalid', endExclusive: '2026-09-09' },
    ])).toEqual([
      { start: '2026-09-01', endExclusive: '2026-09-07' },
      { start: '2026-09-10', endExclusive: '2026-09-12' },
    ])
  })

  it('rejects malformed calendars and invalid windows', () => {
    expect(() => parseBookingCalendar('not a calendar', '2026-08-10', '2026-09-10')).toThrow()
    expect(() => parseBookingCalendar(calendar, '2026-09-10', '2026-08-10')).toThrow('Invalid availability window')
  })
})

