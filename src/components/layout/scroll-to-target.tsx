import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Resets scroll on navigation, and smooth-scrolls to `#hash` targets when a
 * nav link points back into the home page from a case study.
 */
export function ScrollToTarget() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
