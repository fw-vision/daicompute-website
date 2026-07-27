# daicompute-website

Public credibility website for **DAI Compute** (Distributed AI Compute):
daicompute.com. A Canadian protocol for sovereign energy and AI compute
infrastructure, asset-backed and community-operated.

Part of the FW.VISION constellation. The flagship stealth product for the
Markham innovation-district play.

## Stack

- **Astro 5.x** + **Tailwind 4** (via `@tailwindcss/vite`, CSS `@source` directives)
- **React island** (`@astrojs/react`) for the ForesightScope widget only
- Consumes private GitHub Packages: `@fw-vision/web-kit`, `@fw-vision/widgets`
- Vite pinned to stable via `overrides` (avoids Astro 6 rolldown breakage; see
  the Constellation Build Handoff, Section 0)

## Design

Pravah reference (engineering dossier on warm parchment; full-bleed dark
inversions; wireframe grid; uppercase tracked field-note labels), retuned to
DAI Compute's own sovereign spruce-green palette. Related-but-distinct from the
burgundy of SyncID / fw.vision.

## Develop

Requires the `GITHUB_TOKEN_FWVISION` env var (a classic PAT with `read:packages`)
for the private `@fw-vision/*` packages, read by `.npmrc`.

```sh
bun install
bunx astro build      # build (NOT npm run build)
bunx astro dev        # local dev (do not leave running in CI/agents)
```

## Content

- Copy and data source: `04_Execute/DAICompute/` in the Perceptiosphere vault.
- Gap map and remaining work: `CONTENT-PLAN.md`.

## Deploy

GitHub Pages via `.github/workflows/deploy.yml` (bun-based; maps the Actions
token for private-package install). Custom domain in `public/CNAME`.
