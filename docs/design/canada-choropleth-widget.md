---
title: "Cursor Handoff - Canada Sovereign Energy and Compute Choropleth Widget"
type: plan
subtype: cursor-handoff
status: ready
created_date: 2026-07-27
tags: [dai-compute, cursor-handoff, choropleth, canada-map, dataviz, sovereign-compute, energy, data-centres, d3-geo]
owner: DAICompute
repo: "~/work/FW.VISION/daicompute-website"
data_report: "docs/design/canada-energy-compute-data-report.md"
---

# Cursor Handoff - Canada Sovereign Energy and Compute Choropleth Widget

> Task for Cursor (better visual-processing models). Build the DAI Compute home-page hero visual: an interactive **choropleth map of Canada** showing, by province/territory, energy generation and cost, renewable/solar clusters, and **data-centre locations flagged by ownership (Canadian-sovereign vs US-owned)**. This replaces the schematic `GridDemo` on the home page once delivered. A raw data report has already been gathered by the vault research agent; **your job is to verify and extend that data, then build the widget.**

---

## 1. Why this matters

The single most powerful argument DAI Compute makes is visual: Canada has the energy, but the compute sitting on it is foreign-owned. A choropleth that shows cheap Canadian renewable energy in one layer and US-owned data centres clustered on top of it (Montreal, Toronto) makes the sovereignty gap undeniable at a glance. This is the home-page hero.

---

## 2. Inputs already prepared

| Input | Path | What it is |
|-------|------|-----------|
| **Raw data report** | `docs/design/canada-energy-compute-data-report.md` (this repo) | Per-province electricity profiles, major utilities + ownership, renewable/solar clusters (with coords), 35+ data centres flagged by ownership (with coords), a sovereign-vs-US synthesis, and a **Section 6 "Suggested Map Encodings"** that maps directly to this build. Every figure is graded V/R/E/U. |
| Palette + type | `docs/brand/DESIGN.md` | Canada flag red `#D52B1E`, orange `#FF6A1A`, power yellow `#FFC21A`, near-black `#0B0D0F`; Space Grotesk + IBM Plex Mono |
| Motion + demonstration brief | `docs/brand/imagery-and-motion.md` §2 | The demonstration concept, motion principles, reduced-motion rule |
| Current home slot | `~/work/FW.VISION/daicompute-website/src/pages/index.astro` | The "demonstration" section currently renders `<GridDemo />`; replace it (or add a toggle to switch between schematic and map) |

**Read the data report first.** Its Section 6 already recommends choropleth fills, marker encodings, and interactions. Use it as the spec; this document adds the build mechanics and the data-honesty rules.

---

## 3. Research to do BEFORE building (verify + extend)

The report is graded: ~15% verified, ~60% reported, ~20% estimate, ~5% unknown. Before building, verify and fill the gaps that most affect the visual's credibility:

1. **Data-centre locations + ownership (highest priority).** The report catalogued 35+ but notes DataCenterMap lists ~291 total in Canada. Extend toward a more complete set of *significant* facilities. For each: city, province, lat/long, operator, **ownership flag (US-owned hyperscaler / US-owned multi-tenant / Canadian commercial / Canadian gov-academic / other-international)**, approximate scale. Confirm the big ones: AWS ca-central-1 (Montreal), Azure Canada Central (Toronto) + Canada East (Quebec City), GCP northamerica-northeast1 (Montreal) + northamerica-northeast2 (Toronto).
2. **Renewable / solar clusters.** Verify the solar corridors (Travers Solar AB 465MW, southern AB/SK corridor, Ontario FIT-era, etc.) and their coordinates/scale.
3. **Per-province electricity cost + renewable %.** Verify current ($/kWh) figures against provincial utility rate schedules and CER; the report flags most costs as estimates.
4. **Major electrical providers.** Confirm ownership (Crown corp vs investor-owned vs deregulated) and generation mix per the report's utility table.

Sources to prefer: Statistics Canada, Canada Energy Regulator (CER), NRCan, provincial utility sites, IESO/AESO, operator press releases, DataCenterMap or equivalent trackers. Keep the V/R/E/U grading discipline.

---

## 4. Data-honesty constraint (non-negotiable)

DAI Compute publishes verified data only (see `docs/brand/voice-and-messaging.md` §7). Therefore:

- **Province fill** must encode a **verifiable** metric (electricity cost, renewable %, or grid market structure). These are defensible.
- **Data-centre ownership** is shown as **point markers**, not as province shading, because exact per-province ownership *shares/counts* are not publicly aggregated (the report flags this as a key gap). Markers are individual, sourced facilities. Do **not** shade a province "X% US-owned" unless you have a verified source for that number.
- Any figure that remains an estimate must be visually distinguishable (e.g. a dashed marker outline or an "est." tag in the tooltip) or omitted. Prefer flagging over inventing.
- Include a small "sources + as-of date" affordance (link or expandable) so claims are traceable.

