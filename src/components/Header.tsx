import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { languages } from '../config/types'
import { property } from '../config/property'
import { useLanguage } from '../i18n/LanguageContext'

const navItems = [
  { key: 'story', href: '#home' },
  { key: 'gallery', href: '#gallery' },
  { key: 'amenities', href: '#amenities' },
  { key: 'location', href: '#location' },
  { key: 'explore', href: '#explore' },
] as const

const languageNames = { el: 'Ελληνικά', en: 'English', es: 'Español', it: 'Italiano' } as const

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    document.body.classList.add('menu-is-open')
    firstMenuLinkRef.current?.focus()

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('menu-is-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`site-header${isScrolled || menuOpen ? ' site-header--solid' : ''}`}>
        <a className="brand" href="#top" aria-label={`${property.name} — ${t.actions.backToTop}`} onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true">M</span>
          <span className="brand__text">
            <strong>{property.name}</strong>
            <small>Lixouri · Kefalonia</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label={t.footer.navigate}>
          {navItems.map((item) => <a href={item.href} key={item.key}>{t.nav[item.key]}</a>)}
        </nav>

        <div className="header-actions">
          <label className="language-select">
            <span className="sr-only">{t.accessibility.languageSelector}</span>
            <span className="language-select__value" aria-hidden="true">
              <span>{language.toUpperCase()}</span><span className="language-select__separator">·</span><span className="language-select__name">{languageNames[language]}</span>
            </span>
            <select value={language} onChange={(event) => setLanguage(event.target.value as typeof language)} aria-label={t.accessibility.languageSelector}>
              {languages.map((code) => <option key={code} value={code}>{code.toUpperCase()} · {languageNames[code]}</option>)}
            </select>
          </label>
          <a className="button button--small header-cta" href="#booking">
            <span>{t.nav.booking}</span><ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            ref={menuButtonRef}
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label={t.footer.navigate}>
          {navItems.map((item, index) => (
            <a ref={index === 0 ? firstMenuLinkRef : undefined} href={item.href} key={item.key} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
              <span>0{index + 1}</span>{t.nav[item.key]}
            </a>
          ))}
          <a href="#faq" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}><span>06</span>{t.nav.faq}</a>
        </nav>
        <a className="button button--primary mobile-menu__cta" href="#booking" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
          {t.actions.checkAvailability}<ArrowUpRight size={18} aria-hidden="true" />
        </a>
        <p>{property.location.publicName[language]}</p>
      </div>
    </>
  )
}
