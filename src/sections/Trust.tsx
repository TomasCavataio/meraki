import { Check, ExternalLink, Home, MapPinned } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { property } from '../config/property'
import { useLanguage } from '../i18n/LanguageContext'

const icons = [Check, ExternalLink, MapPinned]

export function Trust() {
  const { language, t } = useLanguage()

  return (
    <section className="trust section">
      <div className="page-shell trust__layout">
        <div>
          <SectionHeading eyebrow={t.trust.kicker} title={t.trust.title} intro={t.trust.text} />
          <p className="trust__verified"><Home size={18} aria-hidden="true" />{property.name} · {property.location.publicName[language]}</p>
        </div>
        <div className="trust__items">
          {t.trust.items.map((item, index) => {
            const Icon = icons[index] ?? Check
            return <article key={item.title} data-reveal><Icon size={24} strokeWidth={1.3} aria-hidden="true" /><h3>{item.title}</h3><p>{item.text}</p></article>
          })}
        </div>
      </div>
    </section>
  )
}
