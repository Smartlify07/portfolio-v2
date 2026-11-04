import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '@/content/site.types'

type WorkRowProps = {
  project: Project
  index: number
  /** Receives the pointer event so the preview can be positioned in the same commit. */
  onActive: (index: number | null, event?: React.PointerEvent<HTMLElement>) => void
}

/** One project row. Reads as a list, not a card grid. */
export function WorkRow({ project, index, onActive }: WorkRowProps) {
  return (
    <Link
      to={`/work/${project.slug}`}
      onPointerEnter={(event) => onActive(index, event)}
      onPointerLeave={() => onActive(null)}
      className="group grid grid-cols-[2rem_minmax(0,1fr)_auto] items-baseline gap-x-4 border-b border-border py-6 transition-colors duration-300 hover:border-foreground/20 hover:bg-muted/40 sm:grid-cols-[2.5rem_minmax(0,13rem)_minmax(0,1fr)_6.5rem] sm:py-7"
    >
      <span className="mono-label transition-colors duration-300 group-hover:text-foreground/70">
        {String(index + 1).padStart(2, '0')}
      </span>

      <span className="flex min-w-0 flex-col gap-1">
        <span className="text-lg font-medium tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-1 sm:text-xl">
          {project.title}
        </span>
        <span className="text-sm text-muted-foreground sm:hidden">{project.kicker}</span>
      </span>

      <span className="hidden truncate text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80 sm:block">
        {project.kicker}
      </span>

      <span className="flex items-center justify-end gap-3">
        <span className="mono-label hidden sm:block">{project.label}</span>
        <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </span>
    </Link>
  )
}
