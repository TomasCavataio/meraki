import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export type LegalType = 'privacy' | 'legal'

export function LegalDialog({ type, onClose }: { type: LegalType; onClose: () => void }) {
  const { t } = useLanguage()
  const closeRef = useRef<HTMLButtonElement>(null)
  const title = type === 'privacy' ? t.legal.privacyTitle : t.legal.legalTitle
  const body = type === 'privacy' ? t.legal.privacyBody : t.legal.legalBody

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'Tab') {
        event.preventDefault()
        closeRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="legal-dialog" role="dialog" aria-modal="true" aria-labelledby="legal-title" onMouseDown={(event) => { if (event.currentTarget === event.target) onClose() }}>
      <article>
        <button ref={closeRef} type="button" onClick={onClose} aria-label={t.actions.close}><X aria-hidden="true" /></button>
        <p className="eyebrow">Meraki Home</p>
        <h2 id="legal-title">{title}</h2>
        <p className="legal-dialog__notice">{t.legal.provisional}</p>
        {body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </article>
    </div>
  )
}
