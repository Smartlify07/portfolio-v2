import { site } from '../src/content/site.ts'
import { absoluteUrl } from '../src/lib/seo-data.ts'

/** Answer engines and AI crawlers we explicitly welcome. */
const AI_AGENTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'PerplexityBot',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
]

export function robotsTxt(baseUrl: string): string {
  const agents = AI_AGENTS.map((agent) => `User-agent: ${agent}\nAllow: /`).join('\n\n')

  return [
    `# ${baseUrl}`,
    '',
    'User-agent: *',
    'Allow: /',
    '',
    '# Answer engines and AI crawlers are welcome.',
    '',
    agents,
    '',
    `Sitemap: ${absoluteUrl('/sitemap.xml', baseUrl)}`,
    '',
  ].join('\n')
}

export function sitemapXml(baseUrl: string): string {
  const paths = ['/', ...site.projects.map((project) => `/work/${project.slug}`)]
  const urls = paths
    .map((path) => `  <url>\n    <loc>${absoluteUrl(path, baseUrl)}</loc>\n  </url>`)
    .join('\n')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    '',
  ].join('\n')
}

/** The llms.txt index: short, structured, link-first. */
export function llmsTxt(baseUrl: string): string {
  const work = site.projects
    .map((project) => {
      const href = absoluteUrl(`/work/${project.slug}`, baseUrl)

      return `- [${project.title}](${href}): ${project.summary}`
    })
    .join('\n')

  const socials = site.socials
    .filter((social) => !social.href.startsWith('mailto:'))
    .map((social) => `- ${social.label}: ${social.href}`)
    .join('\n')

  return [
    `# ${site.name}`,
    '',
    `> ${site.hero.lead}`,
    '',
    `${site.name} is a ${site.role.toLowerCase()} based in ${site.location}.`,
    '',
    '## About',
    `- Role: ${site.role}`,
    `- Location: ${site.location}`,
    `- Focus: ${site.about.focus.join(', ')}`,
    `- Stack: ${site.stack.join(', ')}`,
    `- Keywords: ${site.seo.keywords.join(', ')}`,
    '',
    '## Work',
    work,
    '',
    '## Contact',
    `- Email: ${site.email}`,
    socials,
    '',
    '## Optional',
    `- [Full site content](${absoluteUrl('/llms-full.txt', baseUrl)}): every section and case study as plain markdown.`,
    '',
  ].join('\n')
}

/** Every section and case study, in full. */
export function llmsFullTxt(baseUrl: string): string {
  const projects = site.projects
    .map((project) =>
      [
        `### ${project.title}`,
        '',
        `- Live site: ${project.url}`,
        `- Case study: ${absoluteUrl(`/work/${project.slug}`, baseUrl)}`,
        `- Type: ${project.type}`,
        `- Year: ${project.year}`,
        `- Role: ${project.role}`,
        `- Stack: ${project.stack.join(', ')}`,
        '',
        project.summary,
        '',
        `**Brief.** ${project.overview}`,
        '',
        '**What it covers**',
        ...project.scope.map((item) => `- ${item}`),
        '',
      ].join('\n'),
    )
    .join('\n')

  return [
    `# ${site.name}`,
    '',
    `> ${site.hero.lead}`,
    '',
    '## About',
    '',
    site.about.intro,
    '',
    site.about.detail,
    '',
    `Focus: ${site.about.focus.join(', ')}.`,
    '',
    `Stack: ${site.stack.join(', ')}.`,
    '',
    '## Work',
    '',
    projects,
    '## Contact',
    '',
    `- Email: ${site.email}`,
    `- Location: ${site.location}`,
    ...site.socials
      .filter((social) => !social.href.startsWith('mailto:'))
      .map((social) => `- ${social.label}: ${social.href} (${social.handle})`),
    '',
    '---',
    '',
    `Plain-text version of ${absoluteUrl('/', baseUrl)}, generated from the same content that renders the site.`,
    '',
  ].join('\n')
}
