import { ArrowDownRight } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { property } from '../config/property'
import { useLanguage } from '../i18n/LanguageContext'

export function Experience() {
  const { language, t } = useLanguage()
  const image = property.gallery[5]

  return (
    <section className="experience section">
      <div className="experience__image" data-reveal>
        {image ? <img src={image.src} alt={image.alt[language]} width={image.width} height={image.height} loading="lazy" decoding="async" /> : null}
        <p>{property.location.publicName[language]}</p>
      </div>
      <div className="experience__content page-shell">
        <SectionHeading eyebrow={t.experience.kicker} title={t.experience.title} intro={t.experience.lead} />
        <div className="experience__moments">
          {t.experience.moments.map((moment, index) => (
            <article key={moment.title} data-reveal>
              <span>0{index + 1}</span>
              <div><h3>{moment.title}</h3><p>{moment.text}</p></div>
              <ArrowDownRight size={22} strokeWidth={1.4} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
