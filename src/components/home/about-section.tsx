import { site } from '@/content/site'
import { SectionHeading } from '@/components/common/section-heading'
import { Reveal } from '@/components/motion/reveal'
import { Badge } from '@/components/ui/badge'
import { AboutInlineImage } from '@/components/home/about-inline-image'

export function AboutSection() {
  return (
    <section id="about" className="shell scroll-mt-24 py-16 sm:py-24">
      <SectionHeading index="(02)" title="About" aside={site.location} />

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">
        <Reveal className="space-y-6">
          <p className="max-w-[34ch] text-xl leading-snug font-medium tracking-[-0.015em] text-balance sm:text-2xl">
            {site.about.intro}
          </p>
          <p className="max-w-[52ch] leading-8 text-muted-foreground">
            {site.about.detail.map((segment, index) =>
              segment.kind === 'text' ? (
                <span key={index}>{segment.text}</span>
              ) : (
                <AboutInlineImage key={index} image={segment} />
              ),
            )}
          </p>
        </Reveal>

        <Reveal delay={0.06} className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <p className="mono-label">Focus</p>
            <ul className="mt-4 grid gap-2.5">
              {site.about.focus.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span aria-hidden className="size-1 shrink-0 rounded-full bg-foreground/30" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label">Toolkit</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {site.stack.map((tool) => (
                <Badge key={tool} variant="outline" className="h-6 px-2 font-mono text-[11px] font-normal">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
