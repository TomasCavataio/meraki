import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'

function seoFiles(publicUrl?: string): Plugin {
  return {
    name: 'generate-seo-files',
    apply: 'build',
    async closeBundle() {
      const outDir = resolve(import.meta.dirname, 'dist')
      await mkdir(outDir, { recursive: true })
      const normalized = publicUrl ? `${publicUrl.replace(/\/$/, '')}/` : ''
      const sitemap = normalized
        ? `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${normalized}</loc></url>\n</urlset>\n`
        : '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" />\n'
      const robots = `User-agent: *\nAllow: /\n${normalized ? `Sitemap: ${normalized}sitemap.xml\n` : ''}`
      await Promise.all([
        writeFile(resolve(outDir, 'sitemap.xml'), sitemap, 'utf8'),
        writeFile(resolve(outDir, 'robots.txt'), robots, 'utf8'),
      ])
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, import.meta.dirname, '')
  return {
    base: env.VITE_BASE_PATH || '/',
    plugins: [react(), seoFiles(env.VITE_PUBLIC_SITE_URL)],
    build: {
      target: 'es2022',
      cssCodeSplit: true,
      sourcemap: false,
    },
  }
})
