import { ArrowUpRight, CalendarDays, ShieldCheck } from 'lucide-react'
import { useMemo, useState, type FormEvent } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { property } from '../config/property'
import { useLanguage } from '../i18n/LanguageContext'

function formatLocalDate(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

function dayAfter(dateString: string) {
  const date = new Date(`${dateString}T12:00:00`)
  date.setDate(date.getDate() + 1)
  return formatLocalDate(date)
}

const directCopy = {
  el: { tab: 'Απευθείας κράτηση', submit: 'Αποστολή αιτήματος', people: 'Αριθμός ατόμων', children: 'Παιδιά', pet: 'Κατοικίδιο', email: 'Email', phone: 'Κινητό τηλέφωνο', comments: 'Σχόλια ή επιπλέον πληροφορίες', yes: 'Ναι', no: 'Όχι', sent: 'Το αίτημά σας εστάλη.' },
  en: { tab: 'Book with us directly', submit: 'Send request', people: 'Number of guests', children: 'Children', pet: 'Pet', email: 'Email', phone: 'Mobile phone', comments: 'Comments or additional information', yes: 'Yes', no: 'No', sent: 'Your request was sent.' },
  es: { tab: 'Reserva directamente', submit: 'Enviar solicitud', people: 'Número de personas', children: 'Hijos', pet: 'Mascota', email: 'Correo electrónico', phone: 'Teléfono móvil', comments: 'Comentarios o información adicional', yes: 'Sí', no: 'No', sent: 'Tu solicitud se ha enviado.' },
  it: { tab: 'Prenota direttamente', submit: 'Invia richiesta', people: 'Numero di persone', children: 'Bambini', pet: 'Animale domestico', email: 'Email', phone: 'Telefono cellulare', comments: 'Commenti o informazioni aggiuntive', yes: 'Sì', no: 'No', sent: 'La richiesta è stata inviata.' },
} as const

const countryCodes = [
  ['Afghanistan', '+93'], ['Albania', '+355'], ['Algeria', '+213'], ['Argentina', '+54'], ['Australia', '+61'], ['Austria', '+43'], ['Belgium', '+32'], ['Brazil', '+55'], ['Bulgaria', '+359'], ['Canada', '+1'], ['Chile', '+56'], ['China', '+86'], ['Croatia', '+385'], ['Cyprus', '+357'], ['Czechia', '+420'], ['Denmark', '+45'], ['Egypt', '+20'], ['Estonia', '+372'], ['Finland', '+358'], ['France', '+33'], ['Germany', '+49'], ['Greece', '+30'], ['Hungary', '+36'], ['India', '+91'], ['Ireland', '+353'], ['Israel', '+972'], ['Italy', '+39'], ['Japan', '+81'], ['Latvia', '+371'], ['Lithuania', '+370'], ['Luxembourg', '+352'], ['Malta', '+356'], ['Mexico', '+52'], ['Morocco', '+212'], ['Netherlands', '+31'], ['New Zealand', '+64'], ['Norway', '+47'], ['Poland', '+48'], ['Portugal', '+351'], ['Romania', '+40'], ['Serbia', '+381'], ['Singapore', '+65'], ['Slovakia', '+421'], ['Slovenia', '+386'], ['South Africa', '+27'], ['South Korea', '+82'], ['Spain', '+34'], ['Sweden', '+46'], ['Switzerland', '+41'], ['Turkey', '+90'], ['Ukraine', '+380'], ['United Arab Emirates', '+971'], ['United Kingdom', '+44'], ['United States', '+1'],
] as const

export function Booking() {
  const { language, t } = useLanguage()
  const copy = directCopy[language]
  const primaryChannel = property.bookingChannels.find((channel) => channel.primary && channel.value) ?? property.bookingChannels.find((channel) => channel.value)
  const today = useMemo(() => formatLocalDate(new Date()), [])
  const [tab, setTab] = useState<'direct' | 'booking'>('direct')
  const [arrival, setArrival] = useState('')
  const [departure, setDeparture] = useState('')
  const [guests, setGuests] = useState('2')
  const [errors, setErrors] = useState<{ arrival?: string; departure?: string }>({})
  const departureMin = arrival ? dayAfter(arrival) : today

  const onBookingSubmit = (event: FormEvent<HTMLFormElement>) => {
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
        <div>
          <div className="booking-tabs" role="tablist">
            <button className={`booking-tab${tab === 'direct' ? ' booking-tab--active' : ''}`} type="button" role="tab" aria-selected={tab === 'direct'} onClick={() => setTab('direct')}>{copy.tab}</button>
            <button className={`booking-tab${tab === 'booking' ? ' booking-tab--active' : ''}`} type="button" role="tab" aria-selected={tab === 'booking'} onClick={() => setTab('booking')}>Booking.com</button>
          </div>
          {tab === 'direct' ? (
            <form className="direct-form" action="https://formsubmit.co/reginalaka22@gmail.com" method="POST" data-reveal>
              <input type="hidden" name="_subject" value="Nueva solicitud de reserva · Meraki Home" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <div className="direct-form__field"><label htmlFor="direct-guests">{copy.people}</label><select id="direct-guests" name="Número de personas" defaultValue="2" required><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></div>
              <div className="direct-form__field"><label htmlFor="direct-arrival">{t.booking.arrival} <CalendarDays size={16} aria-hidden="true" /></label><input id="direct-arrival" name="Check in" type="date" min={today} required /></div>
              <div className="direct-form__field"><label htmlFor="direct-departure">{t.booking.departure} <CalendarDays size={16} aria-hidden="true" /></label><input id="direct-departure" name="Check out" type="date" min={today} required /></div>
              <div className="direct-form__field"><label htmlFor="direct-children">{copy.children}</label><select id="direct-children" name="Hijos" defaultValue="0"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></div>
              <div className="direct-form__field"><label htmlFor="direct-pet">{copy.pet}</label><select id="direct-pet" name="Mascota" defaultValue="no"><option value="no">{copy.no}</option><option value="yes">{copy.yes}</option></select></div>
              <div className="direct-form__field"><label htmlFor="direct-email">{copy.email}</label><input id="direct-email" name="Email" type="email" autoComplete="email" required /></div>
              <div className="direct-form__field"><label htmlFor="direct-phone">{copy.phone}</label><div className="phone-field"><select name="Prefijo" aria-label="Country code" defaultValue="+30">{countryCodes.map(([country, code]) => <option key={`${country}-${code}`} value={code}>{country} {code}</option>)}</select><input id="direct-phone" name="Teléfono" type="tel" autoComplete="tel" placeholder="691 234 5678" required /></div></div>
              <div className="direct-form__field direct-form__field--wide"><label htmlFor="direct-comments">{copy.comments}</label><textarea id="direct-comments" name="Comentarios" rows={3} /></div>
              <button className="button button--sand direct-form__submit" type="submit">{copy.submit}<ArrowUpRight size={18} aria-hidden="true" /></button>
            </form>
          ) : primaryChannel ? (
            <form className="booking-form" onSubmit={onBookingSubmit} noValidate data-reveal>
              <div className="booking-form__field"><label htmlFor="arrival"><span>{t.booking.arrival}</span><CalendarDays size={18} aria-hidden="true" /></label><input id="arrival" name="arrival" type="date" min={today} value={arrival} aria-invalid={Boolean(errors.arrival)} onChange={(event) => { setArrival(event.target.value); setErrors((current) => ({ ...current, arrival: undefined })) }} />{errors.arrival ? <small className="field-error" role="alert">{errors.arrival}</small> : null}</div>
              <div className="booking-form__field"><label htmlFor="departure"><span>{t.booking.departure}</span><CalendarDays size={18} aria-hidden="true" /></label><input id="departure" name="departure" type="date" min={departureMin} value={departure} aria-invalid={Boolean(errors.departure)} onChange={(event) => { setDeparture(event.target.value); setErrors((current) => ({ ...current, departure: undefined })) }} />{errors.departure ? <small className="field-error" role="alert">{errors.departure}</small> : null}</div>
              <div className="booking-form__field"><label htmlFor="guests"><span>{t.booking.guests}</span></label><input id="guests" name="guests" type="number" inputMode="numeric" min="1" max="3" value={guests} onChange={(event) => setGuests(event.target.value)} /></div>
              <button className="button button--sand booking-form__submit" type="submit">{t.booking.submit}<ArrowUpRight size={18} aria-hidden="true" /></button><p>{t.actions.reserveOn} {primaryChannel.label} · {t.accessibility.opensNewWindow}</p>
            </form>
          ) : <p className="booking__empty">{t.booking.empty}</p>}
        </div>
      </div>
    </section>
  )
}
