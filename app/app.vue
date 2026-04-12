<script setup lang="ts">
const config = useRuntimeConfig()
const base = config.app.baseURL || '/'
const asset = (name: string) => `${base.endsWith('/') ? base : `${base}/`}${name}`
const logoHeaderSrc = asset('universal-echo-logo.svg')
const siteUrl = (config.public.siteUrl || 'https://universal-echo.com').replace(/\/+$/, '')
const normalizedBase = base.startsWith('/') ? base : `/${base}`
const normalizedBaseWithTrailingSlash = normalizedBase.endsWith('/')
  ? normalizedBase
  : `${normalizedBase}/`
const canonicalUrl = `${siteUrl}${normalizedBaseWithTrailingSlash}`
const ogImageUrl = `${siteUrl}${normalizedBaseWithTrailingSlash}og-image.svg`
const pageTitle = 'Universal Echo — Consulting & resource allocation'
const pageDescription =
  'Consultants and resource allocators specializing in IT. Consulting, technical judgment, and resource allocation for organizations navigating complex change.'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${canonicalUrl}#organization`,
  name: 'Universal Echo',
  url: canonicalUrl,
  email: 'inquiry@universal-echo.com',
  description:
    'Consulting and resource allocation firm specializing in information technology, technical judgment, and high-stakes delivery.',
  logo: `${siteUrl}${normalizedBaseWithTrailingSlash}universal-echo-logo.svg`,
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${canonicalUrl}#website`,
  url: canonicalUrl,
  name: 'Universal Echo',
  description:
    'Consultants and resource allocators specializing in IT, technical judgment, and complex organizational change.',
  publisher: {
    '@id': `${canonicalUrl}#organization`,
  },
  inLanguage: 'en',
}

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  keywords:
    'Consulting, technology consulting, resource allocation, technical advisory, software architecture, digital transformation, enterprise technology strategy',
  author: 'Universal Echo',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  ogLocale: 'en_US',
  ogType: 'website',
  ogSiteName: 'Universal Echo',
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogUrl: canonicalUrl,
  ogImage: ogImageUrl,
  ogImageAlt: 'Universal Echo wordmark on a dark blue background',
  ogImageType: 'image/svg+xml',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: ogImageUrl,
})

useHead({
  htmlAttrs: { lang: 'en' },
  titleTemplate: '%s',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#f4f6f9', media: '(prefers-color-scheme: light)' },
    { name: 'theme-color', content: '#09090b', media: '(prefers-color-scheme: dark)' },
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: `${normalizedBaseWithTrailingSlash}universal-echo-logo.svg`,
    },
    {
      rel: 'shortcut icon',
      type: 'image/svg+xml',
      href: `${normalizedBaseWithTrailingSlash}universal-echo-logo.svg`,
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;1,14..32,400&family=Montserrat:wght@600;700;800&display=swap',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify(organizationSchema),
    },
    {
      type: 'application/ld+json',
      textContent: JSON.stringify(websiteSchema),
    },
  ],
})

const navOpen = ref(false)

function closeNav() {
  navOpen.value = false
}

