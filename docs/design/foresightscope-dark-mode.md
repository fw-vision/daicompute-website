# Design Handoff - ForesightScope Dark-Mode Visualisation

> Build task. Make the `ForesightScope` widget look correct and legible on DAI Compute's dark canvas, in the two places it appears on the site. The proper fix is in the widget source (add a dark theme + fix centring); then wire both consumer instances and remove the CSS stopgap.
>
> **Repos needed:** this repo (`daicompute-website`, the consumer) AND `fw-vision-dataviz` (the `@fw-vision/widgets` source). Load both.

---

## The two instances (current state)

| # | Where | File | Current state |
|---|-------|------|---------------|
| 1 | **Home page** (preview) | `src/pages/index.astro` (the "long horizon" / future teaser section, right column) | A `<Placeholder kind="data">` labelled "ForesightScope preview: the sovereignty cone". **Not yet a live widget.** |
| 2 | **The Future page** (full) | `src/pages/future.astro` (the "Live ForesightScope" section) | The live `<ForesightScope client:only="react" data={sovereigntyForesightData} />`, wrapped in `.foresight-dark` with `aspect-[16/9] max-h-[520px]`. |

Naming note: the sovereignty *trajectory* (climate + ForesightScope + horizons) lives on `/future`. The `/sovereignty` page is the problem-first page and has no ForesightScope. Data for both instances: `src/data/foresight.ts` (`sovereigntyForesightData` - H1-H3 horizons, 6 scenarios, preferred + off-ramp trajectories).

---

## Problem 1 - Centring

### Symptom
On a tall container the cone sits high with large empty space below; it does not vertically centre.

### Root cause (from the compiled `foresightGeometry` + render code in `@fw-vision/widgets`)
```
chartTop      = LEGEND_HEIGHT + 2
chartH        = height - chartTop - bottomPad        // bottomPad = 22
labelReserve  = 20
topReserve    = 10
maxHalfHeight = max(24, min((chartH - labelReserve)/2 - topReserve, chartH * 0.36))
cy            = topReserve + maxHalfHeight            // <-- anchored near the top, NOT height/2
presentX      = width * 0.36                          // history left / futures right - keep
```
Because `cy = topReserve + maxHalfHeight` and `maxHalfHeight` is capped at `chartH * 0.36`, on a tall container the cone's centre stays in the top third and the lower area is dead space.

### Fix (in the widget)
- Set `cy = chartTop + chartH / 2` (true vertical centre of the chart region), and derive `maxHalfHeight` from the space around that centre: `maxHalfHeight = min(chartH/2 - topReserve - labelReserve, <cap>)`.
- Keep `chartH * 0.36` only as an upper cap so the cone doesn't get absurdly tall on short/wide containers; do not let it force the cone to the top.
- Verify axis labels ("Past"/"Futures") and horizon labels still clear the cone at the new `cy`.

---

## Problem 2 - Dark-background legibility

### Symptom
Rings, cone boundaries, scenario dots, and text are dark greys / near-black (light-theme defaults). On the near-black canvas (`#0B0D0F`) they are nearly invisible.

### Root cause
The component hardcodes light-theme colours as SVG `fill`/`stroke` **attributes** in JS (not CSS), so they can't be fully themed from outside. Observed values in the compiled bundle:
- **Text** (`fill`): `#71717a`, `#52525b`, `#525252`, `#737373`, `#171717`, `#262626`, `#475569`, `#64748b`
- **Ring / cone / boundary strokes**: `#94a3b8`, `#a1a1aa`, `#cbd5e1`, `#d4d4d8`, `#64748b`, `#475569`
- **White/near-white dot fills**: `#ffffff`, `#e8e8ea`, `#e0f2fe`
- Semantic accents (blue selection `#6366f1`/`#2563eb`, greens `#10b981`/`#16a34a`, ambers `#ca8a04`/`#b45309`, reds `#7f1d1d`) are meaningful - keep them.

### Fix (in the widget) - add a `theme` prop
Add **`theme: "light" | "dark"`** (default `"light"` so existing light consumers do NOT regress). When `theme="dark"`:
- Neutral text -> light neutral `#c4cbd2`.
- Neutral ring/cone/boundary strokes -> `#8a939c` at ~0.6-0.7 opacity.
- White/near-white dot fills -> `#f4f6f8` with a dark stroke for separation.
- Tooltip -> dark surface with light text (currently white).
- Keep semantic-accent hues; only lift lightness if one is unreadable on dark.
- Drive all neutrals from one small palette object keyed by `theme`, not scattered hex literals.

### Optional (nice-to-have)
- Let the preferred-trajectory polyline / present marker accept a brand accent so DAI Compute can pass orange `#FF6A1A` (preferred) and red `#D52B1E` (off-ramp/sovereignty). Keep FW.VISION defaults.
- A `compact` / `showLegend={false}` option would help the small home preview (see below).

---

## Steps

### Step 1 - Widget source (`fw-vision-dataviz`)
Implement both fixes above (centring + `theme="dark"`). Rebuild and republish `@fw-vision/widgets` (bump version). Do not regress the light consumers (`fw-vision-astro` `/tools`, `/storylines/[slug]`).

### Step 2 - Home: promote placeholder to a live preview (`index.astro`)
- Replace the `<Placeholder>` with `<ForesightScope client:only="react" theme="dark" data={sovereigntyForesightData} />`.
- Add imports: `import { ForesightScope } from "@fw-vision/widgets"; import "@fw-vision/widgets/style.css"; import { sovereigntyForesightData } from "@/data/foresight";`.
- Wrap sized as a compact preview (it sits in the `lg:grid-cols-[1.1fr_0.9fr]` right column), e.g. `class="foresight-dark border border-hairline bg-ink-2 aspect-[4/3]"`. Confirm it reads at the smaller size; use `showLegend={false}` / `compact` if labels crowd. The teaser's link to `/future` stays.

### Step 3 - Future: switch to the theme prop + remove the stopgap (`future.astro`, `global.css`)
- Change the live instance to `theme="dark"`.
- **Remove the `.foresight-dark` CSS stopgap** in `src/styles/global.css` (the `[fill="..."]` / `[stroke="..."]` attribute-override block). You may keep the `.foresight-dark` class as a plain container hook (bg/border) or drop it; just delete the colour-remap rules.
- With proper centring you can relax `aspect-[16/9] max-h-[520px]` if a taller frame looks better.

---

## Acceptance criteria

1. `@fw-vision/widgets` gains `theme="dark"`; light consumers unchanged (no regression).
2. **Home** shows a live, legible ForesightScope preview on dark (no more placeholder).
3. **Future** ForesightScope is centred and fully legible on dark (rings, cone, dots, trajectories, text, tooltip).
4. The `.foresight-dark` colour-remap stopgap is removed from `global.css`.
5. `daicompute-website` `bunx astro build` exits 0 (NOT `npm run build`). Dev smoke: background `bunx astro dev`, ~9s, capture, kill; never leave a server running.
6. `prefers-reduced-motion` honoured; both instances responsive (home preview legible at small size / mobile).

## Guardrails
- Build with `bunx astro build`; never leave a dev server running.
- Don't touch `.npmrc` / `.github/workflows/deploy.yml` / private-package auth.
- Palette from `docs/brand/DESIGN.md`: canvas `#0B0D0F`, text `#C4CBD2`/`#F4F6F8`, hairline `#8A939C`, orange `#FF6A1A`, yellow `#FFC21A`, flag red `#D52B1E`.
