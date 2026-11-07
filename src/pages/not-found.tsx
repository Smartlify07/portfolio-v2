import { NotFoundBlock } from '@/components/common/not-found-block'
import { useDocumentMeta } from '@/hooks/use-document-meta'
import { notFoundSeo } from '@/lib/seo-data'
import { siteUrl } from '@/lib/site-url'

export function NotFoundPage() {
  useDocumentMeta(notFoundSeo(siteUrl))

  return <NotFoundBlock />
}
