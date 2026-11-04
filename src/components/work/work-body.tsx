import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/content/site.types'
import { WorkGallery } from '@/components/work/work-gallery'
import { hostOf } from '@/lib/url'

export function WorkBody({ project }: { project: Project }) {
  return (
    <div className="mt-16 space-y-14">
      <section>
        <h2 className="mono-label">The brief</h2>
        <p className="mt-4 max-w-[62ch] text-lg leading-relaxed">{project.overview}</p>
      </section>

      <WorkGallery project={project} />

      <section>
        <h2 className="mono-label">What it covers</h2>
        <ol className="mt-4 border-t border-border">
          {project.scope.map((item, index) => (
            <li
              key={item}
              className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-border py-4"
            >
              <span className="mono-label pt-1">{String(index + 1).padStart(2, '0')}</span>
              <p className="max-w-[62ch] leading-relaxed text-muted-foreground">{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="group flex items-end justify-between gap-6 border-t border-border pt-8"
      >
        <div>
          <p className="mono-label">Live site</p>
          <p className="mt-2 text-2xl font-medium tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-1">
            {hostOf(project.url)}
          </p>
        </div>
        <ArrowUpRight className="mb-1 size-5 shrink-0 text-muted-foreground transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </a>
    </div>
  )
}
