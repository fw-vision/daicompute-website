---
title: "DAI Compute - Imagery, Iconography and Motion"
type: brand
subtype: imagery-motion
status: draft
created_date: 2026-07-26
tags: [dai-compute, brand, imagery, motion, animation, dataviz, grid-demonstration, cursor-handoff]
framework: CITE
band: brand
note: "Public-grade imagery/motion specification held privately. Includes the grid/compute demonstration animation brief for a visual-tooling handoff (Cursor). v0.1."
---

> MIRRORED from the Perceptiosphere vault (`04_Execute/DAICompute/brand/brand-guidelines/`), the source of truth. Copied into this repo so AI agents working here (Cursor) have the brand context without the vault. If this conflicts with the vault, the vault wins - flag it. Synced 2026-07-26.

# DAI Compute - Imagery, Iconography and Motion

> Visual-language and motion system, including the signature **demonstration animation** the Principal wants (inspired by Pravah's live grid visualisations) showing centralised vs. distributed Canadian compute. Where a genuine animated viz is out of scope for a given build session, this document is the authoritative brief for a Cursor / visual-tooling handoff.

---

## 1. Imagery Direction

| Element | Direction | Avoid |
|---------|-----------|-------|
| Photography | Canadian landscapes (northern, boreal, prairie, coast), solar arrays, batteries, server rooms/data halls, real communities and builders | Abstract "blockchain" 3D renders, glowing cubes, AI-generated faces, rocket ships, coins |
| Palette on imagery | Dark, cool, cinematic; warm accent (orange/yellow) as light source (sunrise, charge glow, server LEDs) | Neon/purple crypto grading |
| Treatment | High-contrast, slightly desaturated base with warm accent highlights; scrims for text legibility | Busy, low-contrast, sticker-like |
| Iconography | Line icons, 1.5-2px stroke, geometric, on the grid; energy/charge, node/network, shield/sovereignty, document/verify motifs | Filled cartoon icons, chain-link crypto clichés |

---

## 2. Signature Motif: The Grid / Compute Demonstration

**This is the brand's hero demonstration** and the direct response to the Pravah-style live grid visualisation the Principal admired. It shows the core thesis visually: how Canadian energy becomes distributed sovereign compute.

### 2.1 Concept

An interactive, animated map/diagram of Canada with two selectable states:

1. **Centralised** — one large node (the federal supercomputer model): all compute concentrated in one location; the rest of the map dark and unserved.
2. **Distributed (DAI Compute)** — many nodes light up coast to coast (homes, communities, energy sites); energy flows animate from generation (solar/hydro/SMR) into compute nodes; the network pulses with the orange->yellow energy gradient along its edges.

The contrast itself is the argument: centralised serves a few; distributed builds sovereign capacity everywhere people are (and will be, per the climate-migration thesis).

### 2.2 Data-driven states to visualise

- **Energy sources** feeding nodes (solar, hydro, wind, SMR) with per-province cost/advantage callouts (Quebec $0.05/kWh, cold-climate cooling).
- **Node activity** pulses (a node "computing" = a warm pulse; idle = dim).
- **Flows** along edges: energy in (yellow), compute demand out (orange).
- **Coverage** contrast: centralised (1 hot node) vs distributed (N nodes).
- Optional live-telemetry HUD callouts in the Pravah idiom: a small card ("Node QC-142: 4.2 kW solar, 82% compute utilisation") floating over the map, mono field-note styling.

### 2.3 Implementation options (best -> fallback)

1. **Best (Cursor handoff):** an interactive canvas/WebGL or D3-force map of Canada with animated flows, toggle between centralised/distributed, and floating telemetry cards. This is the level Cursor's visual models are better suited to build. **Recommend handing this off.**
2. **Middle (this-repo feasible):** a lighter D3/SVG or CSS-animated schematic (not a true geographic map): nodes on a grid, animated gradient flows along edges, a centralised/distributed toggle. Achievable with the existing `@fw-vision/widgets` + D3 stack.
3. **Fallback (always ship):** a labelled `<Placeholder kind="data">` frame in the wireframe idiom, whose caption encodes this full brief, so the layout is complete and the gap is plannable. Filename convention: `demo-grid-centralised-vs-distributed.*`.

### 2.4 Motion principles for the demonstration

- Flows animate continuously but calmly (no frantic motion); ease-in-out, 2-4s loops.
- Warm accents pulse; the canvas stays dark and stable.
- Respect `prefers-reduced-motion`: freeze to a representative static state.
- The energy gradient (orange->yellow) is the flow colour; sovereignty red marks the "Canadian border / jurisdiction" outline.

---

## 3. Other Dataviz (consistent family)

| Viz | Where | Build state |
|-----|-------|-------------|
| **ForesightScope** (50-year sovereignty trajectory) | Sovereignty page | LIVE (`@fw-vision/widgets`); keep. A genuine differentiator USD.AI lacks. |
| **Proof-of-reserves / asset-backing** schematic | Protocol page | Placeholder now; spec: show CADS backed by reserves + loan book; USD.AI's "verified reserves" analog |
| **Two-sided market flow** (deposit->loan->build->yield) | Home / How it works | Buildable as animated SVG or placeholder |
| **Burn/attestation flow** (energy + compute attestation feeding collateral) | Protocol page | Placeholder; from tokenomics.md Section 4 |
| **Node economics / break-even** chart | Borrow page | Placeholder; from strategy.md |

All share: dark canvas, mono labels, warm-accent signal, thin geometric lines, no shadows (depth from contrast).

---

## 4. Motion System (general)

| Element | Motion |
|---------|--------|
| Scroll reveals | Subtle fade + 8-12px rise, 300-400ms, ease-out |
| Nav | Transparent over hero -> solid on scroll (existing pattern) |
| Stat figures | Count-up on first view (respect reduced-motion) |
| CTA / interactive | 150-200ms colour/opacity transitions; card lift 2-3px on hover |
| Energy accents | Slow pulse (2-4s) on live/charge elements only |
| Global rule | Calm and institutional; motion serves comprehension, never decoration. `prefers-reduced-motion` fully honoured. |

---

## 5. Cursor Handoff Package (for the demonstration animation)

When handing the grid/compute demonstration to Cursor (or a designer), provide:

- This document (Section 2 in full).
- The palette (`colours.md`) and the energy gradient token.
- The data points to visualise (Section 2.2), sourced from `context/three-ws.md` and `indicators-strategy/strategy.md`.
- The target slot in the site (the home "demonstration band" and/or a dedicated section), where a placeholder currently sits with a matching filename.
- Constraint: must build with `bunx astro build` clean, render as a `client:only` island if React/WebGL, and honour reduced-motion.

---

## 6. Iteration Notes (v0.1)

- Decide whether the demonstration is geographic (map of Canada) or schematic (abstract node grid). Geographic is more evocative; schematic is faster to build in-repo. Recommend geographic for the Cursor handoff, schematic as the in-repo interim.
- Source or commission the photographic set (northern/energy/compute). Until then, topical placeholder SVGs stand in.
