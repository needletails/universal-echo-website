// https://nuxt.com/docs/api/configuration/nuxt-config
const baseURL = process.env.NUXT_APP_BASE_URL || '/'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Universal Echo — Consulting & resource allocation',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Consultants and resource allocators specializing in IT. Consulting, technical judgment, and resource allocation for organizations navigating complex change.',
        },
        { name: 'theme-color', content: '#f4f6f9', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#09090b', media: '(prefers-color-scheme: dark)' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: `${baseURL}universal-echo-logo.svg`,
        },
        {
          rel: 'shortcut icon',
          type: 'image/svg+xml',
          href: `${baseURL}universal-echo-logo.svg`,
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;1,14..32,400&family=Montserrat:wght@600;700;800&display=swap',
        },
      ],
    },
  },
  nitro: {
    preset: 'static',
  },
})
