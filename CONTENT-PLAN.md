# DAI Compute — Content Plan and Gap Map

> Status: scaffold built to ~80%. This file tracks every content, imagery, and
> data gap so the remaining 20% is plannable rather than hidden. In-page
> `<Placeholder>` frames and the labelled SVGs in `src/images/topical/` make
> each gap visible; their filenames and notes encode the sourcing brief.
>
> Source of truth for copy and data: `04_Execute/DAICompute/` in the
> Perceptiosphere vault (brand, context, indicators-strategy, landscape).

---

## Site map (built)

| Page | Path | Status |
|------|------|--------|
| Home | `/` | Built. Hero, gap framing, three-step plan, dual-token spec, three faces, sovereignty teaser, CTA. |
| The Problem | `/problem` | Built. Verified-data credibility engine (TOP500, investment table, energy table, Budget 2024 quote). |
| How It Works | `/how-it-works` | Built. Mechanism, full dual-token spec, node economics, complement-not-compete table. |
| Participate | `/participate` | Built. Operator / investor / enterprise tracks + energy/financing partner note. |
| Sovereignty | `/sovereignty` | Built. Climate stakes, LIVE ForesightScope, multi-horizon phasing, co-location model. |
| About | `/about` | Built. Why-us, team grid, origin. Team names carried from the pitch; confirm public-facing detail. |
| Contact | `/contact` | Built. Front-end form scaffold (no backend yet). |

---

## Design system

- **Reference:** Pravah (engineering dossier on warm parchment; full-bleed dark
  inversions; wireframe grid; uppercase tracked field-note labels; single-family
  two-weight type; contrast through tonal inversion, not chroma).
- **Palette (own, distinct from SyncID / fw.vision burgundy):** warm parchment
  canvas `#f3efe6`, deep slate-teal inversion `#16211f`, sovereign spruce-green
  accent `#2f6f5b` (bright `#4a9d82` on dark). Supplied to web-kit via `--wk-accent`.
- **Type:** IBM Plex Sans (display + body) + IBM Plex Mono (field-note labels,
  data), two weights. Loaded from Google Fonts.
- **Tokens:** `src/styles/global.css`. Overrides web-kit `tokens.css` after import
  so the parchment scheme holds regardless of OS dark mode.

---

## Remaining 20% (deferred)

### Owned / generated imagery (9 slots)
All slots currently render labelled SVG placeholders in `src/images/topical/`
(filenames encode the brief) or in-page `<Placeholder>` frames. Overwrite in place.

| Slot | File / location | Brief |
|------|-----------------|-------|
| Hero backdrop | `hero-northern-energy-compute-settlement.svg` | Northern co-located energy + compute settlement; warm, sovereign. |
| Burn-Mint diagram | `home-burn-mint-equilibrium-diagram.svg` + home `<Placeholder>` | NRG/CMP mint-burn schematic, spec-sheet style, no crypto iconography. |
| Foresight cover | `home-foresight-cone-cover.svg` | Static cover render of the preferred trajectory. |
| Problem timeline | `problem-top500-timeline.svg` + problem `<Placeholder>` | 2000-2026 four-era timeline; data in `context/three-ws.md`. |
| Node economics chart | `howitworks-node-revenue-breakeven.svg` + how-it-works `<Placeholder>` | Revenue-minus-financing break-even; label illustrative. |
| Operator photo | `participate-home-node-operator.svg` | Home rooftop solar + compute node (persona Marc). |
| Investor photo | `participate-investor-verification.svg` | On-chain verification view (persona Priya). |
| Enterprise photo | `participate-enterprise-sovereign-compute.svg` | Sovereign-compute workload (persona Sarah). |
| Team portrait | `about-founder-team-portrait.svg` | Grounded founder/team portrait. |

### Data / dataviz
- **ForesightScope (LIVE):** `/sovereignty` renders the real widget from
  `@fw-vision/widgets` using `src/data/foresight.ts`. Refine the sovereignty
  trajectory data as the model matures (currently 6 scenarios across H1-H3 with
  preferred + off-ramp polylines).
- **Burn-Mint Equilibrium diagram:** could graduate from placeholder to a real
  D3/SVG schematic or a BusinessCanvasMap-style widget.
- **Node economics chart:** static chart from `indicators-strategy/strategy.md`.

### Backend / integrations
- **Contact form backend:** `/contact` form is a front-end scaffold. Wire to a
  form handler (email, serverless function, or a hosted form service) before launch.
- **Real email:** `hello@daicompute.com` referenced; confirm the mailbox exists.

### Copy confirmations
- **Team page:** names and one-line roles carried from the internal pitch. Confirm
  which team members want public attribution before launch (stealth discipline).
- **Trademark review:** confirm whether any DAI Compute terms enter the FCWANG
  trademark registry (currently none marked).

---

## Stealth discipline (do not violate)

- Never surface sensitive financing detail, the Canada-China dual-campus
  dimension, or non-public partnership specifics on the website. Those live in
  `04_Execute/DAICompute/_journal/` only.
- Follow `04_Execute/DAICompute/brand/voice.md`: no crypto-native language; always
  asset-backed, burned-on-use, complement-not-compete; lead with the problem.
- Use only verified statistics; hedge or omit anything unverified.

---

## Deploy

- **Workflow:** `.github/workflows/deploy.yml` (bun-based; maps
  `GITHUB_TOKEN_FWVISION` to the Actions token for private-package install;
  `permissions: packages: read`).
- **Domain:** `public/CNAME` = `daicompute.com`.
- **Principal actions required:** push to `main`, enable GitHub Pages (source:
  GitHub Actions), configure DNS for `daicompute.com`, add owned imagery, wire
  the contact backend.

---

## Build and smoke test

- Build: `bunx astro build` (NOT `npm run build`; the npm shim is broken under
  the bun install layout).
- Dev smoke: start `bunx astro dev` in a background job, wait ~9s, capture output,
  kill it. Never leave a dev server running (it blocks the session).
