import { AboutSection } from '@/components/home/about-section'
import { ContactSection } from '@/components/home/contact-section'
import { Hero } from '@/components/home/hero'
import { WorkSection } from '@/components/home/work-section'
import { useDocumentMeta } from '@/hooks/use-document-meta'
import { homeSeo } from '@/lib/seo-data'
import { siteUrl } from '@/lib/site-url'

export function HomePage() {
  useDocumentMeta(homeSeo(siteUrl))

  return (
    <>
      <Hero />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
