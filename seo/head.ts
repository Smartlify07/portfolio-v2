import { site } from '../src/content/site.ts'
import { absoluteUrl, type SeoMeta, xHandle } from '../src/lib/seo-data.ts'
import { escapeHtml } from './html.ts'

const INDEXABLE = 'index, follow, max-image-preview:large, max-snippet:-1'

function metaTag(attribute: 'name' | 'property', key: string, content: string): string {
  return `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`
}

function jsonLdScript(value: Record<string, unknown>): string {
  // Escaping `<` keeps a stray `</script>` out of the JSON payload.
  const json = JSON.stringify(value).replace(/</g, '\\u003c')

  return `<script type="application/ld+json">${json}</script>`
}

/** Full `<head>` payload for one route, as static HTML. */
export function renderHead(meta: SeoMeta, baseUrl: string): string {
  const canonical = absoluteUrl(meta.path, baseUrl)
  const image = absoluteUrl(meta.image ?? site.seo.image, baseUrl)
  const imageAlt = meta.imageAlt ?? site.seo.description
  const handle = xHandle()

  const tags = [
    `<title>${escapeHtml(meta.title)}</title>`,
    metaTag('name', 'description', meta.description),
    metaTag('name', 'author', site.name),
    metaTag('name', 'robots', meta.noindex ? 'noindex, follow' : INDEXABLE),
    ...(meta.keywords?.length ? [metaTag('name', 'keywords', meta.keywords.join(', '))] : []),
  ]

  if (!meta.noindex) {
    tags.push(
      `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
      `<link rel="alternate" type="text/markdown" href="${escapeHtml(absoluteUrl('/llms-full.txt', baseUrl))}" title="Plain-text site content" />`,
      metaTag('property', 'og:type', meta.type ?? 'website'),
      metaTag('property', 'og:site_name', site.name),
      metaTag('property', 'og:title', meta.title),
      metaTag('property', 'og:description', meta.description),
      metaTag('property', 'og:url', canonical),
      metaTag('property', 'og:image', image),
      metaTag('property', 'og:image:alt', imageAlt),
      metaTag('property', 'og:locale', site.seo.locale),
      metaTag('name', 'twitter:card', 'summary_large_image'),
      metaTag('name', 'twitter:title', meta.title),
      metaTag('name', 'twitter:description', meta.description),
      metaTag('name', 'twitter:image', image),
      metaTag('name', 'twitter:image:alt', imageAlt),
      ...(handle
        ? [metaTag('name', 'twitter:site', handle), metaTag('name', 'twitter:creator', handle)]
        : []),
    )
  }

  if (meta.jsonLd) tags.push(jsonLdScript(meta.jsonLd))

  return tags.join('\n    ')
}
