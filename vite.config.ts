import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

const inlinedStyles = new Set<string>()

/** Inline the small stylesheet and preload the body font so first paint isn't waiting on extra requests. */
function shipCriticalCss(): Plugin {
  return {
    name: 'ship-critical-css',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        const bundle = ctx.bundle
        if (!bundle) return html

        let next = html
        const preloads: string[] = []

        for (const item of Object.values(bundle)) {
          if (item.type !== 'asset' || !item.fileName.endsWith('.css')) continue
          const href = `/${item.fileName}`
          const link = new RegExp(`<link rel="stylesheet"[^>]*href="${href}"[^>]*>\\s*`)
          if (!link.test(next)) continue

          const css = String(item.source)
          next = next.replace(link, () => `<style>${css}</style>\n    `)
          inlinedStyles.add(item.fileName)
          delete bundle[item.fileName]

          const font = css.match(/\/assets\/inter[^)"']+\.woff2/)
          if (font) preloads.push(font[0])
        }

        if (preloads.length > 0) {
          const tags = preloads
            .map((href) => `<link rel="preload" href="${href}" as="font" type="font/woff2" crossorigin>`)
            .join('\n    ')
          next = next.replace('<style>', `${tags}\n    <style>`)
        }

        return next
      },
    },
    generateBundle(_options, bundle) {
      for (const fileName of inlinedStyles) delete bundle[fileName]
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), shipCriticalCss()],
  build: {
    target: 'es2022',
    modulePreload: { polyfill: false },
  },
})
