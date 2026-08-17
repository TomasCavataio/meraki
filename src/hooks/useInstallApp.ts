import { useCallback, useEffect, useState } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

interface StandaloneNavigator extends Navigator {
  standalone?: boolean
}

function isStandalone() {
  if (typeof window === 'undefined') return false
  const displayMode = typeof window.matchMedia === 'function' && window.matchMedia('(display-mode: standalone)').matches
  return displayMode || Boolean((window.navigator as StandaloneNavigator).standalone)
}

function isAppleMobileDevice() {
  if (typeof navigator === 'undefined') return false
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
}

export function useInstallApp() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState(isStandalone)
  const [isAppleMobile] = useState(isAppleMobileDevice)

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault()
      setInstallEvent(event as BeforeInstallPromptEvent)
    }
    const handleAppInstalled = () => {
      setInstallEvent(null)
      setIsInstalled(true)
    }
    const handleDisplayModeChange = () => setIsInstalled(isStandalone())
    const mediaQuery = typeof window.matchMedia === 'function' ? window.matchMedia('(display-mode: standalone)') : null

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)
    mediaQuery?.addEventListener('change', handleDisplayModeChange)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
      mediaQuery?.removeEventListener('change', handleDisplayModeChange)
    }
  }, [])

  const promptInstall = useCallback(async () => {
    if (!installEvent) return

    try {
      await installEvent.prompt()
      const choice = await installEvent.userChoice
      if (choice.outcome === 'accepted') setIsInstalled(true)
    } finally {
      setInstallEvent(null)
    }
  }, [installEvent])

  return {
    canInstall: !isInstalled && (Boolean(installEvent) || isAppleMobile),
    isAppleMobile,
    promptInstall,
  }
}
