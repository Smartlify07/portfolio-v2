import { useCallback, useEffect, useRef, useState } from 'react'
import { copyToClipboard } from '@/lib/clipboard'

/**
 * Copy text and expose a short-lived "copied" flag for UI feedback.
 */
export function useCopy(resetAfterMs = 1600) {
  const [copied, setCopied] = useState(false)
  const timeout = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timeout.current), [])

  const copy = useCallback(
    async (value: string) => {
      const ok = await copyToClipboard(value)
      setCopied(ok)
      window.clearTimeout(timeout.current)
      timeout.current = window.setTimeout(() => setCopied(false), resetAfterMs)
      return ok
    },
    [resetAfterMs],
  )

  return { copied, copy }
}
