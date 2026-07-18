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
 * - Las imágenes actuales son editoriales provisionales generadas para el
 *   diseño. Sustituye los archivos manteniendo los nombres o edita `gallery`.
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
    privateAddress: '',
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
    { id: 'beds', value: 2 },
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
    { id: 'pets', category: 'home', icon: 'pets', enabled: true, label: { el: 'Κατοικίδια κατόπιν συνεννόησης', en: 'Pets by arrangement', es: 'Mascotas bajo consulta', it: 'Animali su richiesta' } },
    { id: 'nonSmoking', category: 'comfort', icon: 'smokeFree', enabled: true, label: { el: 'Χώρος μη καπνιστών', en: 'Non-smoking home', es: 'Alojamiento sin humo', it: 'Casa non fumatori' } },
    { id: 'tv', category: 'comfort', icon: 'tv', enabled: false, label: { el: 'Τηλεόραση', en: 'Television', es: 'Televisión', it: 'Televisione' } },
    { id: 'shuttle', category: 'access', icon: 'shuttle', enabled: true, label: { el: 'Μεταφορά αεροδρομίου με χρέωση', en: 'Paid airport transfer', es: 'Traslado de aeropuerto de pago', it: 'Transfer aeroportuale a pagamento' } },
  ],
  gallery: [
    {
      id: 'hero', src: assetPath('images/meraki-hero.webp'), width: 1536, height: 1024, provisional: true, focalPoint: '55% 50%',
      alt: { el: 'Πρωινό φως πάνω από το Ιόνιο από μια πέτρινη βεράντα — προσωρινή εικόνα', en: 'Morning light over the Ionian Sea from a stone terrace — provisional image', es: 'Luz de mañana sobre el mar Jónico desde una terraza de piedra — imagen provisional', it: 'Luce del mattino sullo Ionio da una terrazza in pietra — immagine provvisoria' },
    },
    {
      id: 'living', src: assetPath('images/meraki-living.webp'), width: 1024, height: 1536, provisional: true, focalPoint: '50% 50%',
      alt: { el: 'Φωτεινό μεσογειακό καθιστικό σε φυσικούς τόνους — προσωρινή εικόνα', en: 'Light Mediterranean living room in natural tones — provisional image', es: 'Salón mediterráneo luminoso en tonos naturales — imagen provisional', it: 'Soggiorno mediterraneo luminoso dai toni naturali — immagine provvisoria' },
    },
    {
      id: 'breakfast', src: assetPath('images/meraki-breakfast.webp'), width: 1536, height: 1024, provisional: true,
      alt: { el: 'Ήσυχο ελληνικό πρωινό σε ξύλινο τραπέζι — προσωρινή εικόνα', en: 'A quiet Greek breakfast on a wooden table — provisional image', es: 'Un desayuno griego tranquilo sobre una mesa de madera — imagen provisional', it: 'Una tranquilla colazione greca su un tavolo di legno — immagine provvisoria' },
    },
    {
      id: 'bedroom', src: assetPath('images/meraki-bedroom.webp'), width: 1536, height: 1024, provisional: true,
      alt: { el: 'Ήρεμο υπνοδωμάτιο με λευκά λινά — προσωρινή εικόνα', en: 'Serene bedroom with white linen — provisional image', es: 'Dormitorio sereno con ropa de cama blanca — imagen provisional', it: 'Camera serena con biancheria bianca — immagine provvisoria' },
    },
    {
      id: 'door', src: assetPath('images/meraki-door.webp'), width: 1024, height: 1536, provisional: true,
      alt: { el: 'Ασβεστωμένη είσοδος με ελιά στο Ληξούρι — προσωρινή εικόνα', en: 'Whitewashed entrance with an olive tree in Lixouri — provisional image', es: 'Entrada encalada con un olivo en Lixouri — imagen provisional', it: 'Ingresso imbiancato con ulivo a Lixouri — immagine provvisoria' },
    },
    {
      id: 'coast', src: assetPath('images/meraki-coast.webp'), width: 1536, height: 1024, provisional: true,
      alt: { el: 'Βραχώδης ακτή της Κεφαλονιάς στο απογευματινό φως — προσωρινή εικόνα', en: 'Kefalonia’s rocky coast in the afternoon light — provisional image', es: 'Costa rocosa de Cefalonia a la luz de la tarde — imagen provisional', it: 'Costa rocciosa di Cefalonia nella luce del pomeriggio — immagine provvisoria' },
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
    { id: 'pets', question: { el: 'Επιτρέπονται τα κατοικίδια;', en: 'Are pets allowed?', es: '¿Se admiten mascotas?', it: 'Gli animali sono ammessi?' }, answer: { el: 'Η δημόσια καταχώριση αναφέρει ότι τα κατοικίδια επιτρέπονται. Επικοινωνήστε πριν από την κράτηση για τυχόν όρους.', en: 'The public listing states that pets are allowed. Please check any conditions before booking.', es: 'La ficha pública indica que se admiten mascotas. Consulta las condiciones antes de reservar.', it: 'La scheda pubblica indica che gli animali sono ammessi. Verificate eventuali condizioni prima di prenotare.' } },
    { id: 'transport', question: { el: 'Πώς φτάνω από το αεροδρόμιο;', en: 'How do I arrive from the airport?', es: '¿Cómo se llega desde el aeropuerto?', it: 'Come si arriva dall’aeroporto?' }, answer: { el: 'Το αεροδρόμιο Κεφαλονιάς αναφέρεται σε απόσταση 15 χλμ. και διατίθεται μεταφορά με επιπλέον χρέωση κατόπιν συνεννόησης.', en: 'Kefalonia Airport is listed 15 km away, and a paid transfer can be arranged.', es: 'El aeropuerto de Cefalonia figura a 15 km y se puede organizar un traslado de pago.', it: 'L’aeroporto di Cefalonia è indicato a 15 km ed è possibile organizzare un transfer a pagamento.' } },
  ],
  reviews: [],
  checkIn: '15:00',
  checkOut: '11:00',
  policies: { cancellation: null, pets: null, children: null },
  seo: {
    publicUrl: import.meta.env.VITE_PUBLIC_SITE_URL ?? '',
    socialImage: assetPath('images/meraki-hero.webp'),
    title: { el: 'Meraki Home · Διαμονή στο Ληξούρι, Κεφαλονιά', en: 'Meraki Home · Stay in Lixouri, Kefalonia', es: 'Meraki Home · Alojamiento en Lixouri, Cefalonia', it: 'Meraki Home · Soggiorno a Lixouri, Cefalonia' },
    description: { el: 'Φωτεινή κατοικία 41 τ.μ. κοντά στο κέντρο και το λιμάνι του Ληξουρίου. Ανακαλύψτε το Meraki Home στην Κεφαλονιά.', en: 'A bright 41 m² home close to Lixouri centre and port. Discover Meraki Home in Kefalonia.', es: 'Una vivienda luminosa de 41 m² cerca del centro y del puerto de Lixouri. Descubre Meraki Home en Cefalonia.', it: 'Una luminosa casa di 41 m² vicino al centro e al porto di Lixouri. Scoprite Meraki Home a Cefalonia.' },
  },
  verification: {
    checkedAt: '2026-07-17',
    sources: ['https://share.google/gn6Xjx0TjQQBwEcQm', 'https://www.booking.com/hotel/gr/meraki-home.en-gb.html'],
    imageryNote: { el: 'Οι εικόνες είναι προσωρινές και θα αντικατασταθούν από τις επίσημες φωτογραφίες του καταλύματος.', en: 'Images are provisional and will be replaced with official property photography.', es: 'Las imágenes son provisionales y se sustituirán por fotografías oficiales del alojamiento.', it: 'Le immagini sono provvisorie e saranno sostituite dalle fotografie ufficiali della struttura.' },
  },
}
