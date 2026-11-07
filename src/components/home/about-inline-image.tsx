import type { AboutImageSegment } from '@/content/site.types'

/** Square snapshot that sits inline with the About paragraph. */
export function AboutInlineImage({ image }: { image: AboutImageSegment }) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      decoding="async"
      style={{ objectPosition: image.focus }}
      className="inline-block size-7 shrink-0 rounded-[5px] border-2 border-white object-cover align-middle shadow-[0_1px_2px_rgb(0_0_0/0.16),0_2px_6px_rgb(0_0_0/0.08)] ring-1 ring-black/5 dark:ring-white/10"
    />
  )
}
