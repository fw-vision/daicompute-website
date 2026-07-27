# daicompute-website - Agent Context

> Read by AI coding agents (Cursor, opencode, etc.) on every session. START HERE. Keep concise and current.

## What this project is

The public credibility website for **DAI Compute** (Distributed AI Compute), a **Canadian sovereign InfraFi credit protocol**: a two-sided market where depositors earn yield from financing Canadian energy + compute infrastructure, and builders borrow against the infrastructure they build. Every position is backed by physical Canadian assets. Modelled on USD.AI, localised to Canada, where **sovereignty is the collateral and the moat**.

- **Domain:** daicompute.ca (Canada-sovereign; daicompute.com is reserved for a much later global expansion - use `.ca` everywhere).
- **Posture:** stealth, **pre-launch, pre-regulatory** (pursuing CSA Sandbox). No token issued, no financial product offered yet.
- Part of the FW.VISION constellation. Anchor product for the Markham innovation-district play.

## Read next (in this repo)

| Doc | Purpose |
|-----|---------|
| `docs/brand/DESIGN.md` | **The design spec.** Palette, type, colour language, components, motion. Read before any UI work. |
| `docs/brand/voice-and-messaging.md` | Voice, messaging, and the **pre-CSA content rules** (no live financial figures). |
| `docs/brand/tokenomics.md` | The CADS / sCADS / CROWN instrument stack and two-sided market. |
| `docs/adr/` | Architecture decisions already made (do not re-litigate). |
| `docs/design/` | **Active build handoffs** (ForesightScope dark mode, Canada choropleth) + the raw data report. |
| `CONTENT-PLAN.md` | Gap map: what is built vs deferred. |

Source of truth for brand + content is the Perceptiosphere vault (`04_Execute/DAICompute/`), which agents working only in this repo will not have. The `docs/brand/` copies here carry the vault content; if they conflict with the vault, the vault wins - flag it.

## Verification (critical)

- **Build:** `bunx astro build` (terminates; exit 0 = compiles). **NOT `npm run build`** - the npm shim is broken under the bun install layout.
- **Install:** `bun install` (requires env var `GITHUB_TOKEN_FWVISION`, a classic PAT with `read:packages`, for the private `@fw-vision/*` packages; read by `.npmrc`).
- **Dev smoke only:** start `bunx astro dev` in a background job, wait ~9s, capture output, kill it. **NEVER leave a dev server running** - it blocks the session.
- A successful build is sufficient proof code compiles. Visual verification is manual (the human checks).

## Tech stack

| Concern | Choice |
|---------|--------|
| Framework | Astro 5.13 (static output) |
| Styling | Tailwind 4 via `@tailwindcss/vite` (CSS `@source` directives, no JS config) |
| Islands | `@astrojs/react` - React only for the ForesightScope widget island |
| Vite | Pinned stable via `package.json` `overrides: { "vite": "npm:vite@^7.1.5" }` (avoids Astro-6 rolldown breakage) |
| Private packages | `@fw-vision/web-kit` (tokens, structural), `@fw-vision/widgets@0.2.0` (D3 dataviz incl. ForesightScope), from GitHub Packages org `fw-vision` |
| Hosting | GitHub Pages (static; no server) via `.github/workflows/deploy.yml` (bun-based) |
| Package manager | bun |

## Directory map

```
src/
  layouts/Main.astro          Nav (Invest/Build/Protocol/Sovereignty/The Future/About) + footer + scroll-aware header
  pages/
    index.astro               Home: hero, verified-stat row, gap framing, GridDemo, two-sided market, feature grid, token teaser, future teaser, CTA
    invest.astro              Depositor side: CADS/sCADS, yield, proof-of-reserves, Northern Queue
    build.astro               Borrower side: non-recourse financing, who borrows, hybrid legal structure
    protocol.astro            Full instrument stack, flywheel, attestation layer, Northern Queue, governance
    sovereignty.astro         PROBLEM-FIRST page: US dependence + CLOUD Act + compute gap + energy paradox
    future.astro              The 50-year vision: climate stakes + LIVE ForesightScope + horizons + co-location
    about.astro               Founders (Francis Wang, William Yao), why-us, origin (US-dependence framing)
    contact.astro             Illustrative template + mailto:hello@daicompute.ca (no backend on static hosting)
  components/
    Wordmark.astro            "DAI" (orange) + "Compute"
    GridDemo.astro            Signature demonstration: auto-cycling centralised vs distributed topology (SVG + inline JS)
    TokenCard.astro           CADS/sCADS/CROWN spec cards
    StatCounter.astro         Verified-data stat rows (NOT live protocol metrics - pre-CSA)
    FeatureCard, StepCard, PageHeader, Placeholder
  data/
    foresight.ts              sovereigntyForesightData: the 50-year trajectory for ForesightScope (H1-H3, 6 scenarios, preferred + off-ramp)
  styles/global.css           Design tokens (@theme), palette, colour language, GridDemo animations, .foresight-dark stopgap
public/
  CNAME (daicompute.ca), robots.txt, favicon.svg
docs/                         brand/, adr/, design/ (see "Read next")
```

## Colour language (important)

The GridDemo and dataviz use a consistent colour language:
- **Orange `#FF6A1A` = compute.** Yellow `#FFC21A` = energy. Flag red `#D52B1E` = sovereignty / jurisdiction.
- Near-black `#0B0D0F` canvas, `#C4CBD2` / `#F4F6F8` text, `#8A939C` hairline/secondary.
- Ration the warm accents; the dark canvas carries the weight.

## Working guidelines

1. **Dark-first.** The marketing site is dark institutional; do not introduce light backgrounds without reason.
2. **Verified data only, pre-CSA.** Do NOT publish live APR/TVL/deposit/user figures or a "deposit now / launch app" CTA. Use verified national statistics; "register interest" not "deposit". See `docs/brand/voice-and-messaging.md`.
3. **No crypto-hype language.** Never: moon, DeFi (as self-label), yield farming, WAGMI, HODL, degen, guaranteed returns. Yield is always tied to its real source.
4. **Tickers** (CADS, sCADS, CROWN, sCROWN) are mono, uppercase.
5. **Astro islands pattern** - JS only where needed; the ForesightScope is `client:only="react"`.
6. **Do not touch** `.npmrc`, `.github/workflows/deploy.yml`, or private-package auth without reason.
7. **Placeholders are intentional** - `<Placeholder>` frames mark planned gaps; their notes encode the sourcing/build brief.

## Current active work (see docs/design/)

- **ForesightScope dark mode** (`docs/design/foresightscope-dark-mode.md`): the widget renders light-theme greys that vanish on dark, and its cone does not centre. Fix at source in `fw-vision-dataviz` (add `theme="dark"`), then wire both consumer instances (home preview + `/future`) and remove the `.foresight-dark` CSS stopgap.
- **Canada choropleth** (`docs/design/canada-choropleth-widget.md` + `canada-energy-compute-data-report.md`): build the hero map of Canadian energy + data-centre assets, sovereign vs US-owned, to replace GridDemo on the home page.
