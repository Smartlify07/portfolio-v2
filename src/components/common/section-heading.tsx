import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  index: string
  title: string
  aside?: ReactNode
  className?: string
}

/** Numbered section rule: `(01) — Selected work`. Used on every section. */
export function SectionHeading({ index, title, aside, className }: SectionHeadingProps) {
  return (
    <div className={cn('flex items-baseline justify-between gap-6 border-b border-border pb-4', className)}>
      <div className="flex items-baseline gap-4">
        <span className="mono-label">{index}</span>
        <h2 className="text-sm font-medium tracking-tight">{title}</h2>
      </div>
      {aside ? <span className="mono-label hidden sm:block">{aside}</span> : null}
    </div>
  )
}
