# DAI Compute - Content Plan and Gap Map

> Tracks what is built vs deferred, so the remaining work is plannable. Dark
> institutional theme, Canada-first palette (flag red + energetic orange +
> power yellow). Brand and content direction are maintained separately; this
> repo is the implementation.

---

## Model

DAI Compute is a **two-sided sovereign InfraFi credit protocol** (Canada, energy
+ compute): depositors earn yield from financing Canadian infrastructure;
builders borrow against the infrastructure they build. Three instruments:
**CADS** (synthetic dollar), **sCADS** (staked yield), **CROWN** (governance).

## Site map (built)

| Page | Path | Status |
|------|------|--------|
| Home | `/` | Built. Hero + verified-stat row, gap framing, **GridDemo** (auto-cycling centralised vs distributed), two-sided market, feature grid, token teaser, future teaser, CTA. |
| Invest | `/invest` | Built. Depositor side: CADS/sCADS, yield mechanics, proof-of-reserves, Northern Queue. |
| Build | `/build` | Built. Borrower side: non-recourse financing, who borrows, hybrid legal structure. |
| Protocol | `/protocol` | Built. Instrument stack, two-sided-market section, attestation layer, Northern Queue, governance. |
| Sovereignty | `/sovereignty` | Built. Problem-first: dependence on foreign-owned infrastructure, the compute gap, the energy paradox. |
| The Future | `/future` | Built. Long-horizon vision: climate stakes, LIVE ForesightScope, multi-horizon phasing, co-location. |
| About | `/about` | Built. Founders, why-us, origin. |
| Contact | `/contact` | Built. Illustrative template + mailto to hello@daicompute.ca (no backend on static hosting). |

## Design system

- **Palette:** Canada flag red `#D52B1E` (sovereignty/capital), energetic orange `#FF6A1A` (compute/action), power yellow `#FFC21A` (energy/signal), near-black `#0B0D0F` canvas. Energy gradient orange->yellow. Full spec: `docs/brand/DESIGN.md`.
- **Type:** Space Grotesk + IBM Plex Mono.
- **Tokens:** `src/styles/global.css`, `--wk-accent` = orange.

---

## Remaining work (deferred)

### Dataviz (see docs/plans/, local build specs)
- **GridDemo (shipped):** auto-cycling schematic on the home page (centralised vs distributed, animated energy/compute flows, telemetry HUD, contrast strip).
- **Canada choropleth (planned):** interactive map of Canadian energy + data-centre assets (sovereign vs foreign-owned), to become the home hero. Uses `docs/data/canada-energy-compute.md`.
- **ForesightScope dark-mode:** shipped. Home preview + `/future` use `theme="dark"`; the CSS stopgap is removed.
- **Two-sided-market flywheel (planned):** replace the `/protocol` placeholder with an animated flywheel in the GridDemo idiom.
- **Proof-of-reserves** (`/invest`) and **on-chain/off-chain loan lifecycle** (`/build`): placeholders.

### Owned imagery
- Founder portrait + topical set (northern energy + compute). Placeholder frames in place.

### Backend / integrations
- Contact uses a `mailto:hello@daicompute.ca` template (GitHub Pages is static, no server-side form). A real submission pipeline, if wanted later, should be first-party rather than a third-party processor.
- Confirm the `hello@daicompute.ca` mailbox exists.

### Brand finalisation
- Logo/mark SVG production; replace the `public/favicon.svg` stand-in.
- Token-name validation (CADS/sCADS/CROWN pending trademark + ticker check).
- Palette/type tuning after visual review.

---

## Pre-launch discipline (do not violate)

- **No live financial figures** (APR/TVL/deposits/users) on the site until regulatory clarity. Use verified national data instead.
- **No "deposit now / launch app" CTA.** Use "register interest".
- No crypto-hype language; yield always tied to its real source.

## Deploy

- Workflow: `.github/workflows/deploy.yml` (bun-based; maps `GITHUB_TOKEN_FWVISION`; `packages: read`).
- Domain: `public/CNAME` = `daicompute.ca`.
- Owner actions: push to `main`, enable Pages, DNS, owned imagery, logo, and the planned visualisations.

## Build

- `bunx astro build` (NOT `npm run build`).
- Dev smoke: background `bunx astro dev`, sleep ~9s, capture, kill. Never leave running.
