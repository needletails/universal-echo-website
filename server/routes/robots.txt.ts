import { setHeader } from 'h3'

const normalizeBasePath = (basePath: string) => {
  const withLeadingSlash = basePath.startsWith('/') ? basePath : `/${basePath}`
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`
}

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const siteUrl = (config.public.siteUrl || 'https://universal-echo.com').replace(/\/+$/, '')
  const basePath = normalizeBasePath(config.app.baseURL || '/')
  const sitemapUrl = `${siteUrl}${basePath}sitemap.xml`

  let hostLine = ''
  try {
    const host = new URL(siteUrl).host
    hostLine = `Host: ${host}\n`
  }
  catch {
    hostLine = ''
  }

  const body = `User-agent: *
Allow: /
${hostLine}Sitemap: ${sitemapUrl}
`

  setHeader(event, 'content-type', 'text/plain; charset=utf-8')
  return body
})
