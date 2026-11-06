import { ArrowDownRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '@/content/site'
import { CopyEmailButton } from '@/components/common/copy-email-button'
import { HeroHeadline } from '@/components/home/hero-headline'
import { HeroVisuals } from '@/components/home/hero-visuals'
import { Magnetic } from '@/components/motion/magnetic'
import { Reveal } from '@/components/motion/reveal'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="shell pt-12 pb-10 sm:pt-20 sm:pb-14">
      <div className="text-center">
        <Reveal trigger="mount">
          <p className="mono-label text-balance">{site.hero.eyebrow}</p>
        </Reveal>

        <HeroHeadline />

        <Reveal trigger="mount" delay={0.34}>
          <p className="mx-auto mt-6 max-w-[46ch] text-[13px] leading-relaxed text-balance text-muted-foreground sm:mt-7 sm:text-sm">
            {site.hero.lead}
          </p>
        </Reveal>

        <Reveal
          trigger="mount"
          delay={0.42}
          className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:mt-8"
        >
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

      <HeroVisuals />
    </section>
  )
}
