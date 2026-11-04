import { useState } from 'react'
import { site } from '@/content/site'
import { SectionHeading } from '@/components/common/section-heading'
import { WorkPreview } from '@/components/home/work-preview'
import { WorkRow } from '@/components/home/work-row'
import { useFollowCursor } from '@/hooks/use-follow-cursor'
import { usePreloadImages } from '@/hooks/use-preload-images'

const POSTERS = site.projects.map((project) => project.image)

export function WorkSection() {
  const [active, setActive] = useState<number | null>(null)
  const { x, y, track, reset, enabled } = useFollowCursor()
  usePreloadImages(POSTERS)

  /**
   * Row hover and cursor position are updated together, so the poster never
   * appears for a frame at the previous pointer position.
   */
  const handleActive = (index: number | null, event?: React.PointerEvent<HTMLElement>) => {
    if (event) track(event)
    setActive(index)
    if (index === null) reset()
  }

  return (
    <section id="work" className="shell scroll-mt-24 py-16 sm:py-24">
      <SectionHeading index="(01)" title="Selected work" aside={`${site.projects.length} projects`} />

      <div
        className="mt-1"
        onPointerMove={track}
        onPointerLeave={() => {
          setActive(null)
          reset()
        }}
      >
        {site.projects.map((project, index) => (
          <WorkRow key={project.slug} project={project} index={index} onActive={handleActive} />
        ))}
      </div>

      <WorkPreview
        project={active === null ? null : site.projects[active]}
        x={x}
        y={y}
        enabled={enabled}
      />
    </section>
  )
}
