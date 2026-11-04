import { site } from '@/content/site'
import { CopyEmailButton } from '@/components/common/copy-email-button'
import { SectionHeading } from '@/components/common/section-heading'
import { Reveal } from '@/components/motion/reveal'

export function ContactSection() {
  return (
    <section id="contact" className="shell scroll-mt-24 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <SectionHeading index="(03)" title="Contact" />

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
        <Reveal>
          <h2 className="max-w-[16ch] text-[clamp(2rem,5.5vw,3.5rem)] leading-[0.98] font-medium tracking-[-0.04em] text-balance">
            Let&rsquo;s make something worth using.
          </h2>
        </Reveal>

        <Reveal delay={0.06} className="space-y-6">
          <p className="max-w-[42ch] leading-relaxed text-muted-foreground">
            I&rsquo;m open to product work, design-system engagements and the occasional prototype.
            Tell me what you&rsquo;re building — I&rsquo;ll reply within a day.
          </p>
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={`mailto:${site.email}`}
              className="group relative inline-block text-lg font-medium tracking-tight"
            >
              {site.email}
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-100 bg-border"
              />
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </a>
            <CopyEmailButton email={site.email} className="h-8 rounded-full px-3" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
