import { ArrowDownRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '@/content/site'
import { CopyEmailButton } from '@/components/common/copy-email-button'
import { Magnetic } from '@/components/motion/magnetic'
import { Reveal } from '@/components/motion/reveal'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="shell pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-24">
      <Reveal trigger="mount">
        <p className="mono-label">{site.hero.eyebrow}</p>
      </Reveal>

      <Reveal trigger="mount" delay={0.04} className="mt-8 sm:mt-12">
        <h1 className="max-w-[15ch] text-[clamp(2.6rem,8vw,5.5rem)] leading-[0.94] font-medium tracking-[-0.045em] text-balance">
          {site.hero.headline}
        </h1>
      </Reveal>

      <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:mt-14 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-16">
        <Reveal trigger="mount" delay={0.08}>
          <p className="max-w-[48ch] text-base leading-relaxed text-muted-foreground">
            {site.hero.lead}
          </p>
        </Reveal>

        <Reveal trigger="mount" delay={0.12} className="flex flex-wrap items-center gap-2.5">
          <Magnetic>
            <Button asChild size="lg" className="h-10 rounded-full px-5 text-[13px]">
              <Link to="/#work">
                Selected work
                <ArrowDownRight className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:translate-y-0.5" />
              </Link>
            </Button>
          </Magnetic>
          <CopyEmailButton email={site.email} className="h-10 rounded-full px-4" />
        </Reveal>
      </div>
    </section>
  )
}
