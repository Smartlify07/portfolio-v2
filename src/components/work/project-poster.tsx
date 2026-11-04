import type { Project } from '@/content/site.types'
import { cn } from '@/lib/utils'

type ProjectPosterProps = {
  project: Project
  className?: string
  /** Set on the case-study hero so the screenshot loads immediately. */
  priority?: boolean
}

/**
 * A screenshot of the live site, cropped to 16:10 (the capture size).
 * Projects without an image fall back to an accent gradient with type on it,
 * so the layout never depends on an asset existing.
 */
export function ProjectPoster({ project, className, priority = false }: ProjectPosterProps) {
  const [from, to] = project.accent

  return (
    <div
      className={cn('relative isolate aspect-[16/10] overflow-hidden rounded-xl bg-muted', className)}
      style={project.image ? undefined : { backgroundImage: `linear-gradient(140deg, ${from}, ${to})` }}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} — ${project.kicker}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          className="size-full rounded-[inherit] object-cover object-top"
        />
      ) : (
        <>
          <div aria-hidden className="poster-glow absolute inset-0" />
          <div aria-hidden className="poster-grid absolute inset-0 opacity-60" />
          <div aria-hidden className="poster-shade absolute inset-0" />
          <div className="relative flex h-full flex-col justify-between p-5 text-white">
            <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase">
              <span className="text-white/80">{project.label}</span>
              <span className="text-white/80">{project.stack[0]}</span>
            </div>
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] text-white/80 uppercase">
                {project.kicker}
              </p>
              <p className="mt-2 text-2xl font-medium tracking-tight">{project.title}</p>
            </div>
          </div>
        </>
      )}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-foreground/10 ring-inset"
      />
    </div>
  )
}
