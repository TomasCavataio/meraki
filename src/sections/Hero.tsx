import { ArrowDown, ArrowRight } from 'lucide-react'
import { property } from '../config/property'
import { assetPath } from '../utils/assets'
import { useLanguage } from '../i18n/LanguageContext'

export function Hero() {
  const { language, t } = useLanguage()
  const hero = property.gallery[0]
  if (!hero) return null
  const heroSrc = assetPath('images/meraki-main-wide.jpg')

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img
        className="hero__image"
        src={heroSrc}
        alt={hero.alt[language]}
        width={2400}
        height={1600}
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
      <a className="hero__scroll" href="#home"><span>{t.hero.scroll}</span><ArrowDown size={18} aria-hidden="true" /></a>
    </section>
  )
}
