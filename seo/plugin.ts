import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import type { Connect, Plugin } from 'vite'
import { site } from '../src/content/site.ts'
import { homeSeo, notFoundSeo, projectSeo } from '../src/lib/seo-data.ts'
import { homeFallback, notFoundFallback, projectFallback } from './fallback.ts'
import { llmsFullTxt, llmsTxt, robotsTxt, sitemapXml } from './files.ts'
import { renderHead } from './head.ts'
import {
  FALLBACK_END,
  FALLBACK_START,
  SEO_END,
  SEO_START,
  replaceRegion,
} from './html.ts'

type SeoPluginOptions = {
  /** Canonical origin. Falls back to `site.seo.url`. */
  siteUrl?: string
}

function contentType(fileName: string): string {
  return fileName.endsWith('.xml') ? 'application/xml; charset=utf-8' : 'text/plain; charset=utf-8'
}

/** Serves the generated crawler files from the dev and preview servers. */
function serveFiles(middlewares: Connect.Server, files: Map<string, string>) {
  middlewares.use((req, res, next) => {
    const path = (req.url ?? '/').split('?')[0].replace(/^\//, '')
    const body = files.get(path)

    if (!body) {
      next()
      return
    }

    res.setHeader('Content-Type', contentType(path))
    res.setHeader('Cache-Control', 'no-cache')
    res.end(body)
  })
}

/**
 * Emits robots.txt, sitemap.xml, llms.txt, llms-full.txt, a noindex 404 shell
 * and one static HTML shell per case study, so crawlers get real per-page
 * metadata without running the app. Runs after Vite has written the build,
 * when `index.html` is final.
 */
export function seoPlugin(options: SeoPluginOptions = {}): Plugin {
  const baseUrl = (options.siteUrl || site.seo.url).replace(/\/+$/, '')
  const files = new Map<string, string>([
    ['robots.txt', robotsTxt(baseUrl)],
    ['sitemap.xml', sitemapXml(baseUrl)],
    ['llms.txt', llmsTxt(baseUrl)],
    ['llms-full.txt', llmsFullTxt(baseUrl)],
  ])
  let outDir = ''

  return {
    name: 'portfolio-seo',

    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },

    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        const withHead = replaceRegion(html, SEO_START, SEO_END, renderHead(homeSeo(baseUrl), baseUrl))

        return replaceRegion(withHead, FALLBACK_START, FALLBACK_END, homeFallback(baseUrl))
      },
    },

    configureServer(server) {
      serveFiles(server.middlewares, files)
    },

    configurePreviewServer(server) {
      serveFiles(server.middlewares, files)
    },

    closeBundle() {
      const htmlPath = path.join(outDir, 'index.html')

      if (!existsSync(htmlPath)) return

      const html = readFileSync(htmlPath, 'utf8')

      if (!html.includes(SEO_START) || !html.includes(FALLBACK_START)) {
        this.warn('SEO markers are missing from index.html; per-route HTML shells were skipped.')
        return
      }

      for (const project of site.projects) {
        const withHead = replaceRegion(html, SEO_START, SEO_END, renderHead(projectSeo(project, baseUrl), baseUrl))
        const shell = replaceRegion(withHead, FALLBACK_START, FALLBACK_END, projectFallback(project, baseUrl))
        const target = path.join(outDir, 'work', `${project.slug}.html`)

        mkdirSync(path.dirname(target), { recursive: true })
        writeFileSync(target, shell, 'utf8')
      }

      // Vercel and Pxxl both serve 404.html for unmatched paths, so unknown
      // URLs get a real 404 status and still boot the client-side 404 page.
      const notFoundHead = replaceRegion(html, SEO_START, SEO_END, renderHead(notFoundSeo(baseUrl), baseUrl))
      const notFoundShell = replaceRegion(notFoundHead, FALLBACK_START, FALLBACK_END, notFoundFallback(baseUrl))

      writeFileSync(path.join(outDir, '404.html'), notFoundShell, 'utf8')

      for (const [fileName, source] of files) {
        writeFileSync(path.join(outDir, fileName), source, 'utf8')
      }
    },
  }
}
