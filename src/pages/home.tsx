import { site } from '@/content/site'
import { AboutSection } from '@/components/home/about-section'
import { ContactSection } from '@/components/home/contact-section'
import { Hero } from '@/components/home/hero'
import { WorkSection } from '@/components/home/work-section'
import { useDocumentMeta } from '@/hooks/use-document-meta'

export function HomePage() {
  useDocumentMeta(site.seo.title, site.seo.description)

  return (
    <>
      <Hero />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
