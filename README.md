# Playblast landing page

Marketing site for [Playblast](https://github.com/brzrk-motion/Playblast) — free, open-source, self-hosted video proofing for small motion-design, CGI, animation, and video studios.

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/playblast-lp/`).

## Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally:

```bash
npm run preview
```

## GitHub Pages deployment

This repo deploys to GitHub Pages automatically via `.github/workflows/deploy-pages.yml` when changes are pushed to `main`.

**One-time repo settings** (if not already configured):

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**

The site will be available at:

`https://<org-or-user>.github.io/playblast-lp/`

The Vite `base` path in `vite.config.ts` is set to `/playblast-lp/` to match the repository name. Update it if the repo is renamed or deployed to a custom domain.

## Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- Static output — no server runtime required

## Copy & claims

See `AGENTS.md` for soft RC CTA rules, approved copy sources, and language we must not use on this site.
