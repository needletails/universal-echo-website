import { setHeader } from 'h3'

const normalizeBasePath = (basePath: string) => {
  const withLeadingSlash = basePath.startsWith('/') ? basePath : `/${basePath}`
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`
}

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const siteUrl = (config.public.siteUrl || 'https://universal-echo.com').replace(/\/+$/, '')
  const basePath = normalizeBasePath(config.app.baseURL || '/')
  const canonicalUrl = `${siteUrl}${basePath}`
  const lastModified = new Date().toISOString()

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${canonicalUrl}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return body
})
