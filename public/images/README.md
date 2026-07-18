# Fotografías del sitio

Las imágenes actuales son **recursos editoriales provisionales generados con IA** para poder evaluar el diseño. No representan el interior ni el exterior real de Meraki Home y la interfaz lo indica de forma visible.

## Archivos que debe reemplazar el propietario

| Archivo | Uso | Proporción recomendada | Contenido real recomendado |
| --- | --- | --- | --- |
| `meraki-living.webp` | Hero, social y galería | 3:2 horizontal | Salón real del alojamiento |
| `meraki-bedroom.webp` | Galería | 3:2 horizontal | Dormitorio real |
| `meraki-bathroom.webp` | Galería | 3:2 horizontal | Baño real |
| `meraki-exterior.webp` | Ubicación y galería | 3:2 horizontal | Entrada exterior real |

## Sustitución segura

1. Exporta cada fotografía como WebP, perfil sRGB y calidad aproximada 82–88.
2. Conserva los mismos nombres para no tocar código, o actualiza `src/config/property.ts`.
3. Mantén las dimensiones indicadas en `width` y `height` del archivo de configuración para evitar saltos de layout.
4. Actualiza los textos `alt` en los cuatro idiomas.
5. Cambia `provisional: true` a `false` en cada imagen real.
6. Conserva los originales fuera de `public/` y verifica que tienes autorización para publicarlos.

Las fotografías oficiales se incorporan con autorización del propietario y se sirven desde este directorio durante el build.
