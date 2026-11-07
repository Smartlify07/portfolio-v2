/**
 * Shape of the site content. Edit `site.ts` — not this file — to change copy.
 */

export type Social = {
  label: string
  href: string
  handle: string
}

/**
 * One piece of the display headline. Chips are clickable circular
 * snapshots that open a full-size mosaic in a dialog; the portrait is a
 * placeholder for a personal photo.
 */
export type HeroToken =
  | { kind: 'text'; text: string; italic?: boolean }
  | {
      kind: 'chip'
      /** Full-size image, shown in the dialog. */
      src: string
      /** Smaller file for the inline circle. Falls back to `src`. */
      thumb?: string
      alt: string
      caption: string
      /** CSS object-position for the circular crop. */
      focus?: string
      /** Optional zoom, for wide screenshots whose subject is small. */
      zoom?: number
      /** Intrinsic ratio, used for the dialog and its mosaic grid. */
      aspect?: readonly [number, number]
      credit?: string
      creditHref?: string
    }

/** A chip token that carries an image — what the lightbox receives. */
export type HeroChipToken = Extract<HeroToken, { kind: 'chip' }>

/**
 * One run of the About paragraph: a piece of text or a small square image
 * that sits inline with it, after the word it illustrates.
 */
export type AboutImageSegment = {
  kind: 'image'
  /** Path under /public. */
  src: string
  alt: string
  /** CSS object-position for the square crop. */
  focus?: string
  /** Attribution, mirrored in /public/images/CREDITS.md. */
  credit?: string
  creditHref?: string
}

export type AboutSegment = { kind: 'text'; text: string } | AboutImageSegment

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
    lead: string
    /** The display headline, one entry per rendered line. */
    display: HeroToken[][]
    /** Project slugs shown in the tilted screens at the bottom of the hero. */
    visuals: string[]
  }
  about: {
    intro: string
    /** The paragraph, split into text runs and inline images. */
    detail: AboutSegment[]
    focus: string[]
  }
  stack: string[]
  nav: { label: string; href: string }[]
  socials: Social[]
  projects: Project[]
  seo: {
    title: string
    description: string
    /** Canonical origin, no trailing slash. `VITE_SITE_URL` overrides it. */
    url: string
    /** Social preview image, relative to `/public`. */
    image: string
    /** Open Graph locale, e.g. `en_NG`. */
    locale: string
    /** Terms the site should be discoverable for. Feeds the meta tag and llms.txt. */
    keywords: string[]
  }
}
