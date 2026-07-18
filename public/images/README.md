# Fotografías del sitio

Las imágenes actuales son **recursos editoriales provisionales generados con IA** para poder evaluar el diseño. No representan el interior ni el exterior real de Meraki Home y la interfaz lo indica de forma visible.

## Archivos que debe reemplazar el propietario

| Archivo | Uso | Proporción recomendada | Contenido real recomendado |
| --- | --- | --- | --- |
| `meraki-hero.webp` | Hero y social | 3:2 horizontal, 2400 px de ancho | Mejor imagen general del alojamiento o su entorno real |
| `meraki-living.webp` | Introducción y galería | 2:3 vertical, 1600 × 2400 px | Salón real, encuadre vertical |
| `meraki-breakfast.webp` | Introducción y galería | 3:2 horizontal | Cocina/comedor real o detalle de hospitalidad |
| `meraki-bedroom.webp` | Galería | 3:2 horizontal | Dormitorio completo y bien iluminado |
| `meraki-door.webp` | Ubicación y galería | 2:3 vertical | Entrada real sin mostrar datos sensibles |
| `meraki-coast.webp` | Experiencia y galería | 3:2 horizontal | Paisaje real de Kefalonia con derechos de uso |

## Sustitución segura

1. Exporta cada fotografía como WebP, perfil sRGB y calidad aproximada 82–88.
2. Conserva los mismos nombres para no tocar código, o actualiza `src/config/property.ts`.
3. Mantén las dimensiones indicadas en `width` y `height` del archivo de configuración para evitar saltos de layout.
4. Actualiza los textos `alt` en los cuatro idiomas.
5. Cambia `provisional: true` a `false` en cada imagen real.
6. Conserva los originales fuera de `public/` y verifica que tienes autorización para publicarlos.

Las fuentes PNG provisionales se conservan en `source-images/` y no se incluyen en el build. No se incorporaron fotografías de Booking.com ni de terceros.
