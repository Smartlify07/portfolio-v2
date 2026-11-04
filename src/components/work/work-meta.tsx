import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/content/site.types'
import { hostOf } from '@/lib/url'

export function WorkMeta({ project }: { project: Project }) {
  const facts = [
    { label: 'Type', value: project.type },
    { label: 'Year', value: project.year },
    { label: 'Role', value: project.role },
    { label: 'Status', value: 'Live' },
  ]

  return (
    <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-y border-border py-8 sm:grid-cols-4">
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt className="mono-label">{fact.label}</dt>
          <dd className="mt-2 text-sm">{fact.value}</dd>
        </div>
      ))}

      <div className="sm:col-span-2">
        <dt className="mono-label">Built with</dt>
        <dd className="mt-2 text-sm">{project.stack.join(', ')}</dd>
      </div>

      <div className="sm:col-span-2">
        <dt className="mono-label">Site</dt>
        <dd className="mt-2 text-sm">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-muted-foreground"
          >
            {hostOf(project.url)}
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </dd>
      </div>
    </dl>
  )
}
