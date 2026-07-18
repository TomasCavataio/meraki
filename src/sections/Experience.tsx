import { ArrowDownRight } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { useLanguage } from '../i18n/LanguageContext'

export function Experience() {
  const { t } = useLanguage()

  return (
    <section className="experience section">
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
