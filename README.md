# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## GitHub Pages

This site is a static export (`nuxt generate`). Upload the contents of `.output/public` to any static host, or use the included workflow.

1. In the repository **Settings → Pages**, set **Source** to **GitHub Actions**.
2. Push to `main` (or `master`). The workflow builds with `NUXT_APP_BASE_URL` set to `/<repository-name>/`, which matches the default URL for a **project** site (`https://<user>.github.io/<repository-name>/`).
3. For a **user or organization** site (repository named `<user>.github.io`), set the base URL to `/` instead: run `NUXT_APP_BASE_URL=/ npm run generate` locally and deploy `.output/public`, or change the workflow env to `/`.

Replace the placeholder contact address `hello@universalecho.com` in `app/app.vue` with your real email when ready.
