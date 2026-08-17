import type { Language } from '../config/types'

export interface Translation {
  languageName: string
  skipToContent: string
  nav: {
    story: string
    gallery: string
    amenities: string
    location: string
    explore: string
    faq: string
    booking: string
    openMenu: string
    closeMenu: string
  }
  actions: {
    checkAvailability: string
    discoverHome: string
    viewGallery: string
    close: string
    previous: string
    next: string
    openMaps: string
    reserveOn: string
    backToTop: string
  }
  hero: { scroll: string }
  intro: { kicker: string; title: string; detailLabel: string }
  facts: Record<'guests' | 'bedrooms' | 'beds' | 'sofa' | 'bathrooms' | 'area' | 'parking' | 'views' | 'airConditioning', string>
  factValues: { yes: string; gardenCity: string; squareMetres: string }
  gallery: { kicker: string; title: string; imageCount: string; dialogLabel: string; provisional: string }
  stayDetails: { kicker: string }
  amenities: { kicker: string; title: string; intro: string; categories: Record<'comfort' | 'kitchen' | 'home' | 'access', string> }
  location: { kicker: string; title: string; text: string; mapTitle: string; approximate: string; arrivalTitle: string; arrivalText: string }
  explore: { kicker: string; title: string; intro: string; verified: string }
  trust: { kicker: string; title: string; text: string; items: Array<{ title: string; text: string }> }
  booking: {
    kicker: string
    title: string
    arrival: string
    departure: string
    guests: string
    guestOption: string
    submit: string
    disclaimer: string
    empty: string
    loading: string
    loadError: string
    fallback: string
    calendar: {
      title: string
      previousMonth: string
      nextMonth: string
      chooseArrival: string
      chooseDeparture: string
      selectionComplete: string
      available: string
      unavailable: string
      legend: string
      clear: string
      rangeUnavailable: string
      checkoutBoundary: string
      synced: string
    }
    errors: { arrivalRequired: string; departureRequired: string; departureAfter: string }
  }
  faq: { kicker: string; title: string; open: string }
  install: { label: string; kicker: string; title: string; body: string; stepShare: string; stepAdd: string }
  footer: { tagline: string; navigate: string; contact: string; languages: string; privacy: string; legal: string; credits: string; rights: string }
  legal: { privacyTitle: string; privacyBody: string[]; legalTitle: string; legalBody: string[]; provisional: string }
  accessibility: { languageSelector: string; currentImage: string; opensNewWindow: string }
}

