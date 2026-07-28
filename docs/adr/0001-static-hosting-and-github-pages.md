# ADR 0001 - Static hosting on GitHub Pages; mailto over form backend

- **Status:** Accepted
- **Date:** 2026-07-26

## Context

The site must be a low-cost, low-maintenance credibility artifact for a pre-launch protocol, deployed on GitHub Pages. The contact page needs a way for visitors to reach out.

## Decision

1. **Host on GitHub Pages** (static output, Astro `output: "static"`). Deploy via `.github/workflows/deploy.yml` (bun-based). Private `@fw-vision/*` packages install in CI via secret `FWVISION_PACKAGES_TOKEN` (classic PAT with `read:packages`), mapped to env `GITHUB_TOKEN_FWVISION` for `.npmrc`. Prefer a **Repository** secret; if it is an **Environment** secret on `github-pages`, the build job must declare `environment: github-pages` (it does). The automatic Actions `GITHUB_TOKEN` cannot read packages published from another repo. Custom domain via `public/CNAME`.
2. **No server-side form.** GitHub Pages is static; there is no backend. Rather than route visitor data through a third-party form processor (Formspree, EmailJS, etc.), the contact page presents an **illustrative disabled template** plus a **`mailto:hello@daicompute.ca`** button prefilled with a structured template. This is first-party (the visitor's own mail client); no third party touches the data.

## Consequences

- Zero hosting cost, simple deploys, no secrets beyond the packages token.
- The contact "form" cannot capture submissions to a database; that is acceptable pre-launch.
- If a real submission pipeline is wanted later, prefer a **first-party self-hosted handler** over a third-party processor, to preserve the sovereignty-focused posture.
- Build is `bunx astro build` (the npm shim is broken under the bun install layout).
