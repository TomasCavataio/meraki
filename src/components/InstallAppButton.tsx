import { Download, Plus, Share2, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useInstallApp } from '../hooks/useInstallApp'
import { useLanguage } from '../i18n/LanguageContext'

export function InstallAppButton() {
  const { t } = useLanguage()
  const { canInstall, isAppleMobile, promptInstall } = useInstallApp()
  const [guideOpen, setGuideOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!guideOpen) return
    closeRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setGuideOpen(false)
      if (event.key === 'Tab') {
        event.preventDefault()
        closeRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [guideOpen])

  if (!canInstall) return null

  const handleInstall = () => {
    if (isAppleMobile) {
      setGuideOpen(true)
    } else {
      void promptInstall()
    }
  }

  return (
    <>
      <button className="button button--small install-app-button" type="button" onClick={handleInstall} title={t.install.label} aria-label={t.install.label}>
        <Download size={16} aria-hidden="true" />
        <span>{t.install.label}</span>
      </button>
      {guideOpen ? (
        <div className="install-guide" role="dialog" aria-modal="true" aria-labelledby="install-guide-title" onMouseDown={(event) => { if (event.currentTarget === event.target) setGuideOpen(false) }}>
          <article>
            <button className="install-guide__close" ref={closeRef} type="button" onClick={() => setGuideOpen(false)} aria-label={t.actions.close}><X aria-hidden="true" /></button>
            <p className="eyebrow">{t.install.kicker}</p>
            <h2 id="install-guide-title">{t.install.title}</h2>
            <p>{t.install.body}</p>
            <ol className="install-guide__steps">
              <li><Share2 size={18} aria-hidden="true" /><span>{t.install.stepShare}</span></li>
              <li><Plus size={18} aria-hidden="true" /><span>{t.install.stepAdd}</span></li>
            </ol>
            <button className="button button--dark" type="button" onClick={() => setGuideOpen(false)}>{t.actions.close}</button>
          </article>
        </div>
      ) : null}
    </>
  )
}
