import { site } from '@/content/site'
import type { SeoMeta } from '@/lib/seo-data'
import { absoluteUrl, xHandle } from '@/lib/seo-data'
import { siteUrl } from '@/lib/site-url'

const INDEXABLE = 'index, follow, max-image-preview:large, max-snippet:-1'
const JSON_LD_ID = 'seo-jsonld'

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }

  tag.content = content
}

function removeMeta(attribute: 'name' | 'property', key: string) {
  document.head.querySelector(`meta[${attribute}="${key}"]`)?.remove()
}

function upsertLink(rel: string, href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)

  if (!tag) {
    tag = document.createElement('link')
    tag.rel = rel
    document.head.appendChild(tag)
  }

  tag.href = href
}

function removeLink(rel: string) {
  document.head.querySelector(`link[rel="${rel}"]`)?.remove()
}

function upsertJsonLd(jsonLd?: Record<string, unknown>) {
  const existing = document.getElementById(JSON_LD_ID)

  if (!jsonLd) {
    existing?.remove()
    return
  }

  if (existing) {
    existing.textContent = JSON.stringify(jsonLd)
    return
  }

  const tag = document.createElement('script')
  tag.id = JSON_LD_ID
  tag.type = 'application/ld+json'
  tag.textContent = JSON.stringify(jsonLd)
  document.head.appendChild(tag)
}

/** Keeps every head tag in step with the active route. */
export function applySeo(meta: SeoMeta) {
  const canonical = absoluteUrl(meta.path, siteUrl)
  const image = absoluteUrl(meta.image ?? site.seo.image, siteUrl)
  const imageAlt = meta.imageAlt ?? site.seo.description

  document.title = meta.title
  upsertMeta('name', 'description', meta.description)
  upsertMeta('name', 'author', site.name)
  upsertMeta('name', 'robots', meta.noindex ? 'noindex, follow' : INDEXABLE)

  if (meta.keywords?.length) upsertMeta('name', 'keywords', meta.keywords.join(', '))
  else removeMeta('name', 'keywords')

  if (meta.noindex) removeLink('canonical')
  else upsertLink('canonical', canonical)

  upsertMeta('property', 'og:type', meta.type ?? 'website')
  upsertMeta('property', 'og:site_name', site.name)
  upsertMeta('property', 'og:title', meta.title)
  upsertMeta('property', 'og:description', meta.description)
  upsertMeta('property', 'og:url', canonical)
  upsertMeta('property', 'og:image', image)
  upsertMeta('property', 'og:image:alt', imageAlt)
  upsertMeta('property', 'og:locale', site.seo.locale)

  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', meta.title)
  upsertMeta('name', 'twitter:description', meta.description)
  upsertMeta('name', 'twitter:image', image)
  upsertMeta('name', 'twitter:image:alt', imageAlt)

  const handle = xHandle()

  if (handle) {
    upsertMeta('name', 'twitter:site', handle)
    upsertMeta('name', 'twitter:creator', handle)
  }

  upsertJsonLd(meta.jsonLd)
}
