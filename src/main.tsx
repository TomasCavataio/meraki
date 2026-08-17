import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { LanguageProvider } from './i18n/LanguageContext'
import './styles/global.css'

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return

  const register = () => {
    const baseUrl = new URL(import.meta.env.BASE_URL, document.baseURI)
    void navigator.serviceWorker
      .register(new URL('sw.js', baseUrl), { scope: baseUrl.pathname })
      .catch(() => undefined)
  }

  if (document.readyState === 'complete') {
    register()
  } else {
    window.addEventListener('load', register, { once: true })
  }
}

registerServiceWorker()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider><App /></LanguageProvider>
  </StrictMode>,
)
