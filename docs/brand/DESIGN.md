# DAI Compute - Design Spec (START HERE)

> The single design reference for this repo: palette, type, colour language, components, and motion. Read this before any UI work. This is the source of truth for implementation; content and messaging are maintained separately.

---

## 1. Design posture

Institutional-dark, precise, engineered. A credibility site for a Canadian sovereign infrastructure-finance protocol. Not consumer crypto, not startup-hype. Dark-first.

---

## 2. Palette (exact values)

Defined in `src/styles/global.css` under `@theme` and `:root`.

### Sovereign (red)
| Token | Name | HEX | Role |
|-------|------|-----|------|
| `--color-flag-red` | Canada Flag Red | `#D52B1E` | Sovereignty, jurisdiction, capital, the mark, key emphasis. **Not** error/danger. |
| `--color-flag-red-deep` | Deep Sovereign | `#A81E14` | Hover/pressed on red |

### Energy (warm accents)
| Token | Name | HEX | Role |
|-------|------|-----|------|
| `--color-orange` | Energetic Orange | `#FF6A1A` | **Primary action / CTA / compute** (see colour language). The workhorse accent. Bound to `--wk-accent`. |
| `--color-orange-bright` | Bright Orange | `#FF8340` | Hover on orange |
| `--color-yellow` | Power Yellow | `#FFC21A` | **Energy / signal / live data.** Used sparingly. |
| `--color-yellow-soft` | Soft Power | `#FFE08A` | Energy highlight backgrounds |

### Institutional neutrals (dark-first)
| Token | HEX | Role |
|-------|-----|------|
| `--color-ink` | `#0B0D0F` | Primary dark canvas (site default) |
| `--color-ink-2` | `#14171A` | Raised panels / cards |
| `--color-ink-3` | `#1D2125` | Elevated cards, inputs |
| `--color-hairline` | `#2A2F35` | Borders / dividers |
| `--color-slate` | `#8A939C` | Secondary text |
| `--color-mist` | `#C4CBD2` | Body text on dark |
| `--color-snow` | `#F4F6F8` | Primary text on dark; light surfaces |

Energy gradient: `--grad-energy` = orange -> yellow (`#FF6A1A` -> `#FFC21A`). Low-opacity as a wash; full saturation only for small signal elements.

`--wk-accent: #FF6A1A` binds the `@fw-vision/web-kit` accent. The `.foresight-dark` block in `global.css` is a **temporary stopgap** remapping the ForesightScope widget's light-theme greys for the dark canvas; it is removed once the widget gains a real dark theme (see `docs/plans/foresightscope-dark-mode.md`, local/gitignored).

---

## 3. Colour language (the diagram convention)

Consistent across the GridDemo and all dataviz:

- **Orange `#FF6A1A` = compute** (compute resources, node mesh, compute flows).
- **Yellow `#FFC21A` = energy** (solar / hydro / BESS sources, energy flows).
- **Flag red `#D52B1E` = sovereignty / capital / Canadian jurisdiction** (the border frame; capital/depositor flows in the two-sided-market viz).

Rules: red is sovereignty/capital, never "error". Yellow is signal, used sparingly (never large fills). On any viewport, warm accents cover well under 10% of the surface; the dark canvas and neutrals carry the weight.

Accessibility: snow/mist on ink pass AAA; orange on ink ~5.9:1 (AA text, AAA large/UI); yellow on ink ~11:1 (AAA); flag red on ink ~3.4:1 (large/UI only, NOT body text - use red on a light surface for body).

---

## 4. Typography

- **Display + UI + body:** Space Grotesk (400/500/600/700). Geometric-grotesque, technical.
- **Data + labels + tickers:** IBM Plex Mono (400/500). Tabular figures for financial tables; tickers (CADS / sCADS / CROWN) always mono uppercase.
- Loaded from Google Fonts in `Main.astro`. Tokens: `--font-display`, `--font-sans`, `--font-mono`.

Scale highlights: hero `display` ~4.5rem tight tracking; `field-label` = 0.7rem mono UPPERCASE tracked 0.2em (the signature eyebrow); `stat` figures large in a warm accent. Do not letterspace body copy.

Utility classes in `global.css`: `.field-label` (mono uppercase eyebrow), `.field-note` (mono small), `.ticker`, `.text-energy` (gradient text), `.btn-primary` / `.btn-ghost`.

---

## 5. Components (inventory)

| Component | Role |
|-----------|------|
| `Wordmark.astro` | "DAI" (orange) + "Compute". `variant="nav"` / `"display"`. |
| `GridDemo.astro` | Signature demonstration: auto-cycling (5s) centralised vs distributed compute topology, animated energy/compute flows, telemetry HUD, contrast metric strip. Self-contained SVG + inline JS. **The reference idiom for new dataviz.** |
| `TokenCard.astro` | CADS / sCADS / CROWN spec cards (`accent="orange"|"yellow"|"red"`). |
| `StatCounter.astro` | Verified-data stat rows (national statistics; not live protocol metrics pre-launch). |
| `FeatureCard.astro` | Kicker + title + body + CTA card. |
| `StepCard.astro` | Numbered plan step. |
| `PageHeader.astro` | Interior page header (field-label eyebrow + display title + lede) with grid wash + hero glow. |
| `Placeholder.astro` | Labelled gap frame; `note` encodes the sourcing/build brief. Intentional. |

Surfaces: dark canvas, `border-hairline` panels on `bg-ink-2`, `tech-grid` wash, `hero-glow` (energy radial). No shadows; depth from contrast. `card-lift` on hover.

---

## 6. Motion

- Calm, institutional. Scroll reveals subtle; CTA transitions 150-200ms; energy accents slow-pulse (2-4s) on live/charge elements only.
- GridDemo auto-cycles with a cross-fade and a timer bar; flowing dashes on energy/compute paths.
- **Always honour `prefers-reduced-motion`:** freeze animations to a representative static state.

---

## 7. Content rules that affect design

- **Pre-launch:** no live APR/TVL/deposit/user figures; no "deposit now / launch app" button. Use "register interest". Use verified national statistics; flag or omit estimates.
- **No crypto-hype language** (moon, DeFi as self-label, yield farming, WAGMI, HODL, degen, guaranteed returns). Yield is always tied to its real source.
- Contact has no backend (static hosting): illustrative disabled template + `mailto:hello@daicompute.ca`.
- Tickers (CADS / sCADS / CROWN / sCROWN) are mono, uppercase.
- Canadian spelling; no em-dashes (restructure the sentence).
