/**
 * Shape of the site content. Edit `site.ts` — not this file — to change copy.
 */

export type Social = {
  label: string
  href: string
  handle: string
}

/** One screenshot in a case study. */
export type ProjectShot = {
  /** Path under /public. */
  src: string
  /** Intrinsic size, so the page reserves space before the image loads. */
  width: number
  height: number
  alt: string
  /** Read as a caption under the shot. */
  caption: string
  /** Column width on the case study. Defaults to a full-width shot. */
  size?: 'wide' | 'inset' | 'phone'
}

export type Project = {
  slug: string
  title: string
  /** One line, used in lists and beside the title. */
  kicker: string
  /** Short mono tag for the work list: CLIENT, NONPROFIT, PRODUCT. */
  label: string
  /** Human-readable type shown on the case study. */
  type: string
  /** Year shipped, shown in the case-study meta. */
  year: string
  /** What you owned on the project — e.g. "Design & build". */
  role: string
  summary: string
  /** The brief, in a short paragraph. */
  overview: string
  /** What the site actually contains — one line per area. */
  scope: string[]
  stack: string[]
  url: string
  /** Screenshot in /public. Falls back to the accent gradient if empty. */
  image: string
  /** Full set of case-study screenshots, shown below the brief. */
  gallery: ProjectShot[]
  accent: readonly [string, string]
}

export type SiteContent = {
  name: string
  role: string
  email: string
  location: string
  timeZone: string
  hero: {
    eyebrow: string
    headline: string
    lead: string
  }
  about: {
    intro: string
    detail: string
    focus: string[]
  }
  stack: string[]
  nav: { label: string; href: string }[]
  socials: Social[]
  projects: Project[]
  seo: {
    title: string
    description: string
  }
}
