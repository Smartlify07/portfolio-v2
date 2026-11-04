import { useRef } from 'react'
import { useMotionValue, useReducedMotion, useSpring, type MotionValue } from 'motion/react'

export type MagneticHandle = {
  ref: React.RefObject<HTMLDivElement | null>
  x: MotionValue<number>
  y: MotionValue<number>
  onPointerMove: (event: React.PointerEvent<HTMLDivElement>) => void
  onPointerLeave: () => void
}

/**
 * Pulls an element a fraction of the way toward the pointer, then springs
 * back on leave. Cursor-only and disabled under reduced-motion.
 */
export function useMagnetic(strength = 0.25): MagneticHandle {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const config = { stiffness: 300, damping: 24, mass: 0.5 }
  const x = useSpring(rawX, config)
  const y = useSpring(rawY, config)

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const node = ref.current
    if (reduce || !node || event.pointerType !== 'mouse') return

    const rect = node.getBoundingClientRect()
    rawX.set((event.clientX - (rect.left + rect.width / 2)) * strength)
    rawY.set((event.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const onPointerLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return { ref, x, y, onPointerMove, onPointerLeave }
}
