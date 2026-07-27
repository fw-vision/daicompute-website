---
title: "DAI Compute - Logo and Mark"
type: brand
subtype: logo
status: draft
created_date: 2026-07-26
tags: [dai-compute, brand, logo, wordmark, mark, identity]
framework: CITE
band: brand
note: "Public-grade logo specification held privately. Marks to be produced as SVG assets; this document is the spec brief. v0.1."
---

> MIRRORED from the Perceptiosphere vault (`04_Execute/DAICompute/brand/brand-guidelines/`), the source of truth. Copied into this repo so AI agents working here (Cursor) have the brand context without the vault. If this conflicts with the vault, the vault wins - flag it. Synced 2026-07-26.

# DAI Compute - Logo and Mark

> The identity brief. No final SVG assets exist yet; this specifies what to produce (a task for a visual-tooling handoff, e.g. Cursor or a designer). Modelled on USD.AI's dual-lockup system (a full wordmark lockup + a compact circular mark), retuned to Canadian sovereign compute.

---

## 1. Naming and Lockup

- **Full name:** DAI Compute (Distributed AI Compute)
- **Wordmark:** `DAI` set in the accent, `Compute` in the neutral ink/snow. `DAI` is the distinctive element; `Compute` grounds the function.
- **Ticker family (mono):** CADS, sCADS, CROWN, sCROWN (see tokenomics.md)

Two primary lockups, mirroring USD.AI's system:

1. **Full lockup** (horizontal wordmark, optionally with mark to the left) for headers, documents, decks.
2. **Circular mark** (compact, monogram-based) for favicons, avatars, app icons, footer, watermarks.

---

## 2. The Mark Concept

The mark should fuse three ideas in a single geometric glyph:

- **Sovereignty / Canada:** an abstracted maple motif OR a northern/polar geometry (an eleven-point star nods to the flag's maple leaf points; a compass-north form nods to "Northern"). Avoid a literal detailed maple leaf (overused, hard to reduce).
- **Energy:** a charge/bolt or radial-flow element, carried in the orange->yellow energy gradient.
- **Compute / network:** a node-and-edge or grid geometry (distributed nodes), tying to the demonstration motif.

**Recommended direction (to test):** a circular mark containing an abstract **"D" formed from distributed nodes and edges** (compute), with a single sovereign-red spark/leaf-point at the top (sovereignty), and the energy gradient on the connecting edges. Reduces cleanly to a favicon; reads at 16px as a distinct glyph.

The current favicon (`daicompute-website/public/favicon.svg`) is a stand-in wireframe "D" and should be replaced with the finalised mark.

---

## 3. Clear Space and Minimum Size

| Rule | Spec |
|------|------|
| Clear space | Minimum padding around the lockup = the cap-height of "D" in the wordmark, on all sides |
| Minimum size (full lockup) | 120px wide (screen); 25mm (print) |
| Minimum size (circular mark) | 24px (screen); 8mm (print). Favicon variant simplified for 16px. |

---

## 4. Colour Variants

| Variant | Use |
|---------|-----|
| Primary (on dark) | `DAI` in orange `#FF6A1A`, `Compute` in snow `#F4F6F8`, on ink `#0B0D0F` |
| Reversed (on light) | `DAI` in orange, `Compute` in ink `#0B0D0F`, on snow |
| Sovereign | `DAI` in flag red `#D52B1E` for sovereignty-forward contexts (gov, policy decks) |
| Monochrome snow | All snow, for photographic/dark overlays |
| Monochrome ink | All ink, for light single-colour print |

The mark's energy gradient (orange->yellow) is allowed on the circular mark; the wordmark stays single-colour per element.

---

## 5. Misuse (do not)

- Do not place the wordmark on a busy photo without a scrim.
- Do not recolour `DAI` to yellow (reserve yellow for signal/data, not the mark).
- Do not use flag red as a large fill behind the wordmark (red is rationed).
- Do not stretch, skew, add shadows/bevels, or outline the wordmark.
- Do not use a literal detailed maple leaf as the mark.
- Do not letterspace the wordmark.

---

## 6. Production Brief (handoff)

Deliver as SVG (and PNG exports):

- [ ] Full lockup: primary, reversed, sovereign, mono-snow, mono-ink
- [ ] Circular mark: gradient, mono-snow, mono-ink
- [ ] Favicon (16/32px optimised) + app icons (192/512px)
- [ ] Clear-space and min-size diagram
- [ ] Social avatar (circular mark on ink) and OG image template

Store finalised assets in `daicompute-website/src/images/brand/` and update `public/favicon.svg`. Cross-reference `imagery-and-motion.md`.

---

## 7. Iteration Notes (v0.1)

- Decide mark direction (distributed-node "D" + sovereign spark) vs. a pure northern-compass form. Test both at favicon scale.
- Consider whether the wordmark needs a bespoke display face or can ride Space Grotesk 700 (see typography.md).
