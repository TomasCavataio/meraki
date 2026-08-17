import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { languages } from '../config/types'
import { property } from '../config/property'
import { InstallAppButton } from '../components/InstallAppButton'
import { useLanguage } from '../i18n/LanguageContext'
import type { LegalType } from '../components/LegalDialog'

export function Footer({ onOpenLegal }: { onOpenLegal: (type: LegalType) => void }) {
  const { language, setLanguage, t } = useLanguage()
  const year = new Date().getFullYear()
  const booking = property.bookingChannels.find((channel) => channel.primary && channel.value)

  return (
    <footer className="footer">
      <div className="page-shell footer__top">
        <div className="footer__brand">
          <a href="#top" className="brand brand--footer"><span className="brand__mark" aria-hidden="true">M</span><span className="brand__text"><strong>{property.name}</strong><small>Lixouri · Kefalonia</small></span></a>
          <p>{t.footer.tagline}</p>
          <div className="footer__install"><InstallAppButton /></div>
        </div>
        <nav aria-label={t.footer.navigate}>
          <h2>{t.footer.navigate}</h2>
          <a href="#home">{t.nav.story}</a><a href="#gallery">{t.nav.gallery}</a><a href="#amenities">{t.nav.amenities}</a><a href="#explore">{t.nav.explore}</a><a href="#faq">{t.nav.faq}</a>
        </nav>
        <div className="footer__links">
          <h2>{t.footer.contact}</h2>
          {booking ? <a href={booking.value} target="_blank" rel="noreferrer">{booking.label}<ArrowUpRight size={14} aria-hidden="true" /></a> : null}
          <a href={property.location.mapsUrl} target="_blank" rel="noreferrer">Google Maps<ArrowUpRight size={14} aria-hidden="true" /></a>
          <span>{property.location.publicName[language]}</span>
        </div>
        <div className="footer__languages">
          <h2>{t.footer.languages}</h2>
          {languages.map((code) => <button type="button" key={code} onClick={() => setLanguage(code)} aria-current={language === code ? 'true' : undefined}>{code.toUpperCase()}</button>)}
        </div>
      </div>
      <div className="page-shell footer__bottom">
        <p>© {year} {property.name}. {t.footer.rights}</p>
        <div><button type="button" onClick={() => onOpenLegal('privacy')}>{t.footer.privacy}</button><button type="button" onClick={() => onOpenLegal('legal')}>{t.footer.legal}</button></div>
        <p>{t.footer.credits}</p>
        <a href="#top" aria-label={t.actions.backToTop}><ArrowUp size={18} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}
