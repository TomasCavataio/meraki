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
  experience: {
    kicker: string
    title: string
    lead: string
    moments: Array<{ title: string; text: string }>
  }
  amenities: { kicker: string; title: string; intro: string; categories: Record<'comfort' | 'kitchen' | 'home' | 'access', string> }
  location: { kicker: string; title: string; text: string; mapTitle: string; approximate: string; arrivalTitle: string; arrivalText: string }
  explore: { kicker: string; title: string; intro: string; verified: string }
  trust: { kicker: string; title: string; text: string; items: Array<{ title: string; text: string }> }
  booking: {
    kicker: string
    title: string
    intro: string
    arrival: string
    departure: string
    guests: string
    guestOption: string
    submit: string
    disclaimer: string
    empty: string
    errors: { arrivalRequired: string; departureRequired: string; departureAfter: string }
  }
  faq: { kicker: string; title: string; open: string }
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
    intro: { kicker: 'Στο Ληξούρι, με αίσθηση σπιτιού', title: 'Μικρό σε κλίμακα. Γενναιόδωρο σε ηρεμία.', detailLabel: 'Το σπίτι με μια ματιά' },
    facts: { guests: 'Επισκέπτες', bedrooms: 'Υπνοδωμάτιο', beds: 'Κρεβάτι', sofa: 'Καναπές', bathrooms: 'Μπάνιο', area: 'Επιφάνεια', parking: 'Στάθμευση', views: 'Θέα', airConditioning: 'Κλιματισμός' },
    factValues: { yes: 'Ναι', gardenCity: 'Πόλη & κήπος', squareMetres: 'τ.μ.' },
    gallery: { kicker: 'Μια πρώτη αίσθηση', title: 'Φως, υφή και οικεία απλότητα', imageCount: '7 εικόνες', dialogLabel: 'Προβολή φωτογραφιών', provisional: 'Προσωρινή εικόνα' },
    experience: { kicker: 'Ημέρες χωρίς βιασύνη', title: 'Ο ρυθμός του Ιονίου', lead: 'Η Κεφαλονιά ανταμείβει την περιέργεια, αλλά και την παύση. Από το πρωινό στο Ληξούρι ως το τελευταίο φως στη δυτική ακτή, κάθε μέρα μπορεί να μείνει απλή.', moments: [{ title: 'Αργά πρωινά', text: 'Καφές, κάτι τοπικό στο τραπέζι και χρόνος για το σχέδιο της ημέρας.' }, { title: 'Θάλασσα & διαδρομές', text: 'Μικρές αποστάσεις προς τις ακτές της Παλικής και δρόμοι που αξίζει να πάρεις χωρίς πρόγραμμα.' }, { title: 'Βραδιές στο Ληξούρι', text: 'Μια βόλτα στην πλατεία, τοπικές γεύσεις και η επιστροφή σε έναν ήσυχο χώρο.' }] },
    amenities: { kicker: '', title: 'Οι παροχές μας', intro: '', categories: { comfort: 'Άνεση', kitchen: 'Κουζίνα', home: 'Στο σπίτι', access: 'Πρόσβαση' } },
    location: { kicker: 'Η βάση σας στην Παλική', title: 'Ληξούρι, στη δυτική πλευρά της Κεφαλονιάς', text: 'Το Meraki Home βρίσκεται κοντά στο κέντρο και το λιμάνι του Ληξουρίου, με εύκολη πρόσβαση σε καθημερινές ανάγκες και στις ακτές της χερσονήσου.', mapTitle: 'Χάρτης της ευρύτερης περιοχής του Ληξουρίου', approximate: 'Εμφανίζεται κατά προσέγγιση η περιοχή, όχι η ακριβής είσοδος.', arrivalTitle: 'Πώς θα φτάσετε', arrivalText: 'Από το αεροδρόμιο ακολουθήστε τη διαδρομή προς Ληξούρι ή περάστε μέσω Αργοστολίου και του τοπικού ferry. Επιβεβαιώστε τις επιλογές και τα ωράρια πριν από το ταξίδι.' },
    explore: { kicker: 'Γύρω από το σπίτι', title: 'Μια χερσόνησος για εξερεύνηση', intro: 'Παραλίες, μικρές διαδρομές και το καθημερινό Ληξούρι. Οι αποστάσεις παρακάτω έχουν διασταυρωθεί από τη δημόσια καταχώριση.', verified: 'Επαληθευμένη απόσταση' },
    trust: { kicker: 'Φιλοξενία με ουσία', title: 'Μια διαμονή σχεδιασμένη στις λεπτομέρειες', text: 'Χωρίς υπερβολές και υποσχέσεις που δεν μπορούν να επιβεβαιωθούν — μόνο καθαρές πληροφορίες, άμεση πρόσβαση στην επίσημη καταχώριση και ένας χώρος που λειτουργεί ως πραγματικό σπίτι.', items: [{ title: 'Επιβεβαιωμένα στοιχεία', text: 'Παρουσιάζονται μόνο παροχές και αποστάσεις που υπάρχουν σε δημόσιες πηγές.' }, { title: 'Καμία κρυφή διαδικασία', text: 'Η διαθεσιμότητα και η τελική κράτηση ολοκληρώνονται στην επίσημη πλατφόρμα.' }, { title: 'Τοπική αφετηρία', text: 'Κοντά στο κέντρο και το λιμάνι, για μια πρακτική εξερεύνηση της Παλικής.' }] },
    booking: { kicker: 'Σχεδιάστε τη διαμονή σας', title: 'Δείτε τις διαθέσιμες ημερομηνίες', intro: 'Επιλέξτε ημερομηνίες και θα μεταφερθείτε στην επίσημη σελίδα κράτησης του Meraki Home.', arrival: 'Άφιξη', departure: 'Αναχώρηση', guests: 'Επισκέπτες', guestOption: 'επισκέπτες', submit: 'Συνέχεια στη Booking.com', disclaimer: 'Η αποστολή αυτής της αναζήτησης δεν επιβεβαιώνει κράτηση. Η διαθεσιμότητα, οι τιμές και οι όροι εμφανίζονται στην πλατφόρμα κράτησης.', empty: 'Το κανάλι κρατήσεων θα προστεθεί σύντομα. Εν τω μεταξύ, δείτε την τοποθεσία στο Google Maps.', errors: { arrivalRequired: 'Επιλέξτε ημερομηνία άφιξης.', departureRequired: 'Επιλέξτε ημερομηνία αναχώρησης.', departureAfter: 'Η αναχώρηση πρέπει να είναι μετά την άφιξη.' } },
    faq: { kicker: 'Χρήσιμες πληροφορίες', title: 'Πριν από το ταξίδι', open: 'Άνοιγμα απάντησης' },
    footer: { tagline: 'Μια ήσυχη βάση για να γνωρίσετε την Κεφαλονιά στον δικό σας ρυθμό.', navigate: 'Πλοήγηση', contact: 'Κράτηση & χάρτης', languages: 'Γλώσσες', privacy: 'Πολιτική απορρήτου', legal: 'Νομική σημείωση', credits: 'Σχεδιασμένο για το Meraki Home', rights: 'Με επιφύλαξη παντός δικαιώματος.' },
    legal: { privacyTitle: 'Πολιτική απορρήτου', privacyBody: ['Αυτή η στατική ιστοσελίδα δεν χρησιμοποιεί αναλυτικά εργαλεία, διαφημιστικά trackers ή μη απαραίτητα cookies.', 'Η επιλογή γλώσσας αποθηκεύεται τοπικά στη συσκευή σας με την ονομασία “meraki-language”. Δεν αποστέλλεται σε διακομιστή.', 'Οι εξωτερικοί σύνδεσμοι προς Google Maps και Booking.com διέπονται από τις πολιτικές των αντίστοιχων υπηρεσιών.'], legalTitle: 'Νομική σημείωση', legalBody: ['Το περιεχόμενο της σελίδας έχει ενημερωτικό χαρακτήρα. Η διαθεσιμότητα, οι τιμές, οι όροι και η επιβεβαίωση της κράτησης καθορίζονται αποκλειστικά από την επίσημη πλατφόρμα.', 'Τα πλήρη στοιχεία υπευθύνου, αριθμός μητρώου και στοιχεία επικοινωνίας πρέπει να συμπληρωθούν από τον ιδιοκτήτη πριν από τη δημοσίευση.'], provisional: 'Προσωρινό κείμενο — απαιτείται νομικός έλεγχος πριν από τη δημοσίευση.' },
    accessibility: { languageSelector: 'Επιλογή γλώσσας', currentImage: 'Εικόνα', opensNewWindow: 'Ανοίγει σε νέα καρτέλα' },
  },
  en: {
    languageName: 'English',
    skipToContent: 'Skip to main content',
    nav: { story: 'The home', gallery: 'Gallery', amenities: 'Amenities', location: 'Location', explore: 'Kefalonia', faq: 'FAQ', booking: 'Book', openMenu: 'Open menu', closeMenu: 'Close menu' },
    actions: { checkAvailability: 'Check availability', discoverHome: 'Discover the home', viewGallery: 'View all photos', close: 'Close', previous: 'Previous', next: 'Next', openMaps: 'Open in Google Maps', reserveOn: 'Book on', backToTop: 'Back to top' },
    hero: { scroll: 'Discover' },
    intro: { kicker: 'In Lixouri, with the ease of home', title: 'Small in scale. Generous in calm.', detailLabel: 'The home at a glance' },
    facts: { guests: 'Guests', bedrooms: 'Bedroom', beds: 'Bed', sofa: 'Sofa', bathrooms: 'Bathroom', area: 'Area', parking: 'Parking', views: 'Views', airConditioning: 'Air conditioning' },
    factValues: { yes: 'Yes', gardenCity: 'Town & garden', squareMetres: 'm²' },
    gallery: { kicker: 'A first impression', title: 'Light, texture and familiar simplicity', imageCount: '7 images', dialogLabel: 'Photo viewer', provisional: 'Provisional image' },
    experience: { kicker: 'Days without hurry', title: 'The rhythm of the Ionian', lead: 'Kefalonia rewards curiosity, but also the pause. From breakfast in Lixouri to the last light on the west coast, every day can remain beautifully simple.', moments: [{ title: 'Slow mornings', text: 'Coffee, something local on the table and time to make a loose plan for the day.' }, { title: 'Sea & small roads', text: 'Short journeys towards Paliki’s coastline, along roads worth taking without a schedule.' }, { title: 'Evenings in Lixouri', text: 'A walk through the square, local flavours, then back to a quiet space of your own.' }] },
    amenities: { kicker: '', title: 'Our amenities', intro: '', categories: { comfort: 'Comfort', kitchen: 'Kitchen', home: 'At home', access: 'Access' } },
    location: { kicker: 'Your Paliki base', title: 'Lixouri, on Kefalonia’s western side', text: 'Meraki Home is close to Lixouri centre and port, with convenient access to daily essentials and the peninsula’s coast.', mapTitle: 'Map of Meraki Home', approximate: 'Xenofontos 4, Lixouri 282 00', arrivalTitle: 'Getting here', arrivalText: 'From the airport, follow the road towards Lixouri or travel via Argostoli and the local ferry. Check routes and timetables before travelling.' },
    explore: { kicker: 'Around the home', title: 'A peninsula made for exploring', intro: 'Beaches, short road trips and everyday Lixouri. The distances below have been checked against the public property listing.', verified: 'Verified distance' },
    trust: { kicker: 'Hospitality with substance', title: 'A stay considered in the details', text: 'No inflated claims or promises that cannot be confirmed — just clear information, direct access to the official listing and a space designed to feel like a real home.', items: [{ title: 'Confirmed information', text: 'Only amenities and distances found in public sources are shown.' }, { title: 'A clear booking path', text: 'Availability and final confirmation take place on the official booking platform.' }, { title: 'A local starting point', text: 'Close to the centre and port, for an easy exploration of Paliki.' }] },
    booking: { kicker: 'Plan your stay', title: 'See available dates', intro: 'Choose your dates and continue to Meraki Home’s official booking page.', arrival: 'Check-in', departure: 'Check-out', guests: 'Guests', guestOption: 'guests', submit: 'Continue to Booking.com', disclaimer: 'This search does not confirm a booking. Availability, prices and terms are displayed on the booking platform.', empty: 'A booking channel will be added soon. In the meantime, you can find us on Google Maps.', errors: { arrivalRequired: 'Choose a check-in date.', departureRequired: 'Choose a check-out date.', departureAfter: 'Check-out must be after check-in.' } },
    faq: { kicker: 'Useful details', title: 'Before you travel', open: 'Open answer' },
    footer: { tagline: 'A quiet base for discovering Kefalonia at your own pace.', navigate: 'Navigate', contact: 'Booking & map', languages: 'Languages', privacy: 'Privacy policy', legal: 'Legal notice', credits: 'Designed for Meraki Home', rights: 'All rights reserved.' },
    legal: { privacyTitle: 'Privacy policy', privacyBody: ['This static website does not use analytics, advertising trackers or non-essential cookies.', 'Your language choice is stored locally on your device under “meraki-language”. It is not sent to a server.', 'External links to Google Maps and Booking.com are governed by those services’ own policies.'], legalTitle: 'Legal notice', legalBody: ['This website is informational. Availability, prices, terms and booking confirmation are determined exclusively by the official booking platform.', 'Full operator details, registration number and contact details must be completed by the owner before publication.'], provisional: 'Provisional text — legal review is required before publication.' },
    accessibility: { languageSelector: 'Choose language', currentImage: 'Image', opensNewWindow: 'Opens in a new tab' },
  },
  es: {
    languageName: 'Español',
    skipToContent: 'Saltar al contenido principal',
    nav: { story: 'La casa', gallery: 'Galería', amenities: 'Comodidades', location: 'Ubicación', explore: 'Cefalonia', faq: 'Preguntas', booking: 'Reservar', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú' },
    actions: { checkAvailability: 'Consultar disponibilidad', discoverHome: 'Descubrir la casa', viewGallery: 'Ver todas las fotos', close: 'Cerrar', previous: 'Anterior', next: 'Siguiente', openMaps: 'Abrir en Google Maps', reserveOn: 'Reservar en', backToTop: 'Volver arriba' },
    hero: { scroll: 'Descubrir' },
    intro: { kicker: 'En Lixouri, con sensación de hogar', title: 'Pequeña en escala. Generosa en calma.', detailLabel: 'La casa de un vistazo' },
    facts: { guests: 'Huéspedes', bedrooms: 'Dormitorio', beds: 'Cama', sofa: 'Sofá', bathrooms: 'Baño', area: 'Superficie', parking: 'Aparcamiento', views: 'Vistas', airConditioning: 'Climatización' },
    factValues: { yes: 'Sí', gardenCity: 'Ciudad y jardín', squareMetres: 'm²' },
    gallery: { kicker: 'Una primera impresión', title: 'Luz, textura y una sencillez familiar', imageCount: '7 imágenes', dialogLabel: 'Visor de fotografías', provisional: 'Imagen provisional' },
    experience: { kicker: 'Días sin prisa', title: 'El ritmo del Jónico', lead: 'Cefalonia recompensa la curiosidad, pero también la pausa. Desde el desayuno en Lixouri hasta la última luz de la costa oeste, cada día puede seguir siendo sencillo.', moments: [{ title: 'Mañanas lentas', text: 'Café, algo local sobre la mesa y tiempo para dibujar el plan del día.' }, { title: 'Mar y carreteras', text: 'Trayectos cortos hacia la costa de Paliki y caminos que merece la pena recorrer sin horarios.' }, { title: 'Noches en Lixouri', text: 'Un paseo por la plaza, sabores locales y la vuelta a un espacio tranquilo.' }] },
    amenities: { kicker: '', title: 'Nuestras comodidades', intro: '', categories: { comfort: 'Confort', kitchen: 'Cocina', home: 'En casa', access: 'Acceso' } },
    location: { kicker: 'Tu base en Paliki', title: 'Lixouri, en el oeste de Cefalonia', text: 'Meraki Home está cerca del centro y del puerto de Lixouri, con acceso cómodo a lo cotidiano y a la costa de la península.', mapTitle: 'Mapa de Meraki Home', approximate: 'Xenofontos 4, Lixouri 282 00', arrivalTitle: 'Cómo llegar', arrivalText: 'Desde el aeropuerto, sigue la carretera hacia Lixouri o pasa por Argostoli y el ferry local. Comprueba rutas y horarios antes de viajar.' },
    explore: { kicker: 'Alrededor de la casa', title: 'Una península para explorar', intro: 'Playas, pequeñas rutas y el día a día de Lixouri. Las distancias se han contrastado con la ficha pública.', verified: 'Distancia verificada' },
    trust: { kicker: 'Hospitalidad con sustancia', title: 'Una estancia pensada al detalle', text: 'Sin afirmaciones infladas ni promesas imposibles de comprobar: información clara, acceso directo a la ficha oficial y un espacio que funciona como un hogar real.', items: [{ title: 'Información confirmada', text: 'Solo se muestran comodidades y distancias presentes en fuentes públicas.' }, { title: 'Reserva transparente', text: 'La disponibilidad y la confirmación final se completan en la plataforma oficial.' }, { title: 'Un punto de partida local', text: 'Cerca del centro y del puerto para explorar Paliki con facilidad.' }] },
    booking: { kicker: 'Planifica tu estancia', title: 'Consulta las fechas disponibles', intro: 'Elige tus fechas y continúa en la página oficial de reservas de Meraki Home.', arrival: 'Llegada', departure: 'Salida', guests: 'Huéspedes', guestOption: 'huéspedes', submit: 'Continuar a Booking.com', disclaimer: 'Esta consulta no confirma una reserva. La disponibilidad, los precios y las condiciones se muestran en la plataforma de reservas.', empty: 'El canal de reservas se añadirá pronto. Mientras tanto, puedes encontrarnos en Google Maps.', errors: { arrivalRequired: 'Selecciona una fecha de llegada.', departureRequired: 'Selecciona una fecha de salida.', departureAfter: 'La salida debe ser posterior a la llegada.' } },
    faq: { kicker: 'Información útil', title: 'Antes del viaje', open: 'Abrir respuesta' },
    footer: { tagline: 'Una base tranquila para descubrir Cefalonia a tu ritmo.', navigate: 'Navegación', contact: 'Reservas y mapa', languages: 'Idiomas', privacy: 'Política de privacidad', legal: 'Aviso legal', credits: 'Diseñado para Meraki Home', rights: 'Todos los derechos reservados.' },
    legal: { privacyTitle: 'Política de privacidad', privacyBody: ['Esta web estática no utiliza analítica, rastreadores publicitarios ni cookies no esenciales.', 'La elección de idioma se guarda localmente en tu dispositivo con el nombre “meraki-language”. No se envía a ningún servidor.', 'Los enlaces externos a Google Maps y Booking.com se rigen por las políticas de esos servicios.'], legalTitle: 'Aviso legal', legalBody: ['Esta web tiene carácter informativo. La disponibilidad, los precios, las condiciones y la confirmación de reserva dependen exclusivamente de la plataforma oficial.', 'El propietario debe completar los datos del responsable, número de registro y contacto antes de publicar.'], provisional: 'Texto provisional: requiere revisión legal antes de publicar.' },
    accessibility: { languageSelector: 'Seleccionar idioma', currentImage: 'Imagen', opensNewWindow: 'Abre en una pestaña nueva' },
  },
  it: {
    languageName: 'Italiano',
    skipToContent: 'Vai al contenuto principale',
    nav: { story: 'La casa', gallery: 'Galleria', amenities: 'Servizi', location: 'Posizione', explore: 'Cefalonia', faq: 'Domande', booking: 'Prenota', openMenu: 'Apri menu', closeMenu: 'Chiudi menu' },
    actions: { checkAvailability: 'Verifica disponibilità', discoverHome: 'Scopri la casa', viewGallery: 'Vedi tutte le foto', close: 'Chiudi', previous: 'Precedente', next: 'Successiva', openMaps: 'Apri in Google Maps', reserveOn: 'Prenota su', backToTop: 'Torna su' },
    hero: { scroll: 'Scopri' },
    intro: { kicker: 'A Lixouri, con il calore di casa', title: 'Piccola nelle dimensioni. Generosa nella calma.', detailLabel: 'La casa in breve' },
    facts: { guests: 'Ospiti', bedrooms: 'Camera', beds: 'Letto', sofa: 'Divano', bathrooms: 'Bagno', area: 'Superficie', parking: 'Parcheggio', views: 'Vista', airConditioning: 'Climatizzazione' },
    factValues: { yes: 'Sì', gardenCity: 'Città e giardino', squareMetres: 'm²' },
    gallery: { kicker: 'Una prima impressione', title: 'Luce, materia e una semplicità familiare', imageCount: '7 immagini', dialogLabel: 'Visualizzatore foto', provisional: 'Immagine provvisoria' },
    experience: { kicker: 'Giornate senza fretta', title: 'Il ritmo dello Ionio', lead: 'Cefalonia premia la curiosità, ma anche la pausa. Dalla colazione a Lixouri all’ultima luce sulla costa occidentale, ogni giornata può restare meravigliosamente semplice.', moments: [{ title: 'Mattine lente', text: 'Caffè, qualcosa di locale sul tavolo e il tempo per abbozzare il programma.' }, { title: 'Mare e piccole strade', text: 'Brevi tragitti verso la costa di Paliki, lungo strade da percorrere senza orari.' }, { title: 'Sere a Lixouri', text: 'Una passeggiata in piazza, sapori locali e il ritorno in uno spazio tranquillo.' }] },
    amenities: { kicker: '', title: 'I nostri servizi', intro: '', categories: { comfort: 'Comfort', kitchen: 'Cucina', home: 'A casa', access: 'Accesso' } },
    location: { kicker: 'La vostra base a Paliki', title: 'Lixouri, sul versante occidentale di Cefalonia', text: 'Meraki Home è vicino al centro e al porto di Lixouri, con accesso comodo ai servizi quotidiani e alla costa della penisola.', mapTitle: 'Mappa di Meraki Home', approximate: 'Xenofontos 4, Lixouri 282 00', arrivalTitle: 'Come arrivare', arrivalText: 'Dall’aeroporto, seguite la strada per Lixouri oppure passate da Argostoli con il traghetto locale. Verificate itinerari e orari prima del viaggio.' },
    explore: { kicker: 'Intorno alla casa', title: 'Una penisola da esplorare', intro: 'Spiagge, brevi itinerari e la vita quotidiana di Lixouri. Le distanze sono state verificate sulla scheda pubblica.', verified: 'Distanza verificata' },
    trust: { kicker: 'Ospitalità concreta', title: 'Un soggiorno curato nei dettagli', text: 'Niente promesse eccessive o impossibili da verificare: solo informazioni chiare, accesso diretto alla scheda ufficiale e uno spazio pensato come una vera casa.', items: [{ title: 'Informazioni confermate', text: 'Sono mostrati solo servizi e distanze presenti in fonti pubbliche.' }, { title: 'Prenotazione trasparente', text: 'Disponibilità e conferma finale avvengono sulla piattaforma ufficiale.' }, { title: 'Un punto di partenza locale', text: 'Vicino al centro e al porto, per esplorare Paliki con facilità.' }] },
    booking: { kicker: 'Programmate il soggiorno', title: 'Controllate le date disponibili', intro: 'Scegliete le date e proseguite sulla pagina ufficiale di prenotazione di Meraki Home.', arrival: 'Arrivo', departure: 'Partenza', guests: 'Ospiti', guestOption: 'ospiti', submit: 'Continua su Booking.com', disclaimer: 'Questa ricerca non conferma una prenotazione. Disponibilità, prezzi e condizioni sono indicati sulla piattaforma.', empty: 'Il canale di prenotazione sarà aggiunto presto. Nel frattempo, potete trovarci su Google Maps.', errors: { arrivalRequired: 'Scegliete una data di arrivo.', departureRequired: 'Scegliete una data di partenza.', departureAfter: 'La partenza deve essere successiva all’arrivo.' } },
    faq: { kicker: 'Informazioni utili', title: 'Prima del viaggio', open: 'Apri risposta' },
    footer: { tagline: 'Una base tranquilla per scoprire Cefalonia al vostro ritmo.', navigate: 'Navigazione', contact: 'Prenotazioni e mappa', languages: 'Lingue', privacy: 'Privacy policy', legal: 'Note legali', credits: 'Progettato per Meraki Home', rights: 'Tutti i diritti riservati.' },
    legal: { privacyTitle: 'Privacy policy', privacyBody: ['Questo sito statico non usa sistemi di analisi, tracker pubblicitari o cookie non essenziali.', 'La scelta della lingua viene salvata localmente sul dispositivo con il nome “meraki-language”. Non viene inviata a un server.', 'I link esterni a Google Maps e Booking.com seguono le politiche dei rispettivi servizi.'], legalTitle: 'Note legali', legalBody: ['Il sito ha scopo informativo. Disponibilità, prezzi, condizioni e conferma della prenotazione dipendono esclusivamente dalla piattaforma ufficiale.', 'Prima della pubblicazione il proprietario deve completare i dati del responsabile, il numero di registrazione e i contatti.'], provisional: 'Testo provvisorio: è necessaria una revisione legale prima della pubblicazione.' },
    accessibility: { languageSelector: 'Seleziona lingua', currentImage: 'Immagine', opensNewWindow: 'Si apre in una nuova scheda' },
  },
}
