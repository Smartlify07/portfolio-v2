import { site } from '@/content/site'
import { NotFoundBlock } from '@/components/common/not-found-block'
import { useDocumentMeta } from '@/hooks/use-document-meta'

export function NotFoundPage() {
  useDocumentMeta(`Not found — ${site.name}`, site.seo.description)

  return <NotFoundBlock />
}
