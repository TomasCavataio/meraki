import { Bath, BedDouble, Car, Expand, Snowflake } from 'lucide-react'
import { property } from '../config/property'
import type { PropertyFact } from '../config/types'
import { useLanguage } from '../i18n/LanguageContext'
import { SectionHeading } from '../components/SectionHeading'
import { assetPath } from '../utils/assets'

const factIcons = {
  guests: BedDouble,
  bedrooms: BedDouble,
  beds: BedDouble,
  sofa: BedDouble,
  bathrooms: Bath,
  area: Expand,
  parking: Car,
  views: Expand,
  airConditioning: Snowflake,
}

function factValue(fact: PropertyFact, t: ReturnType<typeof useLanguage>['t']): string {
  if (fact.id === 'area') return `${String(fact.value)} ${t.factValues.squareMetres}`
  if (fact.id === 'views' && fact.value === 'gardenCity') return t.factValues.gardenCity
  if (typeof fact.value === 'boolean') return t.factValues.yes
  return String(fact.value)
}

export function Overview() {
  const { language, t } = useLanguage()
  const facts = property.facts.filter((fact) => fact.value !== undefined && fact.value !== '' && fact.value !== false)

  return (
    <section className="overview section" id="home">
      <div className="page-shell">
        <SectionHeading eyebrow={t.intro.kicker} title={t.intro.title} />
        <div className="overview__editorial">
          <div className="overview__copy" data-reveal>
            <p className="dropcap">{property.content.longDescription[language]}</p>
            <p className="source-note">{property.content.eyebrow[language]}</p>
          </div>
          <figure className="overview__portrait image-frame" data-reveal>
            <img src={property.gallery[1]?.src} alt={property.gallery[1]?.alt[language]} width={property.gallery[1]?.width} height={property.gallery[1]?.height} loading="lazy" fetchPriority="low" decoding="async" />
          </figure>
          <figure className="overview__detail image-frame" data-reveal>
            <img
              src={assetPath('images/meraki-bathroom-detail.webp')}
              alt={{
                el: 'Λεπτομέρεια του μπάνιου του Meraki Home',
                en: 'Bathroom detail at Meraki Home',
                es: 'Detalle del baño de Meraki Home',
                it: 'Dettaglio del bagno di Meraki Home',
              }[language]}
              width={1200}
              height={800}
              loading="lazy"
              fetchPriority="low"
              decoding="async"
            />
          </figure>
        </div>

        {facts.length ? (
          <div className="facts" aria-label={t.intro.detailLabel} data-reveal>
            <p className="facts__label">{t.intro.detailLabel}</p>
            <div className="facts__grid">
              {facts.map((fact) => {
                const Icon = factIcons[fact.id]
                return (
                  <div className="fact" key={fact.id}>
                    <Icon size={19} strokeWidth={1.5} aria-hidden="true" />
                    <span>{t.facts[fact.id]}</span>
                    <strong>{factValue(fact, t)}</strong>
                  </div>
                )
              })}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
