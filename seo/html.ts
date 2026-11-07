/** Markers in `index.html` that the build replaces with generated head/fallback. */
export const SEO_START = '<!--seo:start-->'
export const SEO_END = '<!--seo:end-->'
export const FALLBACK_START = '<!--fallback:start-->'
export const FALLBACK_END = '<!--fallback:end-->'

/**
 * Replaces the content between two HTML comments and keeps the markers, so the
 * same built file can be re-targeted for every case-study shell.
 */
export function replaceRegion(html: string, start: string, end: string, content: string): string {
  const from = html.indexOf(start)
  const to = html.indexOf(end, from + start.length)

  if (from === -1 || to === -1) return html

  return `${html.slice(0, from + start.length)}\n${content}\n${html.slice(to)}`
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