export const translations: Record<Language, Translation> = {
  el: {
    languageName: 'Ελληνικά',
    skipToContent: 'Μετάβαση στο κύριο περιεχόμενο',
    nav: { story: 'Το σπίτι', gallery: 'Φωτογραφίες', amenities: 'Παροχές', location: 'Τοποθεσία', explore: 'Κεφαλονιά', faq: 'Ερωτήσεις', booking: 'Κράτηση', openMenu: 'Άνοιγμα μενού', closeMenu: 'Κλείσιμο μενού' },
    actions: { checkAvailability: 'Έλεγχος διαθεσιμότητας', discoverHome: 'Γνωρίστε το σπίτι', viewGallery: 'Όλες οι φωτογραφίες', close: 'Κλείσιμο', previous: 'Προηγούμενη', next: 'Επόμενη', openMaps: 'Άνοιγμα στο Google Maps', reserveOn: 'Κράτηση μέσω', backToTop: 'Επιστροφή στην κορυφή' },
    hero: { scroll: 'Ανακαλύψτε' },
    intro: { kicker: 'Στο Ληξούρι, με αίσθηση σπιτιού', title: 'Το φτιάξαμε όπως θα θέλαμε να μας φιλοξενήσουν.', detailLabel: 'Το σπίτι με μια ματιά' },
    facts: { guests: 'Επισκέπτες', bedrooms: 'Υπνοδωμάτιο', beds: 'Κρεβάτι', sofa: 'Καναπές', bathrooms: 'Μπάνιο', area: 'Επιφάνεια', parking: 'Στάθμευση', views: 'Θέα', airConditioning: 'Κλιματισμός' },
    factValues: { yes: 'Ναι', gardenCity: 'Πόλη & κήπος', squareMetres: 'τ.μ.' },
    gallery: { kicker: 'Μια πρώτη αίσθηση', title: 'Φως, υφή και οικεία απλότητα', imageCount: '13 εικόνες', dialogLabel: 'Προβολή φωτογραφιών', provisional: 'Προσωρινή εικόνα' },
    stayDetails: { kicker: 'Χρήσιμες πληροφορίες διαμονής' },
    amenities: { kicker: 'Οι παροχές μας', title: '', intro: '', categories: { comfort: 'Άνεση', kitchen: 'Κουζίνα', home: 'Στο σπίτι', access: 'Πρόσβαση' } },
    location: { kicker: 'Η βάση σας στην Παλική', title: 'Ληξούρι, στη δυτική πλευρά της Κεφαλονιάς', text: 'Το Meraki Home βρίσκεται κοντά στο κέντρο και το λιμάνι του Ληξουρίου, με εύκολη πρόσβαση σε καθημερινές ανάγκες και στις ακτές της χερσονήσου.', mapTitle: 'Χάρτης της ευρύτερης περιοχής του Ληξουρίου', approximate: 'Εμφανίζεται κατά προσέγγιση η περιοχή, όχι η ακριβής είσοδος.', arrivalTitle: 'Πώς θα φτάσετε', arrivalText: 'Από το αεροδρόμιο ακολουθήστε τη διαδρομή προς Ληξούρι ή περάστε μέσω Αργοστολίου και του τοπικού ferry. Επιβεβαιώστε τις επιλογές και τα ωράρια πριν από το ταξίδι.' },
    explore: { kicker: 'Γύρω από το σπίτι', title: 'Μια χερσόνησος για εξερεύνηση', intro: 'Παραλίες, μικρές διαδρομές και το καθημερινό Ληξούρι. Οι αποστάσεις παρακάτω έχουν διασταυρωθεί από τη δημόσια καταχώριση.', verified: 'Επαληθευμένη απόσταση' },
    trust: { kicker: 'Φιλοξενία με ουσία', title: 'Μια διαμονή σχεδιασμένη στις λεπτομέρειες', text: 'Χωρίς υπερβολές και υποσχέσεις που δεν μπορούν να επιβεβαιωθούν — μόνο καθαρές πληροφορίες, άμεση πρόσβαση στην επίσημη καταχώριση και ένας χώρος που λειτουργεί ως πραγματικό σπίτι.', items: [{ title: 'Επιβεβαιωμένα στοιχεία', text: 'Παρουσιάζονται μόνο παροχές και αποστάσεις που υπάρχουν σε δημόσιες πηγές.' }, { title: 'Καμία κρυφή διαδικασία', text: 'Η διαθεσιμότητα και η τελική κράτηση ολοκληρώνονται στην επίσημη πλατφόρμα.' }, { title: 'Τοπική αφετηρία', text: 'Κοντά στο κέντρο και το λιμάνι, για μια πρακτική εξερεύνηση της Παλικής.' }] },
    booking: { kicker: 'Σχεδιάστε τη διαμονή σας', title: 'Δείτε τις διαθέσιμες ημερομηνίες', arrival: 'Άφιξη', departure: 'Αναχώρηση', guests: 'Επισκέπτες', guestOption: 'επισκέπτες', submit: 'Συνέχεια στη Booking.com', disclaimer: 'Το ημερολόγιο συγχρονίζει κρατήσεις και αποκλεισμένες ημερομηνίες. Η τελική διαθεσιμότητα, οι τιμές και οι όροι επιβεβαιώνονται με τον ιδιοκτήτη.', empty: 'Το κανάλι κρατήσεων θα προστεθεί σύντομα. Εν τω μεταξύ, δείτε την τοποθεσία στο Google Maps.', loading: 'Φόρτωση διαθεσιμότητας…', loadError: 'Δεν ήταν δυνατή η φόρτωση του συγχρονισμένου ημερολογίου.', fallback: 'Επιλέξτε ημερομηνίες παρακάτω· η διαθεσιμότητα θα επιβεβαιωθεί πριν από την κράτηση.', calendar: { title: 'Ημερολόγιο διαθεσιμότητας', previousMonth: 'Προηγούμενος μήνας', nextMonth: 'Επόμενος μήνας', chooseArrival: 'Επιλέξτε ημερομηνία άφιξης', chooseDeparture: 'Τώρα επιλέξτε ημερομηνία αναχώρησης', selectionComplete: 'Οι ημερομηνίες επιλέχθηκαν', available: 'Διαθέσιμο', unavailable: 'Μη διαθέσιμο', legend: 'Υπόμνημα διαθεσιμότητας', clear: 'Καθαρισμός', rangeUnavailable: 'Η διαμονή περιλαμβάνει μη διαθέσιμες νύχτες. Επιλέξτε άλλη αναχώρηση.', checkoutBoundary: 'Μπορεί να επιλεγεί ως αναχώρηση', synced: 'Τελευταίος συγχρονισμός:' }, errors: { arrivalRequired: 'Επιλέξτε ημερομηνία άφιξης.', departureRequired: 'Επιλέξτε ημερομηνία αναχώρησης.', departureAfter: 'Η αναχώρηση πρέπει να είναι μετά την άφιξη.' } },
    faq: { kicker: 'Χρήσιμες πληροφορίες', title: 'Πριν από το ταξίδι', open: 'Άνοιγμα απάντησης' },
    install: { label: 'Εγκατάσταση εφαρμογής', kicker: 'Συντόμευση', title: 'Πάρτε το Meraki Home μαζί σας', body: 'Στο Safari, πατήστε Κοινή χρήση και στη συνέχεια «Προσθήκη στην αρχική οθόνη».', stepShare: 'Πατήστε το κουμπί Κοινή χρήση.', stepAdd: 'Επιλέξτε «Προσθήκη στην αρχική οθόνη» και επιβεβαιώστε.' },
    footer: { tagline: 'Μια ήσυχη βάση για να γνωρίσετε την Κεφαλονιά στον δικό σας ρυθμό.', navigate: 'Πλοήγηση', contact: 'Κράτηση & χάρτης', languages: 'Γλώσσες', privacy: 'Πολιτική απορρήτου', legal: 'Νομική σημείωση', credits: 'Σχεδιασμένο για το Meraki Home', rights: 'Με επιφύλαξη παντός δικαιώματος.' },
    legal: { privacyTitle: 'Πολιτική απορρήτου', privacyBody: ['Αυτή η ιστοσελίδα δεν χρησιμοποιεί αναλυτικά εργαλεία, διαφημιστικά trackers ή μη απαραίτητα cookies.', 'Για την εμφάνιση διαθεσιμότητας, ο διακομιστής επεξεργάζεται μόνο τα χρονικά διαστήματα των αποκλεισμένων ημερομηνιών και δεν αποστέλλει στοιχεία επισκεπτών στο πρόγραμμα περιήγησης.', 'Η επιλογή γλώσσας αποθηκεύεται τοπικά στη συσκευή σας με την ονομασία “meraki-language”. Δεν αποστέλλεται σε διακομιστή.', 'Οι εξωτερικοί σύνδεσμοι προς Google Maps και Booking.com διέπονται από τις πολιτικές των αντίστοιχων υπηρεσιών.'], legalTitle: 'Νομική σημείωση', legalBody: ['Το περιεχόμενο της σελίδας έχει ενημερωτικό χαρακτήρα. Η διαθεσιμότητα, οι τιμές, οι όροι και η επιβεβαίωση της κράτησης καθορίζονται αποκλειστικά από την επίσημη πλατφόρμα.', 'Τα πλήρη στοιχεία υπευθύνου, αριθμός μητρώου και στοιχεία επικοινωνίας πρέπει να συμπληρωθούν από τον ιδιοκτήτη πριν από τη δημοσίευση.'], provisional: 'Προσωρινό κείμενο — απαιτείται νομικός έλεγχος πριν από τη δημοσίευση.' },
    accessibility: { languageSelector: 'Επιλογή γλώσσας', currentImage: 'Εικόνα', opensNewWindow: 'Ανοίγει σε νέα καρτέλα' },
  },
  en: {
    languageName: 'English',
    skipToContent: 'Skip to main content',
    nav: { story: 'The home', gallery: 'Gallery', amenities: 'Amenities', location: 'Location', explore: 'Kefalonia', faq: 'FAQ', booking: 'Book', openMenu: 'Open menu', closeMenu: 'Close menu' },
    actions: { checkAvailability: 'Check availability', discoverHome: 'Discover the home', viewGallery: 'View all photos', close: 'Close', previous: 'Previous', next: 'Next', openMaps: 'Open in Google Maps', reserveOn: 'Book on', backToTop: 'Back to top' },
    hero: { scroll: 'Discover' },
    intro: { kicker: 'In Lixouri, with the ease of home', title: 'We made it the way we would want to be welcomed.', detailLabel: 'The home at a glance' },
    facts: { guests: 'Guests', bedrooms: 'Bedroom', beds: 'Bed', sofa: 'Sofa', bathrooms: 'Bathroom', area: 'Area', parking: 'Parking', views: 'Views', airConditioning: 'Air conditioning' },
    factValues: { yes: 'Yes', gardenCity: 'Town & garden', squareMetres: 'm²' },
    gallery: { kicker: 'A first impression', title: 'Light, texture and familiar simplicity', imageCount: '13 images', dialogLabel: 'Photo viewer', provisional: 'Provisional image' },
    stayDetails: { kicker: 'Useful stay details' },
    amenities: { kicker: 'Our amenities', title: '', intro: '', categories: { comfort: 'Comfort', kitchen: 'Kitchen', home: 'At home', access: 'Access' } },
    location: { kicker: 'Your Paliki base', title: 'Lixouri, on Kefalonia’s western side', text: 'Meraki Home is close to Lixouri centre and port, with convenient access to daily essentials and the peninsula’s coast.', mapTitle: 'Map of Meraki Home', approximate: 'Xenofontos 4, Lixouri 282 00', arrivalTitle: 'Getting here', arrivalText: 'From the airport, follow the road towards Lixouri or travel via Argostoli and the local ferry. Check routes and timetables before travelling.' },
    explore: { kicker: 'Around the home', title: 'A peninsula made for exploring', intro: 'Beaches, short road trips and everyday Lixouri. The distances below have been checked against the public property listing.', verified: 'Verified distance' },
    trust: { kicker: 'Hospitality with substance', title: 'A stay considered in the details', text: 'No inflated claims or promises that cannot be confirmed — just clear information, direct access to the official listing and a space designed to feel like a real home.', items: [{ title: 'Confirmed information', text: 'Only amenities and distances found in public sources are shown.' }, { title: 'A clear booking path', text: 'Availability and final confirmation take place on the official booking platform.' }, { title: 'A local starting point', text: 'Close to the centre and port, for an easy exploration of Paliki.' }] },
    booking: { kicker: 'Plan your stay', title: 'See available dates', arrival: 'Check-in', departure: 'Check-out', guests: 'Guests', guestOption: 'guests', submit: 'Continue to Booking.com', disclaimer: 'The calendar syncs reservations and blocked dates. Final availability, prices and terms are confirmed with the owner.', empty: 'A booking channel will be added soon. In the meantime, you can find us on Google Maps.', loading: 'Loading availability…', loadError: 'The synced calendar could not be loaded.', fallback: 'Choose dates below; availability will be confirmed before booking.', calendar: { title: 'Availability calendar', previousMonth: 'Previous month', nextMonth: 'Next month', chooseArrival: 'Choose your check-in date', chooseDeparture: 'Now choose your check-out date', selectionComplete: 'Dates selected', available: 'Available', unavailable: 'Unavailable', legend: 'Availability legend', clear: 'Clear dates', rangeUnavailable: 'This stay includes unavailable nights. Choose another check-out date.', checkoutBoundary: 'Can be selected as check-out', synced: 'Last synced:' }, errors: { arrivalRequired: 'Choose a check-in date.', departureRequired: 'Choose a check-out date.', departureAfter: 'Check-out must be after check-in.' } },
    faq: { kicker: 'Useful details', title: 'Before you travel', open: 'Open answer' },
    install: { label: 'Install app', kicker: 'Shortcut', title: 'Take Meraki Home with you', body: 'In Safari, tap Share and then “Add to Home Screen”.', stepShare: 'Tap the Share button.', stepAdd: 'Choose “Add to Home Screen” and confirm.' },
    footer: { tagline: 'A quiet base for discovering Kefalonia at your own pace.', navigate: 'Navigate', contact: 'Booking & map', languages: 'Languages', privacy: 'Privacy policy', legal: 'Legal notice', credits: 'Designed for Meraki Home', rights: 'All rights reserved.' },
    legal: { privacyTitle: 'Privacy policy', privacyBody: ['This website does not use analytics, advertising trackers or non-essential cookies.', 'To display availability, the server processes blocked date ranges only and does not send guest details to the browser.', 'Your language choice is stored locally on your device under “meraki-language”. It is not sent to a server.', 'External links to Google Maps and Booking.com are governed by those services’ own policies.'], legalTitle: 'Legal notice', legalBody: ['This website is informational. Availability, prices, terms and booking confirmation are determined exclusively by the official booking platform.', 'Full operator details, registration number and contact details must be completed by the owner before publication.'], provisional: 'Provisional text — legal review is required before publication.' },
    accessibility: { languageSelector: 'Choose language', currentImage: 'Image', opensNewWindow: 'Opens in a new tab' },
  },
  es: {
    languageName: 'Español',
    skipToContent: 'Saltar al contenido principal',
    nav: { story: 'La casa', gallery: 'Galería', amenities: 'Comodidades', location: 'Ubicación', explore: 'Cefalonia', faq: 'Preguntas', booking: 'Reservar', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú' },
    actions: { checkAvailability: 'Consultar disponibilidad', discoverHome: 'Descubrir la casa', viewGallery: 'Ver todas las fotos', close: 'Cerrar', previous: 'Anterior', next: 'Siguiente', openMaps: 'Abrir en Google Maps', reserveOn: 'Reservar en', backToTop: 'Volver arriba' },
    hero: { scroll: 'Descubrir' },
    intro: { kicker: 'En Lixouri, con sensación de hogar', title: 'Lo hicimos como nos gustaría que nos acogieran.', detailLabel: 'La casa de un vistazo' },
    facts: { guests: 'Huéspedes', bedrooms: 'Dormitorio', beds: 'Cama', sofa: 'Sofá', bathrooms: 'Baño', area: 'Superficie', parking: 'Aparcamiento', views: 'Vistas', airConditioning: 'Climatización' },
    factValues: { yes: 'Sí', gardenCity: 'Ciudad y jardín', squareMetres: 'm²' },
    gallery: { kicker: 'Una primera impresión', title: 'Luz, textura y una sencillez familiar', imageCount: '13 imágenes', dialogLabel: 'Visor de fotografías', provisional: 'Imagen provisional' },
    stayDetails: { kicker: 'Datos útiles para tu estancia' },
    amenities: { kicker: 'Nuestras comodidades', title: '', intro: '', categories: { comfort: 'Confort', kitchen: 'Cocina', home: 'En casa', access: 'Acceso' } },
    location: { kicker: 'Tu base en Paliki', title: 'Lixouri, en el oeste de Cefalonia', text: 'Meraki Home está cerca del centro y del puerto de Lixouri, con acceso cómodo a lo cotidiano y a la costa de la península.', mapTitle: 'Mapa de Meraki Home', approximate: 'Xenofontos 4, Lixouri 282 00', arrivalTitle: 'Cómo llegar', arrivalText: 'Desde el aeropuerto, sigue la carretera hacia Lixouri o pasa por Argostoli y el ferry local. Comprueba rutas y horarios antes de viajar.' },
    explore: { kicker: 'Alrededor de la casa', title: 'Una península para explorar', intro: 'Playas, pequeñas rutas y el día a día de Lixouri. Las distancias se han contrastado con la ficha pública.', verified: 'Distancia verificada' },
    trust: { kicker: 'Hospitalidad con sustancia', title: 'Una estancia pensada al detalle', text: 'Sin afirmaciones infladas ni promesas imposibles de comprobar: información clara, acceso directo a la ficha oficial y un espacio que funciona como un hogar real.', items: [{ title: 'Información confirmada', text: 'Solo se muestran comodidades y distancias presentes en fuentes públicas.' }, { title: 'Reserva transparente', text: 'La disponibilidad y la confirmación final se completan en la plataforma oficial.' }, { title: 'Un punto de partida local', text: 'Cerca del centro y del puerto para explorar Paliki con facilidad.' }] },
    booking: { kicker: 'Planifica tu estancia', title: 'Consulta las fechas disponibles', arrival: 'Llegada', departure: 'Salida', guests: 'Huéspedes', guestOption: 'huéspedes', submit: 'Continuar a Booking.com', disclaimer: 'El calendario sincroniza reservas y fechas bloqueadas. La disponibilidad final, los precios y las condiciones se confirman con el dueño.', empty: 'El canal de reservas se añadirá pronto. Mientras tanto, puedes encontrarnos en Google Maps.', loading: 'Cargando disponibilidad…', loadError: 'No se ha podido cargar el calendario sincronizado.', fallback: 'Elige las fechas abajo; la disponibilidad se confirmará antes de reservar.', calendar: { title: 'Calendario de disponibilidad', previousMonth: 'Mes anterior', nextMonth: 'Mes siguiente', chooseArrival: 'Elige la fecha de llegada', chooseDeparture: 'Ahora elige la fecha de salida', selectionComplete: 'Fechas seleccionadas', available: 'Disponible', unavailable: 'No disponible', legend: 'Leyenda de disponibilidad', clear: 'Borrar fechas', rangeUnavailable: 'La estancia incluye noches no disponibles. Elige otra fecha de salida.', checkoutBoundary: 'Se puede elegir como salida', synced: 'Última sincronización:' }, errors: { arrivalRequired: 'Selecciona una fecha de llegada.', departureRequired: 'Selecciona una fecha de salida.', departureAfter: 'La salida debe ser posterior a la llegada.' } },
    faq: { kicker: 'Información útil', title: 'Antes del viaje', open: 'Abrir respuesta' },
    install: { label: 'Instalar app', kicker: 'Acceso directo', title: 'Lleva Meraki Home contigo', body: 'En Safari, toca Compartir y después “Añadir a pantalla de inicio”.', stepShare: 'Toca el botón Compartir.', stepAdd: 'Elige “Añadir a pantalla de inicio” y confirma.' },
    footer: { tagline: 'Una base tranquila para descubrir Cefalonia a tu ritmo.', navigate: 'Navegación', contact: 'Reservas y mapa', languages: 'Idiomas', privacy: 'Política de privacidad', legal: 'Aviso legal', credits: 'Diseñado para Meraki Home', rights: 'Todos los derechos reservados.' },
    legal: { privacyTitle: 'Política de privacidad', privacyBody: ['Esta web no utiliza analítica, rastreadores publicitarios ni cookies no esenciales.', 'Para mostrar disponibilidad, el servidor procesa únicamente rangos de fechas bloqueadas y no envía datos de huéspedes al navegador.', 'La elección de idioma se guarda localmente en tu dispositivo con el nombre “meraki-language”. No se envía a ningún servidor.', 'Los enlaces externos a Google Maps y Booking.com se rigen por las políticas de esos servicios.'], legalTitle: 'Aviso legal', legalBody: ['Esta web tiene carácter informativo. La disponibilidad, los precios, las condiciones y la confirmación de reserva dependen exclusivamente de la plataforma oficial.', 'El propietario debe completar los datos del responsable, número de registro y contacto antes de publicar.'], provisional: 'Texto provisional: requiere revisión legal antes de publicar.' },
    accessibility: { languageSelector: 'Seleccionar idioma', currentImage: 'Imagen', opensNewWindow: 'Abre en una pestaña nueva' },
  },
  it: {
    languageName: 'Italiano',
    skipToContent: 'Vai al contenuto principale',
    nav: { story: 'La casa', gallery: 'Galleria', amenities: 'Servizi', location: 'Posizione', explore: 'Cefalonia', faq: 'Domande', booking: 'Prenota', openMenu: 'Apri menu', closeMenu: 'Chiudi menu' },
    actions: { checkAvailability: 'Verifica disponibilità', discoverHome: 'Scopri la casa', viewGallery: 'Vedi tutte le foto', close: 'Chiudi', previous: 'Precedente', next: 'Successiva', openMaps: 'Apri in Google Maps', reserveOn: 'Prenota su', backToTop: 'Torna su' },
    hero: { scroll: 'Scopri' },
    intro: { kicker: 'A Lixouri, con il calore di casa', title: 'L’abbiamo realizzata come vorremmo essere accolti.', detailLabel: 'La casa in breve' },
    facts: { guests: 'Ospiti', bedrooms: 'Camera', beds: 'Letto', sofa: 'Divano', bathrooms: 'Bagno', area: 'Superficie', parking: 'Parcheggio', views: 'Vista', airConditioning: 'Climatizzazione' },
    factValues: { yes: 'Sì', gardenCity: 'Città e giardino', squareMetres: 'm²' },
    gallery: { kicker: 'Una prima impressione', title: 'Luce, materia e una semplicità familiare', imageCount: '13 immagini', dialogLabel: 'Visualizzatore foto', provisional: 'Immagine provvisoria' },
    stayDetails: { kicker: 'Informazioni utili sul soggiorno' },
    amenities: { kicker: 'I nostri servizi', title: '', intro: '', categories: { comfort: 'Comfort', kitchen: 'Cucina', home: 'A casa', access: 'Accesso' } },
    location: { kicker: 'La vostra base a Paliki', title: 'Lixouri, sul versante occidentale di Cefalonia', text: 'Meraki Home è vicino al centro e al porto di Lixouri, con accesso comodo ai servizi quotidiani e alla costa della penisola.', mapTitle: 'Mappa di Meraki Home', approximate: 'Xenofontos 4, Lixouri 282 00', arrivalTitle: 'Come arrivare', arrivalText: 'Dall’aeroporto, seguite la strada per Lixouri oppure passate da Argostoli con il traghetto locale. Verificate itinerari e orari prima del viaggio.' },
    explore: { kicker: 'Intorno alla casa', title: 'Una penisola da esplorare', intro: 'Spiagge, brevi itinerari e la vita quotidiana di Lixouri. Le distanze sono state verificate sulla scheda pubblica.', verified: 'Distanza verificata' },
    trust: { kicker: 'Ospitalità concreta', title: 'Un soggiorno curato nei dettagli', text: 'Niente promesse eccessive o impossibili da verificare: solo informazioni chiare, accesso diretto alla scheda ufficiale e uno spazio pensato come una vera casa.', items: [{ title: 'Informazioni confermate', text: 'Sono mostrati solo servizi e distanze presenti in fonti pubbliche.' }, { title: 'Prenotazione trasparente', text: 'Disponibilità e conferma finale avvengono sulla piattaforma ufficiale.' }, { title: 'Un punto di partenza locale', text: 'Vicino al centro e al porto, per esplorare Paliki con facilità.' }] },
    booking: { kicker: 'Programmate il soggiorno', title: 'Controllate le date disponibili', arrival: 'Arrivo', departure: 'Partenza', guests: 'Ospiti', guestOption: 'ospiti', submit: 'Continua su Booking.com', disclaimer: 'Il calendario sincronizza prenotazioni e date bloccate. Disponibilità finale, prezzi e condizioni sono confermati con il proprietario.', empty: 'Il canale di prenotazione sarà aggiunto presto. Nel frattempo, potete trovarci su Google Maps.', loading: 'Caricamento disponibilità…', loadError: 'Non è stato possibile caricare il calendario sincronizzato.', fallback: 'Scegliete le date qui sotto; la disponibilità sarà confermata prima della prenotazione.', calendar: { title: 'Calendario disponibilità', previousMonth: 'Mese precedente', nextMonth: 'Mese successivo', chooseArrival: 'Scegliete la data di arrivo', chooseDeparture: 'Ora scegliete la data di partenza', selectionComplete: 'Date selezionate', available: 'Disponibile', unavailable: 'Non disponibile', legend: 'Legenda disponibilità', clear: 'Cancella date', rangeUnavailable: 'Il soggiorno include notti non disponibili. Scegliete un’altra partenza.', checkoutBoundary: 'Può essere selezionato come partenza', synced: 'Ultima sincronizzazione:' }, errors: { arrivalRequired: 'Scegliete una data di arrivo.', departureRequired: 'Scegliete una data di partenza.', departureAfter: 'La partenza deve essere successiva all’arrivo.' } },
    faq: { kicker: 'Informazioni utili', title: 'Prima del viaggio', open: 'Apri risposta' },
    install: { label: 'Installa app', kicker: 'Scorciatoia', title: 'Portate Meraki Home con voi', body: 'In Safari, toccate Condividi e poi “Aggiungi alla schermata Home”.', stepShare: 'Toccate il pulsante Condividi.', stepAdd: 'Scegliete “Aggiungi alla schermata Home” e confermate.' },
    footer: { tagline: 'Una base tranquilla per scoprire Cefalonia al vostro ritmo.', navigate: 'Navigazione', contact: 'Prenotazioni e mappa', languages: 'Lingue', privacy: 'Privacy policy', legal: 'Note legali', credits: 'Progettato per Meraki Home', rights: 'Tutti i diritti riservati.' },
    legal: { privacyTitle: 'Privacy policy', privacyBody: ['Questo sito non usa sistemi di analisi, tracker pubblicitari o cookie non essenziali.', 'Per mostrare la disponibilità, il server elabora esclusivamente gli intervalli di date bloccate e non invia dati degli ospiti al browser.', 'La scelta della lingua viene salvata localmente sul dispositivo con il nome “meraki-language”. Non viene inviata a un server.', 'I link esterni a Google Maps e Booking.com seguono le politiche dei rispettivi servizi.'], legalTitle: 'Note legali', legalBody: ['Il sito ha scopo informativo. Disponibilità, prezzi, condizioni e conferma della prenotazione dipendono esclusivamente dalla piattaforma ufficiale.', 'Prima della pubblicazione il proprietario deve completare i dati del responsabile, il numero di registrazione e i contatti.'], provisional: 'Testo provvisorio: è necessaria una revisione legale prima della pubblicazione.' },
    accessibility: { languageSelector: 'Seleziona lingua', currentImage: 'Immagine', opensNewWindow: 'Si apre in una nuova scheda' },
  },
}
