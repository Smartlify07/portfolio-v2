import type { ReactNode } from 'react'
import { m } from 'motion/react'
import { cn } from '@/lib/utils'
import { useMagnetic } from '@/hooks/use-magnetic'

type MagneticProps = {
  children: ReactNode
  className?: string
  /** 0.2 is a whisper, 0.45 is playful. */
  strength?: number
}

/** Wrapper that leans toward the cursor and springs back on leave. */
export function Magnetic({ children, className, strength = 0.22 }: MagneticProps) {
  const { ref, x, y, onPointerMove, onPointerLeave } = useMagnetic(strength)

  return (
    <m.div
      ref={ref}
      className={cn('inline-flex', className)}
      style={{ x, y }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </m.div>
  )
}
