import { useEffect } from 'react'
import { applyDocumentMeta } from '@/lib/seo'

/** Route-level document title and description. */
export function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    applyDocumentMeta({ title, description })
  }, [title, description])
}
