import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { site } from '@/content/site'
import { NotFoundBlock } from '@/components/common/not-found-block'
import { Reveal } from '@/components/motion/reveal'
import { NextProject } from '@/components/work/next-project'
import { ProjectPoster } from '@/components/work/project-poster'
import { WorkBody } from '@/components/work/work-body'
import { WorkMeta } from '@/components/work/work-meta'
import { useDocumentMeta } from '@/hooks/use-document-meta'
import { notFoundSeo, projectSeo } from '@/lib/seo-data'
import { siteUrl } from '@/lib/site-url'

export function WorkDetailPage() {
  const { slug } = useParams()
  const index = site.projects.findIndex((item) => item.slug === slug)
  const project = index === -1 ? null : site.projects[index]
  const next = site.projects[(index + 1) % site.projects.length]

  useDocumentMeta(project ? projectSeo(project, siteUrl) : notFoundSeo(siteUrl))

  if (!project) return <NotFoundBlock />

  return (
    <div className="shell pt-10 pb-20 sm:pt-14 sm:pb-28">
      <article className="mx-auto max-w-[920px]">
        <Link
          to="/#work"
          className="group mono-label inline-flex items-center gap-2 transition-colors duration-300 hover:text-foreground"
        >
          <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
          All work
        </Link>

        <header className="mt-10">
          <p className="mono-label">
            {project.label} &middot; {project.kicker}
          </p>
          <h1 className="mt-4 text-[clamp(2.4rem,6.5vw,4.25rem)] leading-[0.96] font-medium tracking-[-0.045em] text-balance">
            {project.title}
          </h1>
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
        </header>

        <Reveal trigger="mount" className="mt-12">
          <ProjectPoster project={project} priority />
        </Reveal>

        <WorkMeta project={project} />
        <WorkBody project={project} />
        <NextProject project={next} />
      </article>
    </div>
  )
}
