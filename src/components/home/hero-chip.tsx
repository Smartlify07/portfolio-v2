import { m, useReducedMotion } from 'motion/react'
import type { HeroChipToken } from '@/content/site.types'

/** Alternating tilts, so the chips read as stickers rather than badges. */
const TILTS = [-6, 5, -4]

/** Stable per-image variation, so no render-order bookkeeping is needed. */
function seedFrom(src: string) {
  return [...src].reduce((sum, char) => sum + char.charCodeAt(0), 0)
}

type HeroChipProps = {
  chip: HeroChipToken
  onOpen: (trigger: HTMLButtonElement) => void
}

/** Circular snapshot in the display headline. Clicking it opens the full image. */
export function HeroChip({ chip, onOpen }: HeroChipProps) {
  const reduceMotion = useReducedMotion()
  const seed = seedFrom(chip.src)
  const tilt = TILTS[seed % TILTS.length]

  return (
    <m.button
      type="button"
      aria-haspopup="dialog"
      aria-label={`View image: ${chip.caption}`}
      onClick={(event) => onOpen(event.currentTarget)}
      className="inline-block size-[0.86em] shrink-0 cursor-pointer rounded-full align-middle focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.3, rotate: tilt * 2 }}
      animate={{ opacity: 1, scale: 1, rotate: tilt }}
      whileHover={reduceMotion ? undefined : { scale: 1.1, rotate: 0 }}
      whileTap={reduceMotion ? undefined : { scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 240, damping: 16, delay: 0.36 + (seed % 3) * 0.07 }}
    >
      <m.span
        className="block size-full overflow-hidden rounded-full border-[0.07em] border-background shadow-[0_0.05em_0.16em_rgb(0_0_0_0.3)] ring-1 ring-foreground/10"
        animate={reduceMotion ? undefined : { y: [0, -2.5, 0] }}
        transition={{
          duration: 5 + (seed % 3),
          repeat: Infinity,
          ease: 'easeInOut',
          delay: (seed % 5) * 0.3,
        }}
      >
        <img
          src={chip.thumb ?? chip.src}
          alt=""
          loading="eager"
          decoding="async"
          style={{
            objectPosition: chip.focus,
            transform: chip.zoom ? `scale(${chip.zoom})` : undefined,
            transformOrigin: chip.focus,
          }}
          className="size-full object-cover"
        />
      </m.span>
    </m.button>
  )
}
