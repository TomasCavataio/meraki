export const languages = ['el', 'en', 'es', 'it'] as const

export type Language = (typeof languages)[number]
export type LocalizedText = Record<Language, string>

export interface PropertyFact {
  id: 'guests' | 'bedrooms' | 'beds' | 'bathrooms' | 'area' | 'parking' | 'views' | 'airConditioning'
  value?: number | string | boolean
}

export type AmenityIcon =
  | 'wifi'
  | 'snowflake'
  | 'cooking'
  | 'fridge'
  | 'kettle'
  | 'washer'
  | 'parking'
  | 'family'
  | 'pets'
  | 'smokeFree'
  | 'tv'
  | 'shuttle'

export interface Amenity {
  id: string
  category: 'comfort' | 'kitchen' | 'home' | 'access'
  icon: AmenityIcon
  enabled: boolean
  label: LocalizedText
}

export interface GalleryImage {
  id: string
  src: string
  width: number
  height: number
  alt: LocalizedText
  provisional: boolean
  focalPoint?: string
}

export interface BookingChannel {
  id: 'booking' | 'airbnb' | 'whatsapp' | 'email' | 'phone' | 'alternative'
  label: string
  value: string
  primary?: boolean
}

export interface NearbyPlace {
  id: string
  title: LocalizedText
  description: LocalizedText
  distance: LocalizedText
  type: 'town' | 'port' | 'beach' | 'culture' | 'airport'
}

export interface FaqItem {
  id: string
  question: LocalizedText
  answer: LocalizedText
}

export interface Review {
  id: string
  author: string
  quote: LocalizedText
  source?: string
  sourceUrl?: string
}

export interface PropertyConfig {
  name: string
  location: {
    publicName: LocalizedText
    privateAddress: string
    mapsUrl: string
    publicCoordinates?: { latitude: number; longitude: number }
    exactCoordinates?: { latitude: number; longitude: number }
  }
  content: {
    eyebrow: LocalizedText
    tagline: LocalizedText
    shortDescription: LocalizedText
    longDescription: LocalizedText
  }
  facts: PropertyFact[]
  amenities: Amenity[]
  gallery: GalleryImage[]
  bookingChannels: BookingChannel[]
  social: { instagram: string; facebook: string }
  nearby: NearbyPlace[]
  faqs: FaqItem[]
  reviews: Review[]
  checkIn: string
  checkOut: string
  policies: {
    cancellation: LocalizedText | null
    pets: LocalizedText | null
    children: LocalizedText | null
  }
  seo: {
    publicUrl: string
    socialImage: string
    title: LocalizedText
    description: LocalizedText
  }
  verification: {
    checkedAt: string
    sources: string[]
    imageryNote: LocalizedText
  }
}
