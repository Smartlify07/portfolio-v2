import { m, useReducedMotion } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { ScrollToTarget } from '@/components/layout/scroll-to-target'
import { HomePage } from '@/pages/home'
import { NotFoundPage } from '@/pages/not-found'
import { WorkDetailPage } from '@/pages/work-detail'

export default function App() {
  const { pathname } = useLocation()
  const reduceMotion = useReducedMotion()

  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>

      <ScrollToTarget />
      <SiteHeader />

      <main id="main" className="flex-1">
        <m.div
          key={pathname}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work/:slug" element={<WorkDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </m.div>
      </main>

      <SiteFooter />
    </div>
  )
}
