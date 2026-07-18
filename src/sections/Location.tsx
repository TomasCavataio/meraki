import { ArrowUpRight, LocateFixed, Route } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { property } from '../config/property'
import { useLanguage } from '../i18n/LanguageContext'

function osmEmbedUrl() {
  const coordinates = property.location.publicCoordinates
  if (!coordinates) return ''
  const { latitude, longitude } = coordinates
  const delta = 0.018
  const bbox = `${longitude - delta},${latitude - delta},${longitude + delta},${latitude + delta}`
  return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${latitude},${longitude}`
}

export function Location() {
  const { language, t } = useLanguage()
  const mapUrl = osmEmbedUrl()
  const image = property.gallery[4]

  return (
    <section className="location section" id="location">
      <div className="page-shell">
        <div className="location__head">
          <SectionHeading eyebrow={t.location.kicker} title={t.location.title} intro={t.location.text} />
          <a className="button button--dark" href={property.location.mapsUrl} target="_blank" rel="noreferrer">{t.actions.openMaps}<ArrowUpRight size={18} aria-hidden="true" /><span className="sr-only">{t.accessibility.opensNewWindow}</span></a>
        </div>
        <div className="location__layout">
          <div className="location__map" data-reveal>
            {mapUrl ? (
              <iframe title={t.location.mapTitle} src={mapUrl} loading="lazy" referrerPolicy="no-referrer" />
            ) : (
              <div className="location__map-fallback"><LocateFixed aria-hidden="true" /><p>{property.location.publicName[language]}</p></div>
            )}
            <div className="location__map-label"><LocateFixed size={16} aria-hidden="true" /><span>{t.location.approximate}</span></div>
          </div>
          <figure className="location__photo image-frame" data-reveal>
            {image ? <img src={image.src} alt={image.alt[language]} width={image.width} height={image.height} loading="lazy" decoding="async" /> : null}
            <figcaption>{property.verification.imageryNote[language]}</figcaption>
          </figure>
          <article className="location__arrival" data-reveal>
            <Route size={24} strokeWidth={1.4} aria-hidden="true" />
            <div><p className="eyebrow">{property.location.publicName[language]}</p><h3>{t.location.arrivalTitle}</h3><p>{t.location.arrivalText}</p></div>
          </article>
        </div>
      </div>
    </section>
  )
}
