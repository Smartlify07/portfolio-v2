import { Link } from 'react-router-dom'
import { site } from '@/content/site'
import { HeaderLink } from '@/components/layout/header-link'
import { useScrolled } from '@/hooks/use-scrolled'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const scrolled = useScrolled()

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b transition-colors duration-300',
        scrolled ? 'border-border bg-background/80 backdrop-blur-md' : 'border-transparent',
      )}
    >
      <div className="shell flex h-16 items-center justify-between gap-6">
        <Link to="/" className="group flex items-baseline gap-3">
          <span className="text-[13px] font-medium tracking-tight">{site.name}</span>
          <span aria-hidden className="hidden h-3 w-px translate-y-0.5 bg-border sm:block" />
          <span className="mono-label hidden transition-colors duration-300 group-hover:text-foreground sm:block">
            {site.role}
          </span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-0.5 sm:gap-1">
          {site.nav.map((item) => (
            <HeaderLink key={item.href} label={item.label} href={item.href} />
          ))}
        </nav>
      </div>
    </header>
  )
}
