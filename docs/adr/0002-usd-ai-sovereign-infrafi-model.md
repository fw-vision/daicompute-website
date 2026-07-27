# ADR 0002 - USD.AI Sovereign InfraFi model; daicompute.ca domain

- **Status:** Accepted
- **Date:** 2026-07-26
- **Supersedes:** the earlier Pravah reference and the NRG + CMP utility-swap framing

## Context

The first build used the Pravah reference (warm parchment, spruce accent) and framed DAI Compute around an NRG + CMP energy/compute utility-swap. That framing did not answer the core question - how Canadians finance and profit from building the infrastructure - and the reference did not fit a financial protocol. USD.AI (docs.usd.ai, fully public including brand guidelines) is the correct reference class: a two-sided InfraFi credit protocol backing physical hardware.

## Decision

1. **Adopt the USD.AI model, localised to Canada.** A two-sided credit market: depositors mint a synthetic dollar and stake for yield drawn from real infrastructure loans; builders take non-recourse loans secured by physical Canadian energy + compute assets. **Sovereignty is the collateral and the moat** - the one thing global InfraFi (USD.AI, Akash, etc.) lacks.
2. **Reconsider tokenomics** into a three-instrument stack: **CADS** (synthetic Canadian dollar / USDai analog), **sCADS** (staked yield / sUSDai analog), **CROWN** (governance / CHIP analog), plus the **Northern Queue** (QEV analog). NRG + CMP are retired to an attestation layer. Token names are candidates pending trademark + ticker validation. Full design: `docs/brand/tokenomics.md`.
3. **Domain: daicompute.ca.** This stage is heavily Canada-sovereign; `.ca` is used everywhere (CNAME, canonical URLs, email). `daicompute.com` is reserved for a much later global expansion.

## Consequences

- The site leads with the two-sided market (Invest / Build) and the sovereignty problem, not a token or energy-swap.
- The `/sovereignty` page is the problem-first page (US dependence + CLOUD Act); the 50-year vision + ForesightScope moved to `/future`.
- Pre-launch, pre-CSA discipline applies (ADR 0003 and voice-and-messaging.md): no live financial figures.
- The vault (`04_Execute/DAICompute/`) holds the canonical brand + strategy; this repo mirrors the brand docs under `docs/brand/`.
