import { ArrowUpRight, CalendarDays, ShieldCheck } from 'lucide-react'
import { useMemo, useState, type FormEvent } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { property } from '../config/property'
import { useLanguage } from '../i18n/LanguageContext'

function formatLocalDate(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function dayAfter(dateString: string) {
  const date = new Date(`${dateString}T12:00:00`)
  date.setDate(date.getDate() + 1)
  return formatLocalDate(date)
}

export function Booking() {
  const { t } = useLanguage()
  const primaryChannel = property.bookingChannels.find((channel) => channel.primary && channel.value)
    ?? property.bookingChannels.find((channel) => channel.value)
  const today = useMemo(() => formatLocalDate(new Date()), [])
  const [arrival, setArrival] = useState('')
  const [departure, setDeparture] = useState('')
  const [guests, setGuests] = useState('2')
  const [errors, setErrors] = useState<{ arrival?: string; departure?: string }>({})

  const departureMin = arrival ? dayAfter(arrival) : today

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: typeof errors = {}
    if (!arrival) nextErrors.arrival = t.booking.errors.arrivalRequired
    if (!departure) nextErrors.departure = t.booking.errors.departureRequired
    if (arrival && departure && departure <= arrival) nextErrors.departure = t.booking.errors.departureAfter
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length || !primaryChannel) return

    const url = new URL(primaryChannel.value)
    url.searchParams.set('checkin', arrival)
    url.searchParams.set('checkout', departure)
    url.searchParams.set('group_adults', guests)
    url.searchParams.set('no_rooms', '1')
    window.open(url.toString(), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="booking section" id="booking">
      <div className="booking__background" aria-hidden="true" />
      <div className="page-shell booking__layout">
        <div>
          <SectionHeading eyebrow={t.booking.kicker} title={t.booking.title} intro={t.booking.intro} theme="dark" />
          <p className="booking__secure"><ShieldCheck size={18} aria-hidden="true" />{t.booking.disclaimer}</p>
        </div>
        {primaryChannel ? (
          <form className="booking-form" onSubmit={onSubmit} noValidate data-reveal>
            <div className="booking-form__field">
              <label htmlFor="arrival"><span>{t.booking.arrival}</span><CalendarDays size={18} aria-hidden="true" /></label>
              <input id="arrival" name="arrival" type="date" min={today} value={arrival} aria-invalid={Boolean(errors.arrival)} aria-describedby={errors.arrival ? 'arrival-error' : undefined} onChange={(event) => { setArrival(event.target.value); setErrors((current) => ({ ...current, arrival: undefined })) }} />
              {errors.arrival ? <small className="field-error" id="arrival-error" role="alert">{errors.arrival}</small> : null}
            </div>
            <div className="booking-form__field">
              <label htmlFor="departure"><span>{t.booking.departure}</span><CalendarDays size={18} aria-hidden="true" /></label>
              <input id="departure" name="departure" type="date" min={departureMin} value={departure} aria-invalid={Boolean(errors.departure)} aria-describedby={errors.departure ? 'departure-error' : undefined} onChange={(event) => { setDeparture(event.target.value); setErrors((current) => ({ ...current, departure: undefined })) }} />
              {errors.departure ? <small className="field-error" id="departure-error" role="alert">{errors.departure}</small> : null}
            </div>
            <div className="booking-form__field">
              <label htmlFor="guests"><span>{t.booking.guests}</span></label>
              <input id="guests" name="guests" type="number" inputMode="numeric" min="1" value={guests} aria-label={t.booking.guests} onChange={(event) => setGuests(event.target.value)} />
            </div>
            <button className="button button--sand booking-form__submit" type="submit">{t.booking.submit}<ArrowUpRight size={18} aria-hidden="true" /></button>
            <p>{t.actions.reserveOn} {primaryChannel.label} · {t.accessibility.opensNewWindow}</p>
          </form>
        ) : <p className="booking__empty">{t.booking.empty}</p>}
      </div>
    </section>
  )
}
