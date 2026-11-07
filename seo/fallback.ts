import { site } from '../src/content/site.ts'
import type { Project } from '../src/content/site.types.ts'
import { absoluteUrl } from '../src/lib/seo-data.ts'
import { aboutDetailText } from './about-text.ts'
import { escapeHtml } from './html.ts'

const STYLE =
  'max-width:64rem;margin:0 auto;padding:2rem 1.5rem;font:15px/1.6 system-ui,sans-serif;color:#111'

/** Content shown when JavaScript never runs, including to text-only crawlers. */
function wrap(lines: string[]): string {
  return `<noscript><div style="${STYLE}">${lines.join('')}</div></noscript>`
}

export function homeFallback(baseUrl: string): string {
  const work = site.projects
    .map((project) => {
      const href = absoluteUrl(`/work/${project.slug}`, baseUrl)

      return `<li><a href="${href}">${escapeHtml(project.title)}</a> — ${escapeHtml(project.summary)}</li>`
    })
    .join('')

  return wrap([
    `<p><strong>${escapeHtml(site.name)}</strong> — ${escapeHtml(site.role)}, ${escapeHtml(site.location)}.</p>`,
    `<p>${escapeHtml(site.hero.lead)}</p>`,
    `<h2>Work</h2><ul>${work}</ul>`,
    `<h2>About</h2><p>${escapeHtml(site.about.intro)} ${escapeHtml(aboutDetailText(site.about.detail))}</p>`,
    `<p>Email: <a href="mailto:${site.email}">${site.email}</a></p>`,
  ])
}

export function projectFallback(project: Project, baseUrl: string): string {
  const scope = project.scope.map((item) => `<li>${escapeHtml(item)}</li>`).join('')

  return wrap([
    `<p><a href="${absoluteUrl('/', baseUrl)}">${escapeHtml(site.name)}</a> / Work / ${escapeHtml(project.title)}</p>`,
    `<h1>${escapeHtml(project.title)}</h1>`,
    `<p>${escapeHtml(project.kicker)}</p>`,
    `<p>${escapeHtml(project.summary)}</p>`,
    `<h2>The brief</h2><p>${escapeHtml(project.overview)}</p>`,
    `<h2>What it covers</h2><ul>${scope}</ul>`,
    `<p>Stack: ${project.stack.map(escapeHtml).join(', ')}</p>`,
    `<p><a href="${escapeHtml(project.url)}">Visit ${escapeHtml(project.title)}</a></p>`,
  ])
}

export function notFoundFallback(baseUrl: string): string {
  return wrap([
    `<h1>Page not found</h1>`,
    `<p>That page does not exist. <a href="${absoluteUrl('/', baseUrl)}">Back to the work</a>.</p>`,
  ])
}
