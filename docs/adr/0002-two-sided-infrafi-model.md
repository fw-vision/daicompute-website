# ADR 0002 - Two-sided sovereign InfraFi credit model; daicompute.ca domain

- **Status:** Accepted
- **Date:** 2026-07-26

## Context

An earlier iteration framed DAI Compute around an energy/compute utility-swap between two consumable tokens. That framing did not answer the core question the product exists to solve: how Canadians finance, own, and profit from building sovereign energy and AI compute infrastructure. The site and its data model needed to reflect a financing protocol, not a token swap.

## Decision

1. **A two-sided sovereign InfraFi credit model.** A credit market with two sides: depositors supply capital and earn yield drawn from real infrastructure loans; builders take non-recourse loans secured by physical Canadian energy + compute assets. The differentiator is sovereignty: assets are Canadian, on Canadian soil, under Canadian law, addressing the foreign-jurisdiction exposure of running on foreign-owned infrastructure.
2. **A three-instrument stack:** **CADS** (synthetic Canadian dollar, the stable entry point), **sCADS** (staked, yield-bearing), **CROWN** (governance), plus the **Northern Queue** (epoch-based redemption liquidity). Token names are candidates pending trademark and ticker validation.
3. **Domain: daicompute.ca.** This stage is Canada-sovereign; `.ca` is used everywhere (CNAME, canonical URLs, email). `daicompute.com` is reserved for a possible later expansion.

## Consequences

- The site leads with the two-sided market (Invest / Build) and the sovereignty problem.
- The `/sovereignty` page is the problem-first page (dependence on foreign-owned infrastructure); the long-horizon vision and the ForesightScope moved to `/future`.
- Pre-launch discipline (ADR 0003 and the design content rules): no live financial figures until regulatory clarity.
- Brand and content direction are maintained separately from this repo; this repo is the implementation.