function onDocClick(e: MouseEvent) {
  if (!navOpen.value) return
  const el = e.target as Node
  const header = document.querySelector('.site-header')
  if (header && !header.contains(el)) {
    navOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', onDocClick))
onUnmounted(() => document.removeEventListener('click', onDocClick))
</script>

<template>
  <div class="page">
    <a class="skip-link" href="#main">Skip to content</a>

    <header class="site-header">
      <div class="wrap header-inner">
        <NuxtLink
          to="/"
          class="brand brand--logo-only"
          aria-label="Universal Echo, home"
          @click="closeNav"
        >
          <div class="brand-mark brand-mark--header">
            <img
              :src="logoHeaderSrc"
              alt=""
              width="795"
              height="595"
              decoding="async"
            />
          </div>
        </NuxtLink>

        <button
          type="button"
          class="nav-toggle"
          :aria-expanded="navOpen"
          aria-controls="site-nav"
          @click="navOpen = !navOpen"
        >
          Menu
        </button>

        <nav
          id="site-nav"
          class="nav"
          :class="{ 'is-open': navOpen }"
          aria-label="Primary"
        >
          <a href="#focus" @click="closeNav">Focus</a>
          <a href="#approach" @click="closeNav">Approach</a>
          <a href="#contact" @click="closeNav">Contact</a>
        </nav>
      </div>
    </header>

    <main id="main">
      <section class="hero" aria-labelledby="hero-title">
        <div class="wrap hero-grid">
          <div class="hero-copy">
            <p class="hero-eyebrow">Consulting and resource allocation</p>
            <h1 id="hero-title">Clarity where complexity echoes.</h1>
            <p class="lede">
              We are consultants and resource allocators who help organizations align people,
              partners, and priorities with the work that actually matters. Information technology
              is where we are most specialized; we are also engaged wherever disciplined technical
              judgment and careful allocation are essential.
            </p>
            <div class="hero-actions">
              <a class="btn btn-primary" href="#contact">Request a consultation</a>
              <a class="btn btn-ghost" href="#focus">Our focus areas</a>
            </div>
            <div class="hero-facts" aria-label="Primary focus areas">
              <div class="hero-fact">
                <span class="hero-fact__label">Consulting</span>
                <span class="hero-fact__value">Advisory and execution support</span>
              </div>
              <div class="hero-fact">
                <span class="hero-fact__label">Resource allocation</span>
                <span class="hero-fact__value">People, partners, and priorities</span>
              </div>
              <div class="hero-fact">
                <span class="hero-fact__label">IT specialization</span>
                <span class="hero-fact__value">Deepest expertise where risk is technical</span>
              </div>
            </div>
            <div class="hero-rule" aria-hidden="true" />
          </div>

          <div class="hero-visual">
            <div class="hero-wordmark-panel">
              <div class="hero-wordmark-panel__inner">
                <img
                  class="hero-wordmark-panel__mark"
                  :src="logoHeaderSrc"
                  alt=""
                  width="795"
                  height="595"
                  decoding="async"
                  aria-hidden="true"
                />
                <p class="hero-wordmark" aria-label="Universal Echo">
                  <span class="hero-wordmark__universal">UNIVERSAL</span>
                  <span class="hero-wordmark__echo">ECHO</span>
                </p>
                <p class="hero-wordmark-panel__caption">
                  Consulting-led support for organizations navigating complex change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="focus" class="section" aria-labelledby="focus-title">
        <div class="wrap">
          <header class="section-head">
            <p class="section-eyebrow">Capabilities</p>
            <h2 id="focus-title" class="section-title">Ambitious problems, disciplined delivery</h2>
            <p class="section-intro">
              We stay intentionally broad in industry and problem shape—because the through-line
              is how teams decide, build, and sustain capability. IT is where we are most often
              called, and where our expertise runs deepest.
            </p>
          </header>

          <div class="cards three">
            <article class="card">
              <h3>Consulting</h3>
              <p>
                Strategy and execution support when stakes are high and the path is unclear.
                We translate goals into workable plans, tradeoffs, and timelines you can stand behind.
              </p>
              <div class="pill-row">
                <span class="pill">Advisory</span>
                <span class="pill">Architecture</span>
                <span class="pill">Program sense-making</span>
              </div>
            </article>
            <article class="card">
              <h3>Technical judgment</h3>
              <p>
                Rigorous, practitioner-level scrutiny when you need more than slides—systems thinking,
                quality bars, and the kind of review that prevents expensive surprises later.
              </p>
              <div class="pill-row">
                <span class="pill">Software &amp; platforms</span>
                <span class="pill">Reliability</span>
                <span class="pill">Security-aware design</span>
              </div>
            </article>
            <article class="card">
              <h3>Resource allocation</h3>
              <p>
                Helping you match people, partners, and priorities to the work that actually moves
                the needle—without pretending capacity is infinite.
              </p>
              <div class="pill-row">
                <span class="pill">Capacity</span>
                <span class="pill">Vendor fit</span>
                <span class="pill">Team design</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="split-band engagement-band" aria-labelledby="engagement-title">
        <div class="wrap">
          <header class="section-head section-head--compact">
            <p class="section-eyebrow">Engagement model</p>
            <h2 id="engagement-title" class="section-title">Built to be clear, senior, and usable</h2>
            <p class="section-intro">
              We keep engagements legible: what is being solved, who is responsible, and where
              technical or allocation risk actually sits.
            </p>
          </header>

          <div class="engagement-grid">
            <article class="engagement-item">
              <span class="engagement-item__index">01</span>
              <h3>Working style</h3>
              <p>
                Direct communication, explicit assumptions, and deliverables that still make sense
                after the meeting ends.
              </p>
            </article>

            <article class="engagement-item">
              <span class="engagement-item__index">02</span>
              <h3>IT context</h3>
              <p>
                Technology is treated as business infrastructure, not an isolated function. That is
                where our experience is deepest.
              </p>
            </article>

            <article class="engagement-item">
              <span class="engagement-item__index">03</span>
              <h3>Scope discipline</h3>
              <p>
                We define scope around decisions, capacity, dependencies, and risk so priorities
                can move without unnecessary complexity.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="approach" class="section" aria-labelledby="approach-title">
        <div class="wrap">
          <header class="section-head">
            <p class="section-eyebrow">Approach</p>
            <h2 id="approach-title" class="section-title">Signal over noise</h2>
            <p class="section-intro">
              Every echo is a reflection. We help you hear which ones matter—then act with intent.
            </p>
          </header>

          <div class="cards">
            <article class="card">
              <h3>Start from reality</h3>
              <p>
                We map what is true today: constraints, dependencies, and the human cost of change.
                Glossing over that is how initiatives echo failure downstream.
              </p>
            </article>
            <article class="card">
              <h3>Choose leverage</h3>
              <p>
                Not every problem deserves a platform. We look for the smallest move that
                unlocks the next stage—then sequence the rest with purpose.
              </p>
            </article>
            <article class="card">
              <h3>Make it maintainable</h3>
              <p>
                The best advice is the kind your team can carry. We leave behind judgment,
                artifacts, and habits—not dependency dressed up as indispensability.
              </p>
            </article>
            <article class="card">
              <h3>Beyond IT, when it counts</h3>
              <p>
                Operations, data, product, and organizational design often show up in the same
                conversation. We stay curious and pragmatic—without diluting technical rigor.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" class="cta" aria-labelledby="contact-title">
        <div class="wrap">
          <div class="cta-card">
            <h2 id="contact-title">Inquire about an engagement</h2>
            <p>
              Briefly describe your context, timeline, and desired outcomes. We typically reply
              within a few business days.
            </p>
            <a class="btn btn-primary" href="mailto:inquiry@universal-echo.com?subject=Inquiry%20%E2%80%94%20Universal%20Echo">
              Email inquiry@universal-echo.com
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="wrap footer-inner">
        <p class="footer-meta">© {{ new Date().getFullYear() }} Universal Echo. All rights reserved.</p>
        <div class="footer-links">
          <a href="#main">Back to top</a>
          <a href="mailto:inquiry@universal-echo.com">Contact</a>
        </div>
      </div>
    </footer>
  </div>
</template>
