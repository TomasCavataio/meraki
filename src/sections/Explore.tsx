import { Anchor, ArrowUpRight, Landmark, MapPin, Plane, Umbrella } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { property } from '../config/property'
import { useLanguage } from '../i18n/LanguageContext'

const icons = { town: MapPin, port: Anchor, beach: Umbrella, culture: Landmark, airport: Plane }

export function Explore() {
  const { language, t } = useLanguage()
  if (!property.nearby.length) return null

  return (
    <section className="explore section" id="explore">
      <div className="page-shell">
        <SectionHeading eyebrow={t.explore.kicker} title={t.explore.title} intro={t.explore.intro} theme="dark" />
        <div className="explore__list">
          {property.nearby.map((place, index) => {
            const Icon = icons[place.type]
            return (
              <article key={place.id} data-reveal>
                <span className="explore__number">0{index + 1}</span>
                <Icon size={22} strokeWidth={1.3} aria-hidden="true" />
                <div><h3>{place.title[language]}</h3><p>{place.description[language]}</p></div>
                <p className="explore__distance"><small>{t.explore.verified}</small>{place.distance[language]}</p>
                <ArrowUpRight size={18} strokeWidth={1.4} aria-hidden="true" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
