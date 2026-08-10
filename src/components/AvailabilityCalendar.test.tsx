// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { afterEach, describe, expect, it } from 'vitest'
import { AvailabilityCalendar } from './AvailabilityCalendar'
import { translations } from '../i18n/translations'

const blockedRanges = [{ start: '2026-08-12', endExclusive: '2026-08-16' }]

afterEach(cleanup)

function CalendarHarness() {
  const [arrival, setArrival] = useState('')
  const [departure, setDeparture] = useState('')
  return <AvailabilityCalendar
    language="es"
    copy={translations.es.booking.calendar}
    blockedRanges={blockedRanges}
    today="2026-08-10"
    maxDate="2027-08-10"
    arrival={arrival}
    departure={departure}
    syncedAt="2026-08-10T12:00:00.000Z"
    onChange={(nextArrival, nextDeparture) => { setArrival(nextArrival); setDeparture(nextDeparture) }}
  />
}

describe('AvailabilityCalendar', () => {
  it('selects a stay and allows checkout on the first blocked night', async () => {
    const user = userEvent.setup()
    render(<CalendarHarness />)

    await user.click(screen.getByRole('button', { name: /lunes, 10 de agosto de 2026/i }))
    await user.click(screen.getByRole('button', { name: /miércoles, 12 de agosto de 2026/i }))

    expect(screen.getByRole('button', { name: /lunes, 10 de agosto de 2026/i })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: /miércoles, 12 de agosto de 2026/i })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText(translations.es.booking.calendar.selectionComplete)).toBeInTheDocument()
  })

  it('rejects a range that crosses unavailable nights', async () => {
    const user = userEvent.setup()
    render(<CalendarHarness />)

    await user.click(screen.getByRole('button', { name: /lunes, 10 de agosto de 2026/i }))
    await user.click(screen.getByRole('button', { name: /martes, 18 de agosto de 2026/i }))

    expect(screen.getByRole('alert')).toHaveTextContent(translations.es.booking.calendar.rangeUnavailable)
    expect(screen.getByText(translations.es.booking.calendar.chooseDeparture)).toBeInTheDocument()
  })
})
