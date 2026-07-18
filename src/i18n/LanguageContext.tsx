import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { languages, type Language } from '../config/types'
import { translations, type Translation } from './translations'

const STORAGE_KEY = 'meraki-language'

interface LanguageContextValue {
  language: Language
  t: Translation
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function isLanguage(value: string | null): value is Language {
  return value !== null && languages.some((language) => language === value)
}

function getInitialLanguage(): Language {
  const queryLanguage = new URLSearchParams(window.location.search).get('lang')
  if (isLanguage(queryLanguage)) return queryLanguage

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLanguage(stored)) return stored
  } catch {
    // Storage may be disabled; language selection still works for the session.
  }

  return 'el'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage)
    } catch {
      // The app remains fully usable when localStorage is unavailable.
    }

    const url = new URL(window.location.href)
    url.searchParams.set('lang', nextLanguage)
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(() => ({ language, t: translations[language], setLanguage }), [language, setLanguage])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
