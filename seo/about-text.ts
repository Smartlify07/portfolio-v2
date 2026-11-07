import type { AboutSegment } from '../src/content/site.types.ts'

/** The About paragraph as plain text, for SEO output and no-JS fallbacks. */
export function aboutDetailText(segments: AboutSegment[]): string {
  return segments
    .map((segment) => (segment.kind === 'text' ? segment.text : ''))
    .join('')
    .replace(/\s+([,.;:])/g, '$1')
    .replace(/\s{2,}/g, ' ')
    .trim()
}
