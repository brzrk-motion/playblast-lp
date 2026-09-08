# DESIGN.md — Playblast landing page

Design decisions for the marketing LP. Register: **brand / marketing** (impeccable craft).

## Scene

Small motion/CGI studio, dim review room, director scrubbing cuts on a large monitor. Serious, private, craft — not SaaS purple-gradient spam.

## Color strategy

**Committed dark** — cool slate body (hue ~265) with signal coral accent (hue ~38). OKLCH throughout.

| Token | Value | Role |
|-------|-------|------|
| `--bg` | `oklch(0.13 0.018 265)` | Page background |
| `--ink` | `oklch(0.93 0.018 85)` | Primary text (≥4.5:1 on bg) |
| `--ink-muted` | `oklch(0.72 0.028 80)` | Secondary text (≥4.5:1 on bg) |
| `--accent` | `oklch(0.62 0.145 38)` | CTAs, markers, kicker |

Ambient gradients use low-chroma tints of accent and bg hue — no cream/sand near-white body.

## Typography

| Role | Family | Notes |
|------|--------|-------|
| Display (h1–h2) | Libre Baskerville | Serif gravitas; motion-studio craft |
| Body / UI | Archivo | Geometric sans; not reflex-reject Inter/DM |

Fluid `clamp()` scale, ~1.25 ratio. Hero max `4.5rem` (≤6rem ceiling). Display letter-spacing `-0.04em`. `text-wrap: balance` on headings; `pretty` on prose. Body max ~42rem (~65–75ch).

## Layout

- Asymmetric hero: copy left, abstract frame motif right (CSS-only, no stock photos per AGENTS.md)
- Problem: offset left rule + indented copy
- Loop: vertical timeline with staggered even rows — not identical card grid
- Get / Don't: asymmetric columns (1.15 / 0.85); get panel surfaced, don't de-emphasized
- Self-host: full-bleed band, content offset right
- CTA strip: accent-tinted band, clear hierarchy
- Funding: quieter opacity, below fold

## Motion

Content is **fully visible by default**. Animations enhance only when `prefers-reduced-motion: no-preference`:

- Hero: staggered rise + blur on load
- Problem: slide-in on scroll (`animation-timeline: view()`)
- Loop: staggered timeline items
- Split / funding: fade; self-host: rise

Reduced motion: no transitions on buttons; static frame motif.

## Bans observed

No side-stripe borders, gradient text, glassmorphism cards, identical card grids, section eyebrows on every block, or JS-gated visibility.

## Files

- Tokens + layout: `src/index.css`
- Structure + locked copy: `src/App.tsx`
- Fonts: `index.html`
