import { property } from '../config/property'
import { useLanguage } from '../i18n/LanguageContext'

export function StayDetails() {
  const { language, t } = useLanguage()
  const centre = property.nearby.find((place) => place.id === 'centre')

  const details = [
    { label: t.booking.arrival, value: property.checkIn },
    { label: t.booking.departure, value: property.checkOut },
    ...(centre ? [{ label: centre.title[language], value: centre.distance[language] }] : []),
    { label: t.facts.parking, value: t.factValues.yes },
  ]

  return (
    <section className="stay-details" aria-labelledby="stay-details-title">
      <div className="stay-details__content page-shell" data-reveal>
        <h2 className="eyebrow" id="stay-details-title">{t.stayDetails.kicker}</h2>
        <dl className="stay-details__list">
          {details.map((detail) => (
            <div key={detail.label}>
              <dt>{detail.label}</dt>
              <dd>{detail.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
