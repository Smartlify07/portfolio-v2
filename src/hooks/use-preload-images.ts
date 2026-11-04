import { useEffect } from 'react'

/**
 * Loads a fixed set of images right after the first paint, so the
 * cursor-following preview has pixels on hand instead of flashing empty on
 * its first hover. The preview only renders at lg and up, so narrower
 * viewports skip the download entirely.
 */
export function usePreloadImages(urls: readonly string[]) {
  useEffect(() => {
    const hasPreview = window.matchMedia('(min-width: 1024px)').matches
    if (!hasPreview) return

    let frames = 0
    let raf = 0
    const images: HTMLImageElement[] = []

    const load = () => {
      for (const url of urls) {
        if (!url) continue
        const image = new Image()
        image.decoding = 'async'
        image.src = url
        images.push(image)
      }
    }

    // Let the document paint once before competing with the fonts and LCP.
    const tick = () => {
      frames += 1
      if (frames < 2) {
        raf = window.requestAnimationFrame(tick)
        return
      }
      load()
    }
    raf = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(raf)
      for (const image of images) image.src = ''
    }
  }, [urls])
}
