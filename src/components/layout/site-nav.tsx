import type { MouseEvent } from 'react'
import { m, useReducedMotion } from 'motion/react'
import { Link, useLocation } from 'react-router-dom'
import { site } from '@/content/site'
import { useActiveSection } from '@/hooks/use-active-section'
import { cn } from '@/lib/utils'

const SECTION_IDS = site.nav.map((item) => item.href.split('#')[1] ?? '')

function sectionId(href: string) {
  return href.split('#')[1] ?? ''
}

/**
 * Floating bottom dock. The active-section pill is a shared layout element, so
 * it slides between tabs when the scrollspy selection changes.
 */
export function SiteNav() {
  const { pathname, hash } = useLocation()
  const onHome = pathname === '/'
  const section = useActiveSection(SECTION_IDS, onHome)
  const reduceMotion = useReducedMotion()

  /**
   * The hash only changes once, so clicking the tab for the section already in
   * the URL would be a no-op. Scroll back to it explicitly instead.
   */
  const handleSameSection = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = sectionId(href)
    if (!onHome || !id || hash !== `#${id}`) return

    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 sm:bottom-6"
    >
      <ul className="mb-[env(safe-area-inset-bottom)] flex items-center gap-0.5 rounded-full border border-border/80 bg-background/70 p-1 shadow-[0_12px_40px_-16px_rgb(0_0_0_/_0.45)] backdrop-blur-xl">
        {site.nav.map((item) => {
          const id = sectionId(item.href)
          const isActive = onHome ? section === id : id === 'work'

          return (
            <li key={item.href}>
              <Link
                to={item.href}
                onClick={(event) => handleSameSection(event, item.href)}
                aria-current={isActive ? 'location' : undefined}
                className={cn(
                  'relative flex h-9 items-center rounded-full px-4 text-[13px] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none',
                  isActive
                    ? 'text-background'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {isActive && (
                  <m.span
                    aria-hidden
                    layoutId="primary-nav-pill"
                    className="absolute inset-0 rounded-full bg-foreground"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 420, damping: 34, mass: 0.7 }
                    }
                  />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
