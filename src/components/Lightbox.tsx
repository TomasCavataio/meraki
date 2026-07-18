import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { GalleryImage, Language } from '../config/types'
import type { Translation } from '../i18n/translations'

interface LightboxProps {
  images: GalleryImage[]
  activeIndex: number
  language: Language
  t: Translation
  onChange: (index: number) => void
  onClose: () => void
}

export function Lightbox({ images, activeIndex, language, t, onChange, onClose }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const current = images[activeIndex]

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onChange((activeIndex - 1 + images.length) % images.length)
      if (event.key === 'ArrowRight') onChange((activeIndex + 1) % images.length)
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled])'))
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last?.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first?.focus()
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeIndex, images.length, onChange, onClose])

  if (!current) return null

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={t.gallery.dialogLabel} ref={dialogRef}>
      <div className="lightbox__topbar">
        <p>{String(activeIndex + 1).padStart(2, '0')} <span>/</span> {String(images.length).padStart(2, '0')}</p>
        <button ref={closeButtonRef} type="button" onClick={onClose} aria-label={t.actions.close}><X aria-hidden="true" /></button>
      </div>
      <figure>
        <img src={current.src} alt={current.alt[language]} width={current.width} height={current.height} />
        <figcaption>
          <span>{current.alt[language].replace(/\s[—–-]\s.*$/, '')}</span>
          {current.provisional ? <small>{t.gallery.provisional}</small> : null}
        </figcaption>
      </figure>
      <button className="lightbox__nav lightbox__nav--prev" type="button" onClick={() => onChange((activeIndex - 1 + images.length) % images.length)} aria-label={t.actions.previous}><ArrowLeft aria-hidden="true" /></button>
      <button className="lightbox__nav lightbox__nav--next" type="button" onClick={() => onChange((activeIndex + 1) % images.length)} aria-label={t.actions.next}><ArrowRight aria-hidden="true" /></button>
    </div>,
    document.body,
  )
}
