# Universal Echo — Website

Static marketing site for **Universal Echo**, a consulting and resource allocation firm with deep specialization in information technology. Built with [Nuxt 4](https://nuxt.com/) and exported as plain HTML/CSS/JS for hosting on **GitHub Pages** (or any static host).

## What’s in the repo

- **`app/app.vue`** — Single-page layout: hero, capabilities, engagement model, approach, contact, footer.
- **`app/assets/css/main.css`** — Global styles, light/dark via `prefers-color-scheme`, typography (Inter + Montserrat wordmark).
- **`public/`** — Static assets: `universal-echo-logo.svg` (favicon + brand), `robots.txt`, and related logo files.
- **`.github/workflows/deploy-github-pages.yml`** — CI: `npm ci`, `nuxt generate`, deploy `/.output/public` to GitHub Pages.

Contact on the site: **inquiry@universal-echo.com**.

## Prerequisites

- Node.js 20+ (CI uses 22)
- npm

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app uses `NUXT_APP_BASE_URL` from the environment when set; locally it defaults to `/`.

## Static build (production)

```bash
npm run generate
```

Output is in **`.output/public`**. Preview locally:

```bash
npx serve .output/public
```

For a **project** GitHub Pages URL (`https://<user>.github.io/<repo>/`), the build must use base `/<repo>/`. The included workflow sets this automatically. For a **user** site repo named `<user>.github.io`, the workflow sets base to `/`.

**Custom domain (e.g. `https://universal-echo.com/`):** GitHub Pages serves the site from **`/`**, not `/<repository-name>/`. For a project repo the workflow would otherwise build with `/<repo>/`, so CSS and JS requests miss and assets break. Add a repository **Actions variable** **`NUXT_APP_BASE_URL`** set to **`/`** under **Settings → Secrets and variables → Actions → Variables**, then re-run **Deploy to GitHub Pages** (or push a commit).

## Deploy to GitHub Pages

1. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to **`main`** (or **`master`**). The workflow **Deploy to GitHub Pages** runs `npm run generate` and publishes `.output/public`.

Base URL logic in the workflow:

- If the repository variable **`NUXT_APP_BASE_URL`** is set, that value wins (use **`/`** for a custom apex domain).
- Else if the repository name is **`<owner>.github.io`**, `NUXT_APP_BASE_URL=/`.
- Otherwise, `NUXT_APP_BASE_URL=/<repository-name>/`.

## Configuration notes

- **`nuxt.config.ts`** — `nitro.preset: 'static'`, `app.baseURL` from `NUXT_APP_BASE_URL`, favicon links point at `universal-echo-logo.svg` under the same base.
- **Fonts** load from Google Fonts (see `nuxt.config.ts` `app.head.link`).

## Further reading

- [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction)
- [Nuxt static hosting](https://nuxt.com/docs/getting-started/deployment#static-hosting)
