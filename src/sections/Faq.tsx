import { Plus } from 'lucide-react'
import { useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { property } from '../config/property'
import { useLanguage } from '../i18n/LanguageContext'

export function Faq() {
  const { language, t } = useLanguage()
  const [openId, setOpenId] = useState<string | null>(property.faqs[0]?.id ?? null)
  if (!property.faqs.length) return null

  return (
    <section className="faq section" id="faq">
      <div className="page-shell faq__layout">
        <SectionHeading eyebrow={t.faq.kicker} title={t.faq.title} />
        <div className="faq__items">
          {property.faqs.map((item, index) => {
            const isOpen = openId === item.id
            return (
              <article className={`faq-item${isOpen ? ' faq-item--open' : ''}`} key={item.id} data-reveal>
                <h3>
                  <button type="button" aria-expanded={isOpen} aria-controls={`faq-answer-${item.id}`} onClick={() => setOpenId(isOpen ? null : item.id)}>
                    <span className="faq-item__number">0{index + 1}</span>
                    <span>{item.question[language]}</span>
                    <Plus aria-hidden="true" />
                    <span className="sr-only">{t.faq.open}</span>
                  </button>
                </h3>
                <div className="faq-item__answer" id={`faq-answer-${item.id}`} aria-hidden={!isOpen}>
                  <p>{item.answer[language]}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
