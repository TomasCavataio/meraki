import {
  Baby,
  BusFront,
  CarFront,
  Coffee,
  CookingPot,
  Dog,
  Refrigerator,
  Shirt,
  Snowflake,
  Soup,
  Tv,
  Waves,
  Wifi,
  Wind,
  WashingMachine,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { property } from '../config/property'
import type { AmenityIcon } from '../config/types'
import { useLanguage } from '../i18n/LanguageContext'

const icons: Record<AmenityIcon, LucideIcon> = {
  wifi: Wifi,
  snowflake: Snowflake,
  cooking: CookingPot,
  coffee: Coffee,
  fridge: Refrigerator,
  kettle: Soup,
  washer: WashingMachine,
  iron: Shirt,
  hairDryer: Wind,
  parking: CarFront,
  family: Baby,
  pets: Dog,
  smokeFree: Wind,
  tv: Tv,
  shuttle: BusFront,
}

const categories = ['comfort', 'kitchen', 'home', 'access'] as const

export function Amenities() {
  const { language, t } = useLanguage()
  const enabled = property.amenities.filter((amenity) => amenity.enabled)

  return (
    <section className="amenities section" id="amenities">
      <div className="page-shell">
        <SectionHeading eyebrow={t.amenities.kicker} title={t.amenities.title} intro={t.amenities.intro} />
        <div className="amenities__groups">
          {categories.map((category) => {
            const items = enabled.filter((amenity) => amenity.category === category)
            if (!items.length) return null
            return (
              <section className="amenity-group" key={category} data-reveal>
                <div className="amenity-group__title"><Waves size={16} strokeWidth={1.5} aria-hidden="true" /><h3>{t.amenities.categories[category]}</h3></div>
                <ul>
                  {items.map((amenity) => {
                    const Icon = icons[amenity.icon]
                    return <li key={amenity.id}><Icon size={20} strokeWidth={1.4} aria-hidden="true" /><span>{amenity.label[language]}</span></li>
                  })}
                </ul>
              </section>
            )
          })}
        </div>
      </div>
    </section>
  )
}
