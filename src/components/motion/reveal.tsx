import type { ReactNode } from 'react'
import { m, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Seconds of delay, for staggering sibling blocks. */
  delay?: number
  /** Pixels to rise from. */
  distance?: number
  /**
   * `mount` animates immediately — use above the fold.
   * `view` waits for the element to scroll into view.
   */
  trigger?: 'mount' | 'view'
}

const EASE = [0.22, 1, 0.36, 1] as const

/** One-shot entrance animation. Animates its own wrapper, so text never re-flows. */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 14,
  trigger = 'view',
}: RevealProps) {
  const reduceMotion = useReducedMotion()
  const from = reduceMotion ? false : { opacity: 0, y: distance }
  const to = { opacity: 1, y: 0 }
  const transition = { duration: 0.28, delay, ease: EASE }

  if (trigger === 'mount') {
    return (
      <m.div className={cn(className)} initial={from} animate={to} transition={transition}>
        {children}
      </m.div>
    )
  }

  return (
    <m.div
      className={cn(className)}
      initial={from}
      whileInView={reduceMotion ? undefined : to}
      viewport={{ once: true, margin: '-60px 0px -60px 0px' }}
      transition={transition}
    >
      {children}
    </m.div>
  )
}
