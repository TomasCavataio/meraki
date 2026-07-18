import { ArrowDown, ArrowRight } from 'lucide-react'
import { property } from '../config/property'
import { useLanguage } from '../i18n/LanguageContext'

export function Hero() {
  const { language, t } = useLanguage()
  const hero = property.gallery[0]
  if (!hero) return null

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img
        className="hero__image"
        src={hero.src}
        alt={hero.alt[language]}
        width={hero.width}
        height={hero.height}
        fetchPriority="high"
        decoding="async"
        style={{ objectPosition: hero.focalPoint }}
      />
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__content page-shell">
        <p className="hero__location">{property.location.publicName[language]}</p>
        <h1 id="hero-title"><span>{property.name}</span>{property.content.tagline[language]}</h1>
        <p className="hero__description">{property.content.shortDescription[language]}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#booking">{t.actions.checkAvailability}<ArrowRight size={18} aria-hidden="true" /></a>
          <a className="button button--ghost" href="#home">{t.actions.discoverHome}</a>
        </div>
      </div>
      <p className="hero__provisional">{property.verification.imageryNote[language]}</p>
      <a className="hero__scroll" href="#home"><span>{t.hero.scroll}</span><ArrowDown size={18} aria-hidden="true" /></a>
    </section>
  )
}
