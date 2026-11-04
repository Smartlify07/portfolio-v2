import { useRef } from 'react'
import { useMotionValue, useReducedMotion, useSpring } from 'motion/react'

/**
 * Smoothed cursor coordinates for a follow-the-pointer preview.
 *
 * The first sample of a hover jumps straight to the pointer instead of
 * springing from (0, 0) — otherwise the card flies in from the corner of the
 * screen. Only fine pointers are tracked, so touch never drags a ghost card.
 */
export function useFollowCursor() {
  const reduce = useReducedMotion()
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const config = { stiffness: 420, damping: 38, mass: 0.45, restDelta: 0.4 }
  const x = useSpring(rawX, config)
  const y = useSpring(rawY, config)
  const positioned = useRef(false)

  const track = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse') return

    if (!positioned.current) {
      positioned.current = true
      x.jump(event.clientX)
      y.jump(event.clientY)
      return
    }

    rawX.set(event.clientX)
    rawY.set(event.clientY)
  }

  /** Call when the pointer leaves the list, so the next hover starts fresh. */
  const reset = () => {
    positioned.current = false
  }

  return { x, y, track, reset, enabled: !reduce }
}
