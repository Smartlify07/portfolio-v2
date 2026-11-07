import { site } from '@/content/site'

/**
 * Canonical origin, without a trailing slash. `VITE_SITE_URL` wins so preview
 * deployments and custom domains can override the value in `site.seo.url`.
 */
export const siteUrl = (import.meta.env.VITE_SITE_URL || site.seo.url).replace(/\/+$/, '')
