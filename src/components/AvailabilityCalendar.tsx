import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react'
import { useMemo, useRef, useState, type KeyboardEvent } from 'react'
import type { BlockedRange } from '../../shared/availability'
import type { Language } from '../config/types'
import type { Translation } from '../i18n/translations'
import { formatLocalDate, isBlockedNight, languageLocales, parseLocalDate, rangeContainsBlockedNight } from '../utils/calendar'

interface AvailabilityCalendarProps {
  language: Language
  copy: Translation['booking']['calendar']
  blockedRanges: BlockedRange[]
  today: string
  maxDate: string
  arrival: string
  departure: string
  syncedAt: string
  onChange: (arrival: string, departure: string) => void
}

function firstOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1, 12)
}

function monthKey(date: Date) {
  return date.getFullYear() * 12 + date.getMonth()
}

function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1, 12)
}

function monthDays(month: Date) {
  const firstWeekday = (month.getDay() + 6) % 7
  const totalDays = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate()
  return [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: totalDays }, (_, index) => new Date(month.getFullYear(), month.getMonth(), index + 1, 12)),
  ]
}

export function AvailabilityCalendar({ language, copy, blockedRanges, today, maxDate, arrival, departure, syncedAt, onChange }: AvailabilityCalendarProps) {
  const locale = languageLocales[language]
  const [visibleMonth, setVisibleMonth] = useState(() => firstOfMonth(parseLocalDate(arrival || today)))
  const [selectionError, setSelectionError] = useState('')
  const gridRef = useRef<HTMLDivElement>(null)
  const currentMonth = firstOfMonth(parseLocalDate(today))
  const lastMonth = firstOfMonth(parseLocalDate(maxDate))
  const days = useMemo(() => monthDays(visibleMonth), [visibleMonth])
  const weekdays = useMemo(() => Array.from({ length: 7 }, (_, index) => {
    const date = new Date(2024, 0, index + 1, 12)
    return new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date)
  }), [locale])
  const localizedMonth = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(visibleMonth)
  const monthLabel = `${localizedMonth.charAt(0).toLocaleUpperCase(locale)}${localizedMonth.slice(1)}`
  const syncedLabel = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }).format(new Date(syncedAt))

  const selectDate = (date: string) => {
    const blocked = isBlockedNight(date, blockedRanges)
    if (!arrival || departure) {
      if (blocked) return
      setSelectionError('')
      onChange(date, '')
      return
    }

    if (date <= arrival) {
      if (blocked) return
      setSelectionError('')
      onChange(date, '')
      return
    }

    if (rangeContainsBlockedNight(arrival, date, blockedRanges)) {
      setSelectionError(copy.rangeUnavailable)
      return
    }

    setSelectionError('')
    onChange(arrival, date)
  }

  const focusDate = (date: string) => {
    if (date < today || date > maxDate) return
    const parsed = parseLocalDate(date)
    if (monthKey(parsed) !== monthKey(visibleMonth)) setVisibleMonth(firstOfMonth(parsed))
    requestAnimationFrame(() => gridRef.current?.querySelector<HTMLButtonElement>(`[data-date="${date}"]`)?.focus())
  }

  const onDayKeyDown = (event: KeyboardEvent<HTMLButtonElement>, date: string) => {
    const offsets: Record<string, number> = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 }
    const offset = offsets[event.key]
    if (!offset) return
    event.preventDefault()
    const next = parseLocalDate(date)
    next.setDate(next.getDate() + offset)
    focusDate(formatLocalDate(next))
  }

  return (
    <section className="availability-calendar" aria-label={copy.title}>
      <div className="availability-calendar__head">
        <div>
          <p className="availability-calendar__eyebrow">{copy.title}</p>
          <h3 aria-live="polite">{monthLabel}</h3>
        </div>
        <div className="availability-calendar__navigation">
          <button type="button" aria-label={copy.previousMonth} disabled={monthKey(visibleMonth) <= monthKey(currentMonth)} onClick={() => setVisibleMonth((current) => addMonths(current, -1))}><ChevronLeft size={18} aria-hidden="true" /></button>
          <button type="button" aria-label={copy.nextMonth} disabled={monthKey(visibleMonth) >= monthKey(lastMonth)} onClick={() => setVisibleMonth((current) => addMonths(current, 1))}><ChevronRight size={18} aria-hidden="true" /></button>
        </div>
      </div>

      <p className="availability-calendar__hint">{arrival ? (departure ? copy.selectionComplete : copy.chooseDeparture) : copy.chooseArrival}</p>
      <div className="availability-calendar__grid" role="grid" ref={gridRef}>
        {weekdays.map((weekday) => <span className="availability-calendar__weekday" role="columnheader" key={weekday}>{weekday}</span>)}
        {days.map((day, index) => {
          if (!day) return <span className="availability-calendar__empty" aria-hidden="true" key={`empty-${index}`} />
          const date = formatLocalDate(day)
          const blocked = isBlockedNight(date, blockedRanges)
          const outsideWindow = date < today || date > maxDate
          const canBeCheckout = Boolean(arrival && !departure && date > arrival && !rangeContainsBlockedNight(arrival, date, blockedRanges))
          const unavailable = blocked && !canBeCheckout
          const isEndpoint = date === arrival || date === departure
          const inSelectedRange = Boolean(arrival && departure && date > arrival && date < departure)
          const isRangeStart = Boolean(arrival && departure && date === arrival && index % 7 !== 6)
          const isRangeEnd = Boolean(arrival && departure && date === departure && index % 7 !== 0)
          const status = blocked ? copy.unavailable : copy.available
          const label = `${new Intl.DateTimeFormat(locale, { dateStyle: 'full' }).format(day)}. ${status}${canBeCheckout && blocked ? `. ${copy.checkoutBoundary}` : ''}`
          const rangePart = inSelectedRange || isRangeStart || isRangeEnd

          return (
            <span className={`availability-calendar__cell${rangePart ? ' availability-calendar__cell--range' : ''}${isRangeStart ? ' availability-calendar__cell--range-start' : ''}${isRangeEnd ? ' availability-calendar__cell--range-end' : ''}`} role="gridcell" key={date}>
              <button
                type="button"
                className={`availability-calendar__day${blocked ? ' availability-calendar__day--blocked' : ''}${isEndpoint ? ' availability-calendar__day--selected' : ''}${inSelectedRange ? ' availability-calendar__day--range' : ''}`}
                aria-label={label}
                aria-current={date === today ? 'date' : undefined}
                aria-disabled={unavailable || outsideWindow}
                aria-pressed={isEndpoint}
                data-date={date}
                disabled={outsideWindow}
                onClick={() => { if (!unavailable) selectDate(date) }}
                onKeyDown={(event) => onDayKeyDown(event, date)}
              >
                {day.getDate()}
              </button>
            </span>
          )
        })}
      </div>

      <div className="availability-calendar__footer">
        <div className="availability-calendar__legend" aria-label={copy.legend}>
          <span><i aria-hidden="true" />{copy.available}</span>
          <span><i aria-hidden="true" />{copy.unavailable}</span>
        </div>
        {arrival ? <button className="availability-calendar__clear" type="button" onClick={() => { setSelectionError(''); onChange('', '') }}><RotateCcw size={13} aria-hidden="true" />{copy.clear}</button> : null}
      </div>
      {selectionError ? <p className="availability-calendar__error" role="alert">{selectionError}</p> : null}
      <p className="availability-calendar__synced">{copy.synced} {syncedLabel}</p>
    </section>
  )
}
