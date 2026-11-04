import type { Project, ProjectShot } from '@/content/site.types'
import { cn } from '@/lib/utils'

/** Column widths for a case-study shot. `inset` alternates side; `phone` is a narrow crop. */
const WIDTH: Record<NonNullable<ProjectShot['size']>, string> = {
  wide: 'w-full',
  inset: 'w-full sm:w-[82%]',
  phone: 'mx-auto w-[68%] max-w-[300px]',
}

/**
 * The screenshot set for one project. Wide shots run the full column, inset shots
 * alternate sides to keep the rhythm, and the mobile shot closes the set.
 */
export function WorkGallery({ project }: { project: Project }) {
  if (project.gallery.length === 0) return null

  return (
    <section aria-labelledby="screens-heading">
      <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
        <h2 id="screens-heading" className="mono-label">
          Screens
        </h2>
        <span className="mono-label">
          {String(project.gallery.length).padStart(2, '0')} shots
        </span>
      </div>

      <ol className="mt-8 space-y-12">
        {project.gallery.map((shot, index) => {
          const size = shot.size ?? 'wide'
          const earlierInsets = project.gallery
            .slice(0, index)
            .filter((item) => (item.size ?? 'wide') === 'inset').length
          return (
            <li
              key={shot.src}
              className={cn(
                WIDTH[size],
                size === 'inset' && earlierInsets % 2 === 1 && 'sm:ml-auto',
              )}
            >
              <figure>
                <div className="overflow-hidden rounded-xl bg-muted ring-1 ring-foreground/10 ring-inset">
                  <img
                    src={shot.src}
                    width={shot.width}
                    height={shot.height}
                    alt={shot.alt}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3 flex gap-3">
                  <span className="mono-label pt-px">{String(index + 1).padStart(2, '0')}</span>
                  <span className="max-w-[62ch] text-sm leading-relaxed text-muted-foreground">
                    {shot.caption}
                  </span>
                </figcaption>
              </figure>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
