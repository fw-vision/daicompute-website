# ADR 0003 - Dark institutional theme and Canada-first palette

- **Status:** Accepted
- **Date:** 2026-07-26

## Context

Following the two-sided sovereign InfraFi decision (ADR 0002), the visual language needed to read as a serious institutional credit protocol while being distinctly Canadian and distinct from the burgundy of the sibling FW.VISION and SyncID sites.

## Decision

Adopt a **dark-first institutional theme** on a Canada-first palette:

- **Canvas:** near-black `#0B0D0F` with layered panels (`#14171A`, `#1D2125`) and hairlines (`#2A2F35`).
- **Sovereign anchor:** Canada flag red `#D52B1E` (sovereignty, jurisdiction, the mark). Never used for error/danger.
- **Energy accents:** energetic orange `#FF6A1A` (primary action) and power yellow `#FFC21A` (signal/energy), with an orange->yellow energy gradient.
- **Colour language:** orange = compute, yellow = energy, red = sovereignty. Applied consistently across GridDemo and all dataviz.
- **Type:** Space Grotesk (display/UI/body) + IBM Plex Mono (data/labels/tickers).
- **web-kit binding:** `--wk-accent` = orange; the dark scheme is held regardless of OS `prefers-color-scheme`.

Full spec: `docs/brand/DESIGN.md`.

## Consequences

- Contrast comes from tonal depth (no shadows).
- The `@fw-vision/widgets` ForesightScope supports `theme="dark"` for dark-canvas consumers (default remains `"light"`).
- Warm accents are rationed (<10% of any viewport); the dark canvas carries the weight.
- Accessibility: flag red on dark passes only for large text/UI, not body copy.
