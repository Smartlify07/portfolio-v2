/**
 * Route-level SEO data, built from the content in `src/content`.
 *
 * Shared by the React head manager (`src/lib/seo.ts`) and the build-time
 * generators in `seo/`, so both emit the same titles, descriptions and
 * structured data. Relative imports carry `.ts` because this module is also
 * loaded from `vite.config.ts`.
 */
import { site } from '../content/site.ts'
import type { Project } from '../content/site.types.ts'

export type SeoMeta = {
  title: string
  description: string
  /** Root-relative path, e.g. `/work/antara`. */
  path: string
  /** Root-relative social image. Falls back to the site image. */
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
  keywords?: string[]
  /** Keeps a page out of search and drops its canonical. */
  noindex?: boolean
  jsonLd?: Record<string, unknown>
}

/** Resolves a root-relative path against the canonical origin. */
export function absoluteUrl(pathOrUrl: string, baseUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl

  return new URL(pathOrUrl, `${baseUrl.replace(/\/+$/, '')}/`).toString()
}

function personId(baseUrl: string): string {
  return `${absoluteUrl('/', baseUrl)}#person`
}

/** X/Twitter handle used for card attribution, e.g. `@Smartlify01`. */
export function xHandle(): string | undefined {
  return site.socials.find((social) => social.label.toLowerCase() === 'x')?.handle
}

/** Drops placeholder profiles such as a bare `https://github.com/`. */
function profiles(): string[] {
  return site.socials
    .filter((social) => social.href.startsWith('http'))
    .filter((social) => {
      try {
        return new URL(social.href).pathname !== '/'
      } catch {
        return false
      }
    })
    .map((social) => social.href)
}

function graph(nodes: Record<string, unknown>[]): Record<string, unknown> {
  return { '@context': 'https://schema.org', '@graph': nodes }
}

function person(baseUrl: string): Record<string, unknown> {
  const sameAs = profiles()

  return {
    '@type': 'Person',
    '@id': personId(baseUrl),
    name: site.name,
    jobTitle: site.role,
    description: site.about.intro,
    url: absoluteUrl('/', baseUrl),
    email: `mailto:${site.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lagos',
      addressCountry: 'NG',
    },
    knowsAbout: site.stack,
    ...(sameAs.length > 0 ? { sameAs } : {}),
  }
}

/** Home: the person, the site and the profile page. */
export function homeSeo(baseUrl: string): SeoMeta {
  const home = absoluteUrl('/', baseUrl)

  return {
    title: site.seo.title,
    description: site.seo.description,
    path: '/',
    type: 'website',
    keywords: site.seo.keywords,
    jsonLd: graph([
      person(baseUrl),
      {
        '@type': 'WebSite',
        '@id': `${home}#website`,
        name: site.name,
        alternateName: site.seo.title,
        description: site.seo.description,
        url: home,
        inLanguage: 'en',
        publisher: { '@id': personId(baseUrl) },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${home}#profile`,
        name: site.seo.title,
        description: site.seo.description,
        url: home,
        inLanguage: 'en',
        about: { '@id': personId(baseUrl) },
      },
    ]),
  }
}

/** One case study: the work itself plus a breadcrumb trail. */
export function projectSeo(project: Project, baseUrl: string): SeoMeta {
  const home = absoluteUrl('/', baseUrl)
  const path = `/work/${project.slug}`
  const url = absoluteUrl(path, baseUrl)

  return {
    title: `${project.title} — ${site.name}`,
    description: project.summary,
    path,
    image: project.image,
    imageAlt: `${project.title}: ${project.kicker}`,
    type: 'article',
    keywords: [project.title, project.type, ...project.stack, ...site.seo.keywords],
    jsonLd: graph([
      {
        '@type': 'CreativeWork',
        '@id': `${url}#work`,
        name: project.title,
        headline: project.kicker,
        description: project.overview,
        abstract: project.summary,
        url,
        image: absoluteUrl(project.image, baseUrl),
        datePublished: project.year,
        inLanguage: 'en',
        creator: { '@id': personId(baseUrl) },
        author: { '@id': personId(baseUrl) },
        about: project.scope,
        keywords: project.stack.join(', '),
        sameAs: project.url,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: home },
          { '@type': 'ListItem', position: 2, name: 'Work', item: `${home}#work` },
          { '@type': 'ListItem', position: 3, name: project.title, item: url },
        ],
      },
    ]),
  }
}

/** Unknown route: no canonical, no indexing. */
export function notFoundSeo(baseUrl: string): SeoMeta {
  return {
    title: `Page not found — ${site.name}`,
    description: 'That page does not exist. Browse the selected work instead.',
    path: '/',
    noindex: true,
    jsonLd: graph([person(baseUrl)]),
  }
}
