import { site } from '@/content/site'
import { LiveClock } from '@/components/common/live-clock'

/** Resolved once at module load — keeps render pure. */
const CURRENT_YEAR = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="shell flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="mono-label">
          © {CURRENT_YEAR} {site.name}
        </p>

        <nav aria-label="Elsewhere" className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
              className="mono-label transition-colors duration-300 hover:text-foreground"
            >
              {social.label}
            </a>
          ))}
        </nav>

        <LiveClock timeZone={site.timeZone} label={site.location} />
      </div>
    </footer>
  )
}
