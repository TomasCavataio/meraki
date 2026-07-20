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
    mapsUrl: 'https://maps.app.goo.gl/SBBpyXz6spdpxfnE7?g_st=ic',
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
      el: 'Ένα σπίτι φτιαγμένο με αγάπη και μεράκι, στην καρδιά του Ληξουρίου.',
      en: 'A home made with love and meraki, in the heart of Lixouri.',
      es: 'Un hogar creado con amor y meraki, en el corazón de Lixouri.',
      it: 'Una casa realizzata con amore e meraki, nel cuore di Lixouri.',
    },
    shortDescription: {
      el: 'Ένα προσεγμένο σπίτι κοντά στην καρδιά του Ληξουρίου, για ημέρες που ξεκινούν αργά και τελειώνουν δίπλα στο Ιόνιο.',
      en: 'A thoughtful home close to the heart of Lixouri, for days that begin slowly and end beside the Ionian Sea.',
      es: 'Un hogar cuidado cerca del corazón de Lixouri, para días que empiezan despacio y terminan junto al mar Jónico.',
      it: 'Una casa curata vicino al cuore di Lixouri, per giornate che iniziano lentamente e finiscono accanto allo Ionio.',
    },
    longDescription: {
      el: 'Το Meraki Home είναι μια μικρή οικογενειακή δημιουργία, ανακαινισμένη με αγάπη, προσοχή και πολύ μεράκι. Στην καρδιά του Ληξουρίου, προσφέρει άνετο υπνοδωμάτιο, ενιαίο καθιστικό με κουζίνα, καναπέ-κρεβάτι, ευρύχωρο μπάνιο και μικρό κήπο. Ένα ζεστό και προσεγμένο σπίτι για ζευγάρια, οικογένειες, φίλους ή μοναχικούς ταξιδιώτες, με όμορφες παραλίες σε κοντινή απόσταση.',
      en: 'Meraki Home is a small family creation, renovated with love, care and a great deal of meraki. In the heart of Lixouri, it offers a comfortable bedroom, an open-plan living room with kitchen, a sofa bed, a spacious bathroom and a small garden. A warm, thoughtfully appointed home for couples, families, friends or solo travellers, with beautiful beaches just a short distance away.',
      es: 'Meraki Home es una pequeña creación familiar, renovada con amor, cuidado y mucho meraki. En el corazón de Lixouri, ofrece un dormitorio confortable, un salón diáfano con cocina, un sofá cama, un baño espacioso y un pequeño jardín. Un hogar cálido y cuidado para parejas, familias, amigos o viajeros solos, con bonitas playas a poca distancia.',
      it: 'Meraki Home è una piccola creazione di famiglia, ristrutturata con amore, cura e tanto meraki. Nel cuore di Lixouri offre una confortevole camera da letto, un soggiorno open space con cucina, un divano letto, un bagno spazioso e un piccolo giardino. Una casa calda e curata per coppie, famiglie, amici o viaggiatori solitari, con splendide spiagge a breve distanza.',
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
    { id: 'iron', category: 'home', icon: 'iron', enabled: true, label: { el: 'Σίδερο ρούχων', en: 'Clothes iron', es: 'Plancha de ropa', it: 'Ferro da stiro' } },
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
      id: 'main-wide', src: assetPath('images/meraki-main-wide-2400.webp'), width: 2400, height: 1600, provisional: false,
      alt: { el: 'Φωτεινό σαλόνι και κουζίνα του Meraki Home', en: 'Bright living room and kitchen at Meraki Home', es: 'Salón y cocina luminosos de Meraki Home', it: 'Luminoso soggiorno e cucina di Meraki Home' },
    },
    {
      id: 'bathroom-shower', src: assetPath('images/meraki-bathroom-shower.webp'), width: 1600, height: 2400, provisional: false,
      alt: { el: 'Μπάνιο με ντους του Meraki Home', en: 'Bathroom with shower at Meraki Home', es: 'Baño con ducha de Meraki Home', it: 'Bagno con doccia di Meraki Home' },
    },
    {
      id: 'living-wide', src: assetPath('images/meraki-living-wide.webp'), width: 1600, height: 1067, provisional: false,
      alt: { el: 'Ευρύχωρο σαλόνι του Meraki Home', en: 'Spacious living room at Meraki Home', es: 'Salón amplio de Meraki Home', it: 'Ampio soggiorno di Meraki Home' },
    },
    {
      id: 'kitchen-wide', src: assetPath('images/meraki-kitchen-wide.webp'), width: 1600, height: 1066, provisional: false,
      alt: { el: 'Η κουζίνα του Meraki Home', en: 'The kitchen at Meraki Home', es: 'La cocina de Meraki Home', it: 'La cucina di Meraki Home' },
    },
    {
      id: 'living-sofa', src: assetPath('images/meraki-living-sofa.webp'), width: 1600, height: 1067, provisional: false,
      alt: { el: 'Καθιστικό με φυτά και φυσικό φως', en: 'Living room with plants and natural light', es: 'Salón con plantas y luz natural', it: 'Soggiorno con piante e luce naturale' },
    },
    {
      id: 'details', src: assetPath('images/meraki-details.webp'), width: 1600, height: 2400, provisional: false,
      alt: { el: 'Λεπτομέρεια διακόσμησης με ορχιδέα', en: 'Decorative detail with an orchid', es: 'Detalle decorativo con orquídea', it: 'Dettaglio decorativo con orchidea' },
    },
    {
      id: 'oven', src: assetPath('images/meraki-oven.webp'), width: 1600, height: 1067, provisional: false,
      alt: { el: 'Ο φούρνος της κουζίνας', en: 'The kitchen oven', es: 'El horno de la cocina', it: 'Il forno della cucina' },
    },
    {
      id: 'coffee-machine', src: assetPath('images/meraki-coffee-machine.webp'), width: 1600, height: 1067, provisional: false,
      alt: { el: 'Καφετιέρα Nespresso', en: 'Nespresso coffee machine', es: 'Cafetera Nespresso', it: 'Macchina da caffè Nespresso' },
    },
    {
      id: 'coast-cliffs', src: assetPath('images/meraki-coast-cliffs.webp'), width: 1200, height: 1790, provisional: false,
      alt: { el: 'Απόκρημνη ακτή της Κεφαλονιάς', en: 'Kefalonia’s rugged coastline', es: 'Costa escarpada de Cefalonia', it: 'Costa selvaggia di Cefalonia' },
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
    { id: 'centre', type: 'town', mapsUrl: 'https://maps.app.goo.gl/xcbWDEAUBymSJyy76?g_st=ic', title: { el: 'Κέντρο Ληξουρίου', en: 'Lixouri centre', es: 'Centro de Lixouri', it: 'Centro di Lixouri' }, description: { el: 'Καφέ, φαγητό και καθημερινές αγορές.', en: 'Cafés, dining and everyday essentials.', es: 'Cafés, gastronomía y compras cotidianas.', it: 'Caffè, ristoranti e acquisti quotidiani.' }, distance: { el: 'περίπου 300 μ.', en: 'about 300 m', es: 'aprox. 300 m', it: 'circa 300 m' } },
    { id: 'petani', type: 'beach', mapsUrl: 'https://maps.app.goo.gl/23csRjj5f76s2Tr69?g_st=ic', title: { el: 'Παραλία Πετανοί', en: 'Petani Beach', es: 'Playa de Petani', it: 'Spiaggia di Petani' }, description: { el: 'Δυτική ακτή, βότσαλα και ανοιχτός ορίζοντας.', en: 'West coast, pebbles and an open horizon.', es: 'Costa oeste, guijarros y horizonte abierto.', it: 'Costa occidentale, ciottoli e orizzonte aperto.' }, distance: { el: '13 χλμ.', en: '13 km', es: '13 km', it: '13 km' } },
    { id: 'xi', type: 'beach', mapsUrl: 'https://maps.app.goo.gl/6iPyWoE26544qXdG6?g_st=ic', title: { el: 'Παραλία Ξι', en: 'Xi Beach', es: 'Playa de Xi', it: 'Spiaggia di Xi' }, description: { el: 'Η χαρακτηριστική κοκκινωπή άμμος της Παλικής.', en: 'Paliki’s distinctive reddish sand.', es: 'La característica arena rojiza de Paliki.', it: 'La caratteristica sabbia rossastra di Paliki.' }, distance: { el: '7,3 χλμ.', en: '7.3 km', es: '7,3 km', it: '7,3 km' } },
    { id: 'lagadakia', type: 'beach', mapsUrl: 'https://maps.app.goo.gl/q6NYU5ioqytdMybd8?g_st=ic', title: { el: 'Παραλία Λαγαδάκια', en: 'Lagadakia Beach', es: 'Playa de Lagadakia', it: 'Spiaggia di Lagadakia' }, description: { el: 'Μια όμορφη παραλία για μια ήρεμη ημέρα δίπλα στη θάλασσα.', en: 'A beautiful beach for a peaceful day by the sea.', es: 'Una playa preciosa para pasar un día tranquilo junto al mar.', it: 'Una bella spiaggia per una giornata tranquilla sul mare.' }, distance: { el: '17′ οδικώς · 10 χλμ.', en: '17 min by car · 10 km', es: '17 min en coche · 10 km', it: '17 min in auto · 10 km' } },
    { id: 'vatsa', type: 'beach', mapsUrl: 'https://maps.app.goo.gl/3rxfaBgyHMV5xz6g6?g_st=ic', title: { el: 'Βάτσα', en: 'Vatsa Bay', es: 'Bahía de Vatsa', it: 'Baia di Vatsa' }, description: { el: 'Ήσυχος κόλπος για μια χαλαρή ημέρα δίπλα στη θάλασσα.', en: 'A quiet bay for a relaxed day by the sea.', es: 'Una bahía tranquila para pasar un día relajado junto al mar.', it: 'Una baia tranquilla per una giornata rilassante sul mare.' }, distance: { el: '16′ οδικώς · 8,9 χλμ.', en: '16 min by car · 8.9 km', es: '16 min en coche · 8,9 km', it: '16 min in auto · 8,9 km' } },
  ],
  faqs: [
    { id: 'times', question: { el: 'Ποιες είναι οι ώρες άφιξης και αναχώρησης;', en: 'What are the check-in and check-out times?', es: '¿Cuáles son los horarios de entrada y salida?', it: 'Quali sono gli orari di check-in e check-out?' }, answer: { el: 'Η άφιξη είναι από τις 15:00 και η αναχώρηση έως τις 11:00. Επιβεβαιώστε τις λεπτομέρειες με τον οικοδεσπότη πριν από το ταξίδι.', en: 'Check-in is from 15:00 and check-out is by 11:00. Please confirm the details with the host before travelling.', es: 'La entrada es a partir de las 15:00 y la salida hasta las 11:00. Confirma los detalles con el anfitrión antes de viajar.', it: 'Il check-in è dalle 15:00 e il check-out entro le 11:00. Confermate i dettagli con l’host prima del viaggio.' } },
    { id: 'parking', question: { el: 'Υπάρχει χώρος στάθμευσης;', en: 'Is parking available?', es: '¿Hay aparcamiento?', it: 'È disponibile il parcheggio?' }, answer: { el: 'Ναι, υπάρχει αποκλειστική θέση στάθμευσης ακριβώς μπροστά από την πόρτα του σπιτιού.', en: 'Yes, you have a reserved parking spot directly in front of the house.', es: 'Sí, tienes una plaza de aparcamiento reservada justo delante de la puerta de la casa.', it: 'Sì, avete un posto auto riservato proprio davanti alla porta della casa.' } },
    { id: 'pets', question: { el: 'Επιτρέπονται τα κατοικίδια;', en: 'Are pets allowed?', es: '¿Se admiten mascotas?', it: 'Gli animali sono ammessi?' }, answer: { el: 'Φυσικά, αγαπάμε τους τριχωτούς φίλους.', en: 'Absolutely, we love hairy friends.', es: 'Por supuesto, nos encantan los amigos peludos.', it: 'Certamente, amiamo gli amici pelosi.' } },
    { id: 'transport', question: { el: 'Πώς φτάνω από το αεροδρόμιο;', en: 'How do I arrive from the airport?', es: '¿Cómo se llega desde el aeropuerto?', it: 'Come si arriva dall’aeroporto?' }, answer: { el: 'Το αεροδρόμιο Κεφαλονιάς απέχει 42 χλμ. και, αν χρειαστεί, μπορεί να οργανωθεί μεταφορά με επιπλέον χρέωση.', en: 'Kefalonia Airport is 42 km away, and a paid transfer can be arranged if needed.', es: 'El aeropuerto de Cefalonia está a 42 km y, si lo necesitas, se puede organizar un traslado de pago.', it: 'L’aeroporto di Cefalonia dista 42 km e, se necessario, è possibile organizzare un transfer a pagamento.' } },
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
