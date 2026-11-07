import { useEffect, useState } from 'react'

/** Fraction of the viewport treated as the reading line for scrollspy. */
const READING_LINE = 0.35
const BOTTOM_SLOP = 2

/**
 * Tracks which of `ids` (in document order) is crossing the reading line.
 * Pass a stable array reference — it is part of the effect's dependencies.
 */
export function useActiveSection(ids: readonly string[], enabled = true) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) return

    let frame = 0

    const measure = () => {
      frame = 0
      const line = window.innerHeight * READING_LINE
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - BOTTOM_SLOP

      if (atBottom) {
        setActive(ids.at(-1) ?? null)
        return
      }

      let next: string | null = null
      for (const id of ids) {
        const section = document.getElementById(id)
        if (!section) continue

        const { top, bottom } = section.getBoundingClientRect()
        if (top > line) break
        if (bottom > line) {
          next = id
          break
        }
      }

      setActive(next)
    }

    const schedule = () => {
      if (frame === 0) frame = window.requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [enabled, ids])

  return enabled ? active : null
}
