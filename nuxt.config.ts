// https://nuxt.com/docs/api/configuration/nuxt-config
const baseURL = process.env.NUXT_APP_BASE_URL || '/'
const siteUrl = (process.env.NUXT_PUBLIC_SITE_URL || 'https://universal-echo.com').replace(/\/+$/, '')

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      siteUrl,
    },
  },
  app: {
    baseURL,
  },
  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/robots.txt', '/sitemap.xml'],
    },
  },
})
