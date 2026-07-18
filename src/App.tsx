import { useCallback, useState } from 'react'
import { Header } from './components/Header'
import { LegalDialog, type LegalType } from './components/LegalDialog'
import { useReveal } from './hooks/useReveal'
import { useSeo } from './hooks/useSeo'
import { useLanguage } from './i18n/LanguageContext'
import { Amenities } from './sections/Amenities'
import { Booking } from './sections/Booking'
import { Experience } from './sections/Experience'
import { Explore } from './sections/Explore'
import { Faq } from './sections/Faq'
import { Footer } from './sections/Footer'
import { Gallery } from './sections/Gallery'
import { Hero } from './sections/Hero'
import { Location } from './sections/Location'
import { Overview } from './sections/Overview'
import { Trust } from './sections/Trust'

export default function App() {
  const { language, t } = useLanguage()
  const [legal, setLegal] = useState<LegalType | null>(null)
  const closeLegal = useCallback(() => setLegal(null), [])
  useReveal()
  useSeo(language)

  return (
    <>
      <a className="skip-link" href="#main-content">{t.skipToContent}</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Overview />
        <Gallery />
        <Experience />
        <Amenities />
        <Location />
        <Explore />
        <Trust />
        <Booking />
        <Faq />
      </main>
      <Footer onOpenLegal={setLegal} />
      {legal ? <LegalDialog type={legal} onClose={closeLegal} /> : null}
    </>
  )
}
