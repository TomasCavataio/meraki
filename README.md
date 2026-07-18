# Meraki Home · Kefalonia

Sitio web estático premium, multilingüe y responsive para Meraki Home, un alojamiento turístico de 41 m² en Lixouri, Kefalonia. La experiencia editorial combina una dirección visual mediterránea sobria con información pública verificada y una reserva segura a través de Booking.com.

> Las fotografías actuales son editoriales provisionales generadas para el diseño. La interfaz lo indica y deben sustituirse antes de producción. Consulta `CONTENT_TODO.md`.

## Stack

- React 19 + TypeScript estricto
- Vite 7
- CSS moderno sin framework
- `lucide-react` para iconos
- ESLint con configuración tipada
- GitHub Actions + GitHub Pages

No hay backend, base de datos, analítica, publicidad, cookies no esenciales ni secretos.

## Requisitos

- Node.js 20.19 o superior (se recomienda Node 22 LTS)
- npm 10 o superior

## Instalación y ejecución local

```bash
cd /Users/eurovision/workspace/personal/kefalonia-apartment
npm install
npm run dev
```

Vite mostrará la URL local, normalmente `http://localhost:5173/`.

## Comprobaciones y build

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

Simulación de GitHub Project Pages:

```bash
VITE_BASE_PATH=/kefalonia-apartment/ \
VITE_PUBLIC_SITE_URL=https://usuario.github.io/kefalonia-apartment \
npm run build

npm run preview -- --base /kefalonia-apartment/
```

El build genera `dist/robots.txt` y `dist/sitemap.xml`. Con `VITE_PUBLIC_SITE_URL` configurada incluyen la URL pública; sin ella el sitemap queda vacío para evitar publicar dominios ficticios.

## Estructura

```text
src/
├── components/       # Cabecera, lightbox, diálogos y encabezados
├── config/           # Datos tipados del alojamiento
├── hooks/            # Animación de entrada y SEO
├── i18n/             # Contexto y traducciones EL/EN/ES/IT
├── sections/         # Secciones narrativas de la página
├── styles/           # Sistema visual responsive
└── utils/            # Rutas de assets compatibles con subrutas
public/
├── images/           # WebP usados en producción
├── .nojekyll
└── favicon.svg
source-images/        # PNG provisionales, fuera del build
```

## Editar el alojamiento

La fuente única es [`src/config/property.ts`](src/config/property.ts). Allí se cambian:

- nombre, copy y ubicación pública;
- datos del alojamiento;
- comodidades habilitadas (`enabled: true`);
- galería y textos alternativos;
- Booking.com, Airbnb, WhatsApp, email y teléfono;
- lugares cercanos, FAQ y reseñas;
- horarios, políticas y SEO.

Los campos vacíos se ocultan. No uses `0`, guiones o textos ficticios como sustituto de información pendiente.

## Textos e idiomas

Los textos de interfaz están en [`src/i18n/translations.ts`](src/i18n/translations.ts); los textos propios del alojamiento están localizados dentro de `property.ts`.

El orden de selección inicial es:

1. parámetro `?lang=el|en|es|it`;
2. última selección guardada en `localStorage` (`meraki-language`);
3. idioma del navegador;
4. griego como fallback.

Para añadir un idioma:

1. añádelo a `languages` en `src/config/types.ts`;
2. completa todas las traducciones tipadas;
3. añade la variante en cada `LocalizedText` de `property.ts`;
4. revisa selector, SEO, JSON-LD y responsive.

## Reemplazar fotografías

Sigue [`public/images/README.md`](public/images/README.md). Mantener los nombres actuales evita modificar componentes. Al incorporar una foto real, cambia `provisional: false` y actualiza `alt`, `width`, `height` y, si hace falta, `focalPoint`.

## Configurar reservas y contacto

En `bookingChannels`:

```ts
{ id: 'booking', label: 'Booking.com', value: 'https://...', primary: true }
{ id: 'whatsapp', label: 'WhatsApp', value: 'https://wa.me/30...', primary: false }
{ id: 'email', label: 'Email', value: 'mailto:hello@example.com' }
```

Solo se muestran canales con `value`. El formulario actual abre la ficha de Booking.com con fechas y huéspedes; no confirma la reserva.

## Configurar Google Maps

- `mapsUrl`: conserva el enlace oficial compartido.
- `publicCoordinates`: centro aproximado mostrado en OpenStreetMap.
- `privateAddress`: no se muestra y debe permanecer vacío salvo necesidad operativa.
- `exactCoordinates`: opcional; no lo añadas si no quieres publicar un pin exacto.

## Publicar en GitHub Pages

1. Crea un repositorio vacío en GitHub, por ejemplo `kefalonia-apartment`.
2. Desde la carpeta del proyecto:

   ```bash
   git init
   git add .
   git commit -m "Build Meraki Home website"
   git branch -M main
   git remote add origin https://github.com/USUARIO/kefalonia-apartment.git
   git push -u origin main
   ```

3. En GitHub abre `Settings → Pages`.
4. En `Build and deployment → Source`, selecciona **GitHub Actions**.
5. Espera al workflow **Deploy to GitHub Pages** o ejecútalo desde `Actions` con `workflow_dispatch`.
6. La URL aparecerá en el job `deploy` y normalmente será `https://USUARIO.github.io/kefalonia-apartment/`.

El workflow obtiene el nombre real del repositorio desde GitHub, usa `/${{ github.event.repository.name }}/` como base y no contiene usuarios hardcodeados.

## Dominio personalizado y Cloudflare

No se incluye `CNAME` ficticio. Para un dominio real:

1. configura el dominio en GitHub Pages o Cloudflare;
2. crea `.env.production.local` (no se versiona):

   ```bash
   VITE_PUBLIC_SITE_URL=https://www.tudominio.com
   VITE_BASE_PATH=/
   ```

3. en Cloudflare Pages usa:

   - build command: `npm run build`
   - output directory: `dist`
   - Node: `22`
   - variables: `VITE_PUBLIC_SITE_URL=https://www.tudominio.com` y `VITE_BASE_PATH=/`

El código no usa rutas React ni reescrituras de servidor, por lo que la migración no requiere cambiar componentes.

## Contenido todavía provisional

- seis imágenes editoriales;
- capacidad máxima;
- email, teléfono, WhatsApp y Airbnb;
- políticas completas;
- reseñas (la estructura existe, pero la sección se oculta);
- texto legal y datos del responsable;
- dominio y canonical hasta configurar `VITE_PUBLIC_SITE_URL`.

Consulta el checklist editable en [`CONTENT_TODO.md`](CONTENT_TODO.md).

## Checklist antes de producción

- [ ] Sustituir imágenes y eliminar las marcas de provisionalidad.
- [ ] Confirmar todos los datos encontrados públicamente con el propietario.
- [ ] Completar contacto, políticas y contenido legal.
- [ ] Probar una búsqueda real en Booking.com.
- [ ] Configurar `VITE_PUBLIC_SITE_URL`.
- [ ] Ejecutar `npm run lint && npm run typecheck && npm run build`.
- [ ] Revisar EL/EN/ES/IT en móvil y escritorio.
- [ ] Comprobar foco, teclado, menú, lightbox, FAQ y errores del formulario.
- [ ] Verificar sitemap, robots, canonical y Open Graph en el dominio final.
