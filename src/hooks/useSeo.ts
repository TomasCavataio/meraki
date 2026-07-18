import { useEffect } from 'react'
import { property } from '../config/property'
import type { Language } from '../config/types'

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value))
}

export function useSeo(language: Language) {
  useEffect(() => {
    const title = property.seo.title[language]
    const description = property.seo.description[language]
    const publicUrl = property.seo.publicUrl.replace(/\/$/, '')
    const localizedUrl = publicUrl ? `${publicUrl}/?lang=${language}` : ''
    const socialImage = publicUrl ? new URL(property.seo.socialImage, `${publicUrl}/`).href : property.seo.socialImage

    document.title = title
    setMeta('meta[name="description"]', { name: 'description', content: description })
    setMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    setMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    setMeta('meta[property="og:image"]', { property: 'og:image', content: socialImage })
    setMeta('meta[property="og:locale"]', { property: 'og:locale', content: language === 'el' ? 'el_GR' : `${language}_${language === 'en' ? 'GB' : language.toUpperCase()}` })
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })

    if (localizedUrl) {
      setMeta('meta[property="og:url"]', { property: 'og:url', content: localizedUrl })
      let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.appendChild(canonical)
      }
      canonical.href = localizedUrl
    }

    const oldStructuredData = document.getElementById('property-structured-data')
    oldStructuredData?.remove()

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'LodgingBusiness',
      name: property.name,
      description,
      url: localizedUrl || undefined,
      image: property.gallery.map((image) => publicUrl ? new URL(image.src, `${publicUrl}/`).href : image.src),
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lixouri',
        addressRegion: 'Kefalonia',
        addressCountry: 'GR',
      },
      amenityFeature: property.amenities.filter((amenity) => amenity.enabled).map((amenity) => ({
        '@type': 'LocationFeatureSpecification',
        name: amenity.label[language],
        value: true,
      })),
      sameAs: property.bookingChannels.filter((channel) => channel.value).map((channel) => channel.value),
    }

    const script = document.createElement('script')
    script.id = 'property-structured-data'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => script.remove()
  }, [language])
}
