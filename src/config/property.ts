import type { PropertyConfig } from './types'
import { assetPath } from '../utils/assets'

/**
 * Fuente única de datos del alojamiento.
 *
 * - Los datos activados se verificaron el 17-07-2026 en el enlace de Google
 *   compartido y en la ficha pública de Booking.com.
 * - Los campos vacíos no se muestran en la interfaz.
 * - Las coordenadas publicadas apuntan al centro de Lixouri, no a la puerta
 *   del alojamiento. Añade `exactCoordinates` solo si deseas mostrar el pin.
 * - Las imágenes de la galería son fotografías oficiales del alojamiento.
 */
export const property: PropertyConfig = {
  name: 'Meraki Home',
  location: {
    publicName: {
      el: 'Ληξούρι, Κεφαλονιά, Ελλάδα',
      en: 'Lixouri, Kefalonia, Greece',
      es: 'Lixouri, Cefalonia, Grecia',
      it: 'Lixouri, Cefalonia, Grecia',
    },
    privateAddress: 'Xenofontos 4, Lixouri 282 00',
    mapsUrl: 'https://share.google/gn6Xjx0TjQQBwEcQm',
    publicCoordinates: { latitude: 38.19795, longitude: 20.4373 },
  },
  content: {
    eyebrow: {
      el: 'Μια ήσυχη βάση στο Ληξούρι',
      en: 'A quiet base in Lixouri',
      es: 'Un refugio sereno en Lixouri',
      it: 'Un rifugio tranquillo a Lixouri',
    },
    tagline: {
      el: 'Φως, απλότητα και ο δικός σας ρυθμός στην Κεφαλονιά.',
      en: 'Light, simplicity and your own pace in Kefalonia.',
      es: 'Luz, sencillez y tu propio ritmo en Cefalonia.',
      it: 'Luce, semplicità e il vostro ritmo a Cefalonia.',
    },
    shortDescription: {
      el: 'Ένα προσεγμένο σπίτι κοντά στην καρδιά του Ληξουρίου, για ημέρες που ξεκινούν αργά και τελειώνουν δίπλα στο Ιόνιο.',
      en: 'A thoughtful home close to the heart of Lixouri, for days that begin slowly and end beside the Ionian Sea.',
      es: 'Un hogar cuidado cerca del corazón de Lixouri, para días que empiezan despacio y terminan junto al mar Jónico.',
      it: 'Una casa curata vicino al cuore di Lixouri, per giornate che iniziano lentamente e finiscono accanto allo Ionio.',
    },
    longDescription: {
      el: 'Το Meraki Home είναι μια φωτεινή κατοικία 41 τ.μ. με ένα υπνοδωμάτιο, καθιστικό και εξοπλισμένη κουζίνα. Βρίσκεται σε μικρή απόσταση από το κέντρο και το λιμάνι του Ληξουρίου· μια πρακτική, ζεστή αφετηρία για ζευγάρια, μικρές οικογένειες ή μοναχικούς ταξιδιώτες που θέλουν να γνωρίσουν την Παλική χωρίς βιασύνη.',
      en: 'Meraki Home is a bright 41 m² residence with one bedroom, a living room and an equipped kitchen. Close to Lixouri centre and port, it is a practical, warm base for couples, small families or solo travellers who want to discover Paliki without rushing.',
      es: 'Meraki Home es una vivienda luminosa de 41 m² con un dormitorio, sala de estar y cocina equipada. Cerca del centro y del puerto de Lixouri, es una base práctica y acogedora para parejas, familias pequeñas o viajeros solos que quieran descubrir Paliki sin prisas.',
      it: 'Meraki Home è una casa luminosa di 41 m² con una camera, soggiorno e cucina attrezzata. Vicina al centro e al porto di Lixouri, è una base pratica e accogliente per coppie, piccole famiglie o viaggiatori solitari che desiderano scoprire Paliki con calma.',
    },
  },
  facts: [
    { id: 'guests' },
    { id: 'bedrooms', value: 1 },
    { id: 'beds', value: 1 },
    { id: 'sofa', value: 1 },
    { id: 'bathrooms', value: 1 },
    { id: 'area', value: 41 },
    { id: 'parking', value: true },
    { id: 'views', value: 'gardenCity' },
    { id: 'airConditioning', value: true },
  ],
  amenities: [
    { id: 'wifi', category: 'comfort', icon: 'wifi', enabled: true, label: { el: 'Δωρεάν Wi‑Fi', en: 'Free Wi‑Fi', es: 'Wi‑Fi gratuito', it: 'Wi‑Fi gratuito' } },
    { id: 'ac', category: 'comfort', icon: 'snowflake', enabled: true, label: { el: 'Κλιματισμός', en: 'Air conditioning', es: 'Aire acondicionado', it: 'Aria condizionata' } },
    { id: 'kitchen', category: 'kitchen', icon: 'cooking', enabled: true, label: { el: 'Εξοπλισμένη κουζίνα', en: 'Equipped kitchen', es: 'Cocina equipada', it: 'Cucina attrezzata' } },
    { id: 'fridge', category: 'kitchen', icon: 'fridge', enabled: true, label: { el: 'Ψυγείο', en: 'Refrigerator', es: 'Frigorífico', it: 'Frigorifero' } },
    { id: 'kettle', category: 'kitchen', icon: 'kettle', enabled: true, label: { el: 'Βραστήρας', en: 'Electric kettle', es: 'Hervidor eléctrico', it: 'Bollitore elettrico' } },
    { id: 'washer', category: 'home', icon: 'washer', enabled: true, label: { el: 'Πλυντήριο ρούχων', en: 'Washing machine', es: 'Lavadora', it: 'Lavatrice' } },
    { id: 'parking', category: 'access', icon: 'parking', enabled: true, label: { el: 'Δωρεάν χώρος στάθμευσης', en: 'Free on-site parking', es: 'Aparcamiento gratuito', it: 'Parcheggio gratuito' } },
    { id: 'family', category: 'home', icon: 'family', enabled: true, label: { el: 'Κατάλληλο για οικογένειες', en: 'Family friendly', es: 'Apto para familias', it: 'Adatto alle famiglie' } },
    { id: 'pets', category: 'home', icon: 'pets', enabled: true, label: { el: 'Φιλικό προς κατοικίδια', en: 'Pet friendly', es: 'Apto para mascotas', it: 'Pet friendly' } },
    { id: 'nonSmoking', category: 'comfort', icon: 'smokeFree', enabled: true, label: { el: 'Χώρος μη καπνιστών', en: 'Non-smoking home', es: 'Alojamiento sin humo', it: 'Casa non fumatori' } },
    { id: 'tv', category: 'comfort', icon: 'tv', enabled: true, label: { el: 'Smart TV', en: 'Smart TV', es: 'Smart TV', it: 'Smart TV' } },
    { id: 'coffee', category: 'kitchen', icon: 'coffee', enabled: true, label: { el: 'Καφετιέρα', en: 'Coffee maker', es: 'Cafetera', it: 'Macchina da caffè' } },
    { id: 'oven', category: 'kitchen', icon: 'cooking', enabled: true, label: { el: 'Φούρνος', en: 'Oven', es: 'Horno', it: 'Forno' } },
    { id: 'iron', category: 'home', icon: 'iron', enabled: true, label: { el: 'Ισιωτική μαλλιών', en: 'Hair straightener', es: 'Plancha de pelo', it: 'Piastra per capelli' } },
    { id: 'hairDryer', category: 'home', icon: 'hairDryer', enabled: true, label: { el: 'Πιστολάκι μαλλιών', en: 'Hair dryer', es: 'Secadora de pelo', it: 'Asciugacapelli' } },
    { id: 'shuttle', category: 'access', icon: 'shuttle', enabled: true, label: { el: 'Μεταφορά αεροδρομίου με χρέωση', en: 'Paid airport transfer', es: 'Traslado de aeropuerto de pago', it: 'Transfer aeroportuale a pagamento' } },
  ],
  gallery: [
    {
      id: 'hero', src: assetPath('images/meraki-living.webp'), width: 1360, height: 907, provisional: false, focalPoint: '58% 50%',
      alt: { el: 'Φωτεινό σαλόνι του Meraki Home', en: 'Bright living room at Meraki Home', es: 'Salón luminoso de Meraki Home', it: 'Luminoso soggiorno di Meraki Home' },
    },
    {
      id: 'bedroom', src: assetPath('images/meraki-bedroom.webp'), width: 1360, height: 907, provisional: false,
      alt: { el: 'Υπνοδωμάτιο του Meraki Home', en: 'Bedroom at Meraki Home', es: 'Dormitorio de Meraki Home', it: 'Camera da letto di Meraki Home' },
    },
    {
      id: 'bathroom', src: assetPath('images/meraki-bathroom.webp'), width: 1360, height: 907, provisional: false,
      alt: { el: 'Μπάνιο του Meraki Home', en: 'Bathroom at Meraki Home', es: 'Baño de Meraki Home', it: 'Bagno di Meraki Home' },
    },
    {
      id: 'exterior', src: assetPath('images/meraki-exterior.webp'), width: 1360, height: 907, provisional: false,
      alt: { el: 'Η εξωτερική είσοδος του Meraki Home', en: 'The exterior entrance of Meraki Home', es: 'La entrada exterior de Meraki Home', it: 'L’ingresso esterno di Meraki Home' },
    },
    {
      id: 'coast-cliffs', src: assetPath('images/meraki-coast-cliffs.jpg'), width: 2043, height: 3047, provisional: false,
      alt: { el: 'Απόκρημνη ακτή της Κεφαλονιάς', en: 'Kefalonia’s rugged coastline', es: 'Costa escarpada de Cefalonia', it: 'Costa selvaggia di Cefalonia' },
    },
    {
      id: 'coast-aerial', src: assetPath('images/meraki-coast-aerial.jpg'), width: 4000, height: 2250, provisional: false,
      alt: { el: 'Αεροφωτογραφία της ακτής της Κεφαλονιάς', en: 'Aerial view of Kefalonia’s coast', es: 'Vista aérea de la costa de Cefalonia', it: 'Vista aerea della costa di Cefalonia' },
    },
    {
      id: 'coast-beach', src: assetPath('images/meraki-coast-beach.jpg'), width: 4000, height: 6000, provisional: false,
      alt: { el: 'Παραλία με γαλαζοπράσινα νερά στην Κεφαλονιά', en: 'A turquoise beach in Kefalonia', es: 'Playa de aguas turquesas en Cefalonia', it: 'Spiaggia dalle acque turchesi a Cefalonia' },
    },
  ],
  bookingChannels: [
    { id: 'booking', label: 'Booking.com', value: 'https://www.booking.com/hotel/gr/meraki-home.en-gb.html', primary: true },
    { id: 'airbnb', label: 'Airbnb', value: '' },
    { id: 'whatsapp', label: 'WhatsApp', value: '' },
    { id: 'email', label: 'Email', value: '' },
    { id: 'phone', label: 'Phone', value: '' },
    { id: 'alternative', label: 'Alternative', value: '' },
  ],
  social: { instagram: '', facebook: '' },
  nearby: [
    { id: 'centre', type: 'town', title: { el: 'Κέντρο Ληξουρίου', en: 'Lixouri centre', es: 'Centro de Lixouri', it: 'Centro di Lixouri' }, description: { el: 'Καφέ, φαγητό και καθημερινές αγορές.', en: 'Cafés, dining and everyday essentials.', es: 'Cafés, gastronomía y compras cotidianas.', it: 'Caffè, ristoranti e acquisti quotidiani.' }, distance: { el: 'περίπου 300 μ.', en: 'about 300 m', es: 'aprox. 300 m', it: 'circa 300 m' } },
    { id: 'port', type: 'port', title: { el: 'Λιμάνι Ληξουρίου', en: 'Lixouri port', es: 'Puerto de Lixouri', it: 'Porto di Lixouri' }, description: { el: 'Σύνδεση με το Αργοστόλι με το τοπικό ferry.', en: 'Local ferry connection to Argostoli.', es: 'Conexión local en ferry con Argostoli.', it: 'Collegamento locale in traghetto con Argostoli.' }, distance: { el: '800 μ. · 9′ με τα πόδια', en: '800 m · 9 min walk', es: '800 m · 9 min a pie', it: '800 m · 9 min a piedi' } },
    { id: 'lepeda', type: 'beach', title: { el: 'Παραλία Λέπεδα', en: 'Lepeda Beach', es: 'Playa de Lepeda', it: 'Spiaggia di Lepeda' }, description: { el: 'Μια κοντινή επιλογή για ήρεμη ημέρα δίπλα στη θάλασσα.', en: 'A nearby option for an easy day by the sea.', es: 'Una opción cercana para pasar un día tranquilo junto al mar.', it: 'Una meta vicina per una giornata tranquilla sul mare.' }, distance: { el: 'περίπου 8′ οδικώς', en: 'about 8 min by car', es: 'aprox. 8 min en coche', it: 'circa 8 min in auto' } },
    { id: 'petani', type: 'beach', title: { el: 'Παραλία Πετανοί', en: 'Petani Beach', es: 'Playa de Petani', it: 'Spiaggia di Petani' }, description: { el: 'Δυτική ακτή, βότσαλα και ανοιχτός ορίζοντας.', en: 'West coast, pebbles and an open horizon.', es: 'Costa oeste, guijarros y horizonte abierto.', it: 'Costa occidentale, ciottoli e orizzonte aperto.' }, distance: { el: '11 χλμ.', en: '11 km', es: '11 km', it: '11 km' } },
    { id: 'xi', type: 'beach', title: { el: 'Παραλία Ξι', en: 'Xi Beach', es: 'Playa de Xi', it: 'Spiaggia di Xi' }, description: { el: 'Η χαρακτηριστική κοκκινωπή άμμος της Παλικής.', en: 'Paliki’s distinctive reddish sand.', es: 'La característica arena rojiza de Paliki.', it: 'La caratteristica sabbia rossastra di Paliki.' }, distance: { el: '7,3 χλμ.', en: '7.3 km', es: '7,3 km', it: '7,3 km' } },
  ],
  faqs: [
    { id: 'times', question: { el: 'Ποιες είναι οι ώρες άφιξης και αναχώρησης;', en: 'What are the check-in and check-out times?', es: '¿Cuáles son los horarios de entrada y salida?', it: 'Quali sono gli orari di check-in e check-out?' }, answer: { el: 'Η άφιξη είναι από τις 15:00 και η αναχώρηση έως τις 11:00. Επιβεβαιώστε τις λεπτομέρειες με τον οικοδεσπότη πριν από το ταξίδι.', en: 'Check-in is from 15:00 and check-out is by 11:00. Please confirm the details with the host before travelling.', es: 'La entrada es a partir de las 15:00 y la salida hasta las 11:00. Confirma los detalles con el anfitrión antes de viajar.', it: 'Il check-in è dalle 15:00 e il check-out entro le 11:00. Confermate i dettagli con l’host prima del viaggio.' } },
    { id: 'parking', question: { el: 'Υπάρχει χώρος στάθμευσης;', en: 'Is parking available?', es: '¿Hay aparcamiento?', it: 'È disponibile il parcheggio?' }, answer: { el: 'Ναι. Η δημόσια καταχώριση αναφέρει δωρεάν χώρο στάθμευσης στο κατάλυμα.', en: 'Yes. The public listing states that free on-site parking is available.', es: 'Sí. La ficha pública indica que hay aparcamiento gratuito en el alojamiento.', it: 'Sì. La scheda pubblica indica la disponibilità di parcheggio gratuito in loco.' } },
    { id: 'pets', question: { el: 'Επιτρέπονται τα κατοικίδια;', en: 'Are pets allowed?', es: '¿Se admiten mascotas?', it: 'Gli animali sono ammessi?' }, answer: { el: 'Φυσικά, αγαπάμε τους τριχωτούς φίλους.', en: 'Absolutely, we love hairy friends.', es: 'Por supuesto, nos encantan los amigos peludos.', it: 'Certamente, amiamo gli amici pelosi.' } },
    { id: 'transport', question: { el: 'Πώς φτάνω από το αεροδρόμιο;', en: 'How do I arrive from the airport?', es: '¿Cómo se llega desde el aeropuerto?', it: 'Come si arriva dall’aeroporto?' }, answer: { el: 'Το αεροδρόμιο Κεφαλονιάς αναφέρεται σε απόσταση 15 χλμ. και διατίθεται μεταφορά με επιπλέον χρέωση κατόπιν συνεννόησης.', en: 'Kefalonia Airport is listed 15 km away, and a paid transfer can be arranged.', es: 'El aeropuerto de Cefalonia figura a 15 km y se puede organizar un traslado de pago.', it: 'L’aeroporto di Cefalonia è indicato a 15 km ed è possibile organizzare un transfer a pagamento.' } },
  ],
  reviews: [],
  checkIn: '15:00',
  checkOut: '11:00',
  policies: { cancellation: null, pets: null, children: null },
  seo: {
    publicUrl: import.meta.env.VITE_PUBLIC_SITE_URL ?? '',
    socialImage: assetPath('images/meraki-living.webp'),
    title: { el: 'Meraki Home · Διαμονή στο Ληξούρι, Κεφαλονιά', en: 'Meraki Home · Stay in Lixouri, Kefalonia', es: 'Meraki Home · Alojamiento en Lixouri, Cefalonia', it: 'Meraki Home · Soggiorno a Lixouri, Cefalonia' },
    description: { el: 'Φωτεινή κατοικία 41 τ.μ. κοντά στο κέντρο και το λιμάνι του Ληξουρίου. Ανακαλύψτε το Meraki Home στην Κεφαλονιά.', en: 'A bright 41 m² home close to Lixouri centre and port. Discover Meraki Home in Kefalonia.', es: 'Una vivienda luminosa de 41 m² cerca del centro y del puerto de Lixouri. Descubre Meraki Home en Cefalonia.', it: 'Una luminosa casa di 41 m² vicino al centro e al porto di Lixouri. Scoprite Meraki Home a Cefalonia.' },
  },
  verification: {
    checkedAt: '2026-07-17',
    sources: ['https://share.google/gn6Xjx0TjQQBwEcQm', 'https://www.booking.com/hotel/gr/meraki-home.en-gb.html'],
  },
}