---

## 5. Build spec

### Stack
- Framework: **Astro 5** island, React (`client:only="react"`) or a self-contained D3 mount, consistent with the existing `ForesightScope` island pattern in the repo.
- Geo: **`d3-geo`** (already available via `d3@7.9.0`). **Add `topojson-client`** (not currently installed) to parse boundaries.
- **Boundary asset:** a Canada provinces/territories TopoJSON. Source options (verify licence): Statistics Canada cartographic boundary files (open licence), or a simplified `canada.topojson` from a reputable open repo. Store under `src/data/geo/` and simplify (mapshaper) for web weight. Use a Canada-appropriate projection (e.g. `geoConicConformal` tuned to Canada, or `geoAzimuthalEqualArea`), not `geoMercator`.
- Palette: dark canvas `#0B0D0F`; choropleth ramp should read on dark. For "energy advantage" a green->warm ramp works, but ensure it does not clash with the brand warm accents used for markers. Consider a cool green/teal ramp for provinces so the warm (orange/yellow) and red markers pop on top.

### Layers
1. **Base choropleth:** provinces shaded by a selectable verified metric (default: renewable % or industrial $/kWh). Follow report Section 6 for the value bands.
2. **Data-centre markers:** points coloured by ownership (report Section 6 palette: US hyperscaler / US multi-tenant / Canadian commercial / Canadian gov-academic / other), sized by scale tier. The sovereignty story is carried here.
3. **Renewable/solar cluster markers (optional layer):** distinct glyph for major generation clusters.
4. **Sovereign jurisdiction frame:** a subtle flag-red outline of the national border (echoes the schematic's "Canadian jurisdiction" frame).

### Interaction
- Hover province -> mono HUD card (Pravah idiom) with its energy stats + source/as-of.
- Layer toggle: energy cost vs renewable % vs grid structure (report offers all three).
- Ownership filter for markers (show only US-owned, only Canadian, or all) - this is the killer interaction: filter to "US-owned" and watch the map light up over Montreal/Toronto.
- Optional auto-cycle or animated intro consistent with the GridDemo (energy pulses), honouring `prefers-reduced-motion`.
- Legend for both the choropleth ramp and the marker ownership categories.

### Motion
Per `imagery-and-motion.md` §2.4: calm continuous flows (2-4s), warm-accent pulses on markers, dark stable canvas, `prefers-reduced-motion` freezes to a representative static state. Energy gradient orange->yellow for any flow lines.

---

## 6. Integration

- Component location: `~/work/FW.VISION/daicompute-website/src/components/` (e.g. `CanadaComputeMap.tsx` + a thin `.astro` wrapper, or a single island).
- Home page: replace `<GridDemo />` in the "demonstration" section of `src/pages/index.astro`. Keep `GridDemo` in the repo (it can move to `/sovereignty` or `/future` as a secondary schematic, or be retired - Principal's call).
- Update the section copy: the current caption points to "the choropleth map of Canada ... see the handoff plan"; replace with a real description once built.
- Data module: put the verified dataset in `src/data/` as typed JSON/TS (provinces + data centres + clusters), each record carrying a `confidence` field (V/R/E) and a `source` field.

---

## 7. Acceptance criteria

1. `bunx astro build` exits 0 (NOT `npm run build`; bun install layout). Dev smoke: background `bunx astro dev`, ~9s, capture, kill; never leave a server running.
2. Renders correctly on the dark canvas; choropleth + markers + legend all legible.
3. Province fill uses only verified metrics; data-centre ownership shown as sourced markers, not invented province shares; estimates visually flagged.
4. Ownership filter and layer toggle work; hover HUD shows values + source.
5. `prefers-reduced-motion` honoured; responsive down to mobile (map legible or gracefully simplified).
6. Sources traceable (as-of date + citations).
7. Private-package + deploy setup untouched (`.npmrc`, `deploy.yml`); if `topojson-client` is added, it installs cleanly under bun and in CI.

---

## 8. Notes / open decisions for the Principal

- **Default choropleth metric:** renewable % tells the "clean energy" story; industrial $/kWh tells the "cheap energy" story. Recommend renewable % as default with a toggle to cost. (Principal to confirm.)
- **Does the map replace GridDemo entirely, or coexist** (e.g. schematic on `/future`, map on home)? Recommend map on home, schematic retired or moved.
- **Boundary detail vs weight:** simplify aggressively; the home hero does not need county-level detail.
- This widget could later become a shared `@fw-vision/widgets` component if other constellation sites need a Canada map; for now build it in the consumer repo.
