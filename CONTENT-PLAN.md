# DAI Compute — Content Plan and Gap Map

> Status: rebuilt on the **USD.AI Sovereign InfraFi model** to ~80%. Dark
> institutional theme, Canada-first palette (flag red + energetic orange +
> power yellow). This file tracks every content, imagery, dataviz, and backend
> gap so the remaining 20% is plannable.
>
> Copy and data source: `04_Execute/DAICompute/` in the Perceptiosphere vault.
> Brand system: `04_Execute/DAICompute/brand/brand-guidelines/`.

---

## Model

DAI Compute is a **two-sided sovereign InfraFi credit protocol** (USD.AI model,
Canada-only, energy + compute): depositors earn yield from building Canadian
infrastructure; builders borrow against the infrastructure they build. Three
instruments: **CADS** (synthetic dollar), **sCADS** (staked yield), **CROWN**
(governance). Full design in `brand/brand-guidelines/tokenomics.md`.

## Site map (built)

| Page | Path | Status |
|------|------|--------|
| Home | `/` | Built. Hero + verified-national-stat row, gap framing, **GridDemo** (centralised vs distributed toggle), two-sided market, feature grid, token teaser, sovereignty teaser, CTA. |
| Invest | `/invest` | Built. Depositor side: CADS/sCADS, yield mechanics, proof-of-reserves, Northern Queue, pre-CSA note. |
| Build | `/build` | Built. Borrower side: non-recourse financing, node operator / energy co / developer, hybrid legal structure. |
| Protocol | `/protocol` | Built. Full instrument stack, flywheel, attestation layer, Northern Queue, governance, regulatory posture. |
| Sovereignty | `/sovereignty` | Built. Climate stakes, LIVE ForesightScope, multi-horizon phasing, co-location model. |
| About | `/about` | Built. Why-us, team grid, origin. |
| Contact | `/contact` | Built. Front-end form scaffold (no backend). |

## Design system

- **Reference class:** USD.AI (institutional-dark credit protocol). Pravah dropped as reference.
- **Palette:** Canada flag red `#D52B1E` (sovereignty), energetic orange `#FF6A1A` (primary action), power yellow `#FFC21A` (signal/energy), deep near-black `#0B0D0F` canvas. Energy gradient orange→yellow. Full spec: `brand/brand-guidelines/colours.md`.
- **Type:** Space Grotesk + IBM Plex Mono. `brand/brand-guidelines/typography.md`.
- **Tokens:** `src/styles/global.css`, overriding web-kit `--wk-accent` = orange.

---

## Remaining 20% (deferred)

### Dataviz / the demonstration animation (priority — Cursor handoff)
- **GridDemo (shipped, interim):** schematic SVG on the home page with a centralised/distributed toggle and animated energy-flow edges. This is the in-repo interim.
- **The full demonstration (Cursor handoff):** interactive geographic map of Canada, animated energy→compute flows, live node telemetry cards (Pravah idiom). Full brief in `brand/brand-guidelines/imagery-and-motion.md` Section 2 and 5. Hand to a visual-tooling model.
- **Proof-of-reserves dashboard** (`/invest`): placeholder; USD.AI "verified reserves" analog.
- **Two-sided market flywheel** (`/protocol`): placeholder.
- **On-chain/off-chain loan lifecycle** (`/build`): placeholder.
- **ForesightScope (LIVE):** `/sovereignty`, kept from prior build; genuine differentiator.

### Owned imagery
- Founder/team portrait, plus the topical set (northern energy + compute). Placeholder frames in place; older topical SVGs in `src/images/topical/` from the prior build may be re-briefed or replaced.

### Backend / integrations
- Contact form backend (`/contact` is a scaffold).
- `hello@daicompute.com` mailbox confirmation.

### Brand finalisation
- Logo/mark SVG production (spec in `brand/brand-guidelines/logo.md`); replace `public/favicon.svg` stand-in.
- Token-name validation (CADS/sCADS/CROWN pending CIPO + ticker check).
- Palette/type tuning after visual review (v0.1).

### Copy confirmations
- Team public attribution (stealth discipline).
- Whitepaper: outline complete (`artifacts/whitepaper/outline.md`); full draft is a separate session.

---

## Stealth + pre-CSA discipline (do not violate)

- **No live financial figures** (APR/TVL/deposits/users) on the public site until CSA clarity. Use verified national data instead. (voice-and-messaging.md Section 7.)
- **No "deposit now / launch app" CTA.** Use "register interest."
- No crypto-native language; yield always tied to its real source.
- Sensitive financing / China / partnership detail stays in `_journal/`, never web-facing.

## Deploy

- Workflow: `.github/workflows/deploy.yml` (bun-based; maps `GITHUB_TOKEN_FWVISION`; `packages: read`).
- Domain: `public/CNAME` = `daicompute.com`.
- Principal actions: push to `main`, enable Pages, DNS, owned imagery, contact backend, commission the geographic demonstration + logo.

## Build

- `bunx astro build` (NOT `npm run build`).
- Dev smoke: background `bunx astro dev`, sleep ~9s, capture, kill. Never leave running.
