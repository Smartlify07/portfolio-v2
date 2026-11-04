import type { MotionValue } from 'motion/react'
import { AnimatePresence, m } from 'motion/react'
import type { Project } from '@/content/site.types'
import { ProjectPoster } from '@/components/work/project-poster'

type WorkPreviewProps = {
  project: Project | null
  x: MotionValue<number>
  y: MotionValue<number>
  enabled: boolean
}

/**
 * Cursor-following poster. Two layers on purpose: the outer element carries
 * the cursor transform, the inner one the enter/exit scale, so they never
 * overwrite each other's inline transform. `mode="wait"` swaps one card at a
 * time — two overlapping cards read as jitter while the pointer moves.
 *
 * The fade is deliberately slower than the usual 200ms: a card that appears
 * under the cursor reads as jarring if it snaps in.
 */
export function WorkPreview({ project, x, y, enabled }: WorkPreviewProps) {
  const visible = Boolean(project) && enabled

  return (
    <m.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-30 hidden lg:block"
      style={{ x, y }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <AnimatePresence mode="wait" initial={false}>
          {visible && project ? (
            <m.div
              key={project.slug}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99, transition: { duration: 0.2, ease: 'easeIn' } }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectPoster
                project={project}
                priority
                className="w-[26rem] shadow-2xl shadow-black/25"
              />
            </m.div>
          ) : null}
        </AnimatePresence>
      </div>
    </m.div>
  )
}
