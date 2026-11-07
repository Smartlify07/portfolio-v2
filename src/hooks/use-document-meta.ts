import { useEffect } from 'react'
import type { SeoMeta } from '@/lib/seo-data'
import { applySeo } from '@/lib/seo'

/**
 * Route-level head tags: title, description, canonical, social cards, JSON-LD.
 * The serialized key keeps the effect from re-running on every render.
 */
export function useDocumentMeta(meta: SeoMeta) {
  const key = JSON.stringify(meta)

  useEffect(() => {
    applySeo(JSON.parse(key) as SeoMeta)
  }, [key])
}
