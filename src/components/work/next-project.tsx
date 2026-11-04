import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '@/content/site.types'

export function NextProject({ project }: { project: Project }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group mt-20 flex items-end justify-between gap-6 border-t border-border pt-8"
    >
      <div>
        <p className="mono-label">Next project</p>
        <p className="mt-2 text-2xl font-medium tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-1">
          {project.title}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">{project.kicker}</p>
      </div>
      <ArrowRight className="mb-1 size-5 shrink-0 text-muted-foreground transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-foreground" />
    </Link>
  )
}
