import { Expand, Images } from 'lucide-react'
import { useCallback, useState } from 'react'
import { Lightbox } from '../components/Lightbox'
import { SectionHeading } from '../components/SectionHeading'
import { property } from '../config/property'
import { useLanguage } from '../i18n/LanguageContext'

export function Gallery() {
  const { language, t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const close = useCallback(() => setActiveIndex(null), [])
  const change = useCallback((index: number) => setActiveIndex(index), [])

  return (
    <section className="gallery-section section" id="gallery">
      <div className="page-shell">
        <div className="gallery-section__head">
          <SectionHeading eyebrow={t.gallery.kicker} title={t.gallery.title} />
          <p data-reveal><Images size={17} aria-hidden="true" />{t.gallery.imageCount}</p>
        </div>
        <div className="gallery-grid">
          {property.gallery.slice(0, 7).map((image, index) => (
            <button className={`gallery-grid__item gallery-grid__item--${index + 1}`} type="button" key={image.id} onClick={() => setActiveIndex(index)} aria-label={`${t.accessibility.currentImage} ${index + 1}: ${image.alt[language]}`} data-reveal>
              <img src={image.src} alt="" width={image.width} height={image.height} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" style={{ objectPosition: image.focalPoint }} />
              <span className="gallery-grid__number">0{index + 1}</span>
              {image.provisional ? <small>{t.gallery.provisional}</small> : null}
              <Expand className="gallery-grid__expand" size={20} aria-hidden="true" />
            </button>
          ))}
        </div>
        <button className="text-link gallery-section__all" type="button" onClick={() => setActiveIndex(0)}>{t.actions.viewGallery}<span aria-hidden="true">↗</span></button>
      </div>
      {activeIndex !== null ? <Lightbox images={property.gallery} activeIndex={activeIndex} language={language} t={t} onChange={change} onClose={close} /> : null}
    </section>
  )
}
