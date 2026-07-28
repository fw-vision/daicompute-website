# daicompute-website

Public credibility website for **DAI Compute** (Distributed AI Compute):
daicompute.ca. A **Canadian sovereign InfraFi credit protocol** where
depositors earn yield from financing Canadian energy and compute
infrastructure, and builders borrow against the infrastructure they build.
Every position is backed by physical Canadian assets. Sovereignty is the
collateral and the moat.

Part of the FW.VISION group of ventures. Pre-launch and pre-regulatory; no
financial product is offered yet.

## For AI agents

**Read `AGENTS.md` first**, then `docs/brand/DESIGN.md`. Active build handoffs
are in `docs/design/`. Architecture decisions in `docs/adr/`.

## Stack

- **Astro 5.13** (static output) + **Tailwind 4** (via `@tailwindcss/vite`, CSS `@source` directives)
- **React island** (`@astrojs/react`) for the ForesightScope widget only; Vite pinned stable via `overrides`
- Consumes private GitHub Packages: `@fw-vision/web-kit`, `@fw-vision/widgets`

## Design

**Dark institutional** theme on a Canada-first palette: flag red
`#D52B1E` (sovereignty), energetic orange `#FF6A1A` (compute / action), power
yellow `#FFC21A` (energy) on a near-black `#0B0D0F` canvas. Space Grotesk +
IBM Plex Mono. Full spec: `docs/brand/DESIGN.md`.

## Pages

Invest (deposit for yield), Build (borrow to build), Protocol (CADS / sCADS /
CROWN), Sovereignty (the problem: US dependence + CLOUD Act), The Future
(50-year vision + live ForesightScope), About, Contact (mailto template, no
backend on static hosting).

## Develop

Requires the `GITHUB_TOKEN_FWVISION` env var (a classic PAT with `read:packages`)
for the private `@fw-vision/*` packages, read by `.npmrc`.

```sh
bun install
bunx astro build      # build (NOT npm run build)
bunx astro dev        # local dev (do not leave running in CI/agents)
```

## Content

- Brand and content direction are maintained separately; this repo is the implementation. Design reference: `docs/brand/DESIGN.md`.
- Gap map: `CONTENT-PLAN.md`.

## Deploy

GitHub Pages via `.github/workflows/deploy.yml` (bun-based). Private package
auth in CI uses Actions secret `FWVISION_PACKAGES_TOKEN` (classic PAT with
`read:packages`), mapped to `GITHUB_TOKEN_FWVISION` for `.npmrc`. Custom
domain in `public/CNAME` (daicompute.ca).
