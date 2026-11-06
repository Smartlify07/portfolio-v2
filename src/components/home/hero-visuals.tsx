import type { ComponentProps } from 'react'
import { m, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { site } from '@/content/site'
import type { Project } from '@/content/site.types'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const

/** The project screens that rise out of the bottom edge of the hero stage. */
export function HeroVisuals() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()

  // The two screens drift at different speeds, so the pair reads as depth.
  const leftY = useTransform(scrollY, [0, 720], [0, -64])
  const rightY = useTransform(scrollY, [0, 720], [0, -112])

  const screens = site.hero.visuals.flatMap((slug) => {
    const project = site.projects.find((item) => item.slug === slug)
    return project ? [project] : []
  })

  return (
    <div
      aria-hidden
      className="relative mt-10 h-[clamp(8.5rem,25vw,19rem)] overflow-hidden sm:mt-14"
    >
      {screens[0] ? (
        <Screen
          project={screens[0]}
          side="left"
          rotate={-7}
          delay={0.44}
          style={reduceMotion ? undefined : { y: leftY }}
        />
      ) : null}
      {screens[1] ? (
        <Screen
          project={screens[1]}
          side="right"
          rotate={7}
          delay={0.52}
          style={reduceMotion ? undefined : { y: rightY }}
        />
      ) : null}
    </div>
  )
}

type ScreenProps = {
  project: Project
  side: 'left' | 'right'
  rotate: number
  delay: number
  style?: ComponentProps<typeof m.div>['style']
}

function Screen({ project, side, rotate, delay, style }: ScreenProps) {
  const reduceMotion = useReducedMotion()

  return (
    <m.div
      className={cn(
        'absolute bottom-[-18%] w-[50%] max-w-[30rem]',
        side === 'left' ? '-left-[5%]' : '-right-[5%]',
      )}
      style={style}
    >
      <m.div
        className="origin-bottom"
        initial={reduceMotion ? false : { opacity: 0, y: 96, rotate: 0 }}
        animate={{ opacity: 1, y: 0, rotate }}
        whileHover={reduceMotion ? undefined : { rotate: rotate * 0.5, y: -10 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        <div className="rounded-[1.1rem] border border-border/70 bg-card p-1.5 shadow-[0_1.5rem_3rem_-1.25rem_rgb(0_0_0_0.45)] sm:rounded-[1.4rem] sm:p-2">
          <div className="relative overflow-hidden rounded-[0.7rem] bg-muted ring-1 ring-foreground/10 sm:rounded-[1rem]">
            <span className="absolute top-1 left-1/2 z-10 size-1 -translate-x-1/2 rounded-full bg-background/40" />
            <img
              src={project.image}
              alt=""
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover object-top"
            />
          </div>
        </div>
      </m.div>
    </m.div>
  )
}
