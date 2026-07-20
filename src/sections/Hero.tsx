import { ArrowDown, ArrowRight } from 'lucide-react'
import { property } from '../config/property'
import { assetPath } from '../utils/assets'
import { useLanguage } from '../i18n/LanguageContext'

export function Hero() {
  const { language, t } = useLanguage()
  const hero = property.gallery[0]
  if (!hero) return null
  const heroSrc = assetPath('images/meraki-main-wide-1600.webp')
  const heroSrcSet = [
    `${assetPath('images/meraki-main-wide-960.webp')} 960w`,
    `${heroSrc} 1600w`,
    `${assetPath('images/meraki-main-wide-2400.webp')} 2400w`,
  ].join(', ')

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img
        className="hero__image"
        src={heroSrc}
        srcSet={heroSrcSet}
        sizes="100vw"
        alt={hero.alt[language]}
        width={1600}
        height={1067}
        loading="eager"
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
