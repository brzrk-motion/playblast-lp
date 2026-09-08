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

- Asymmetric hero: copy left, **vgpu WebGPU shader** right (ambient review-room fragment effect); `00:14` timestamp overlay preserved for honesty
- Problem: offset left rule + indented copy
- Loop: vertical timeline with staggered even rows — not identical card grid
- **Screenshots**: 2×2 gallery after loop; drop-in PNGs at `public/screenshots/{review,compare,annotate,projects}.png`
- Get / Don't: asymmetric columns (1.15 / 0.85); get panel surfaced, don't de-emphasized
- Self-host: full-bleed band, content offset right
- CTA strip: accent-tinted band, clear hierarchy
- **Sponsorship tiers**: 5 recognition-only cards ($10–$1000/mo), below fold; funding ≠ support
- Funding: quieter opacity, below fold

## Hero shader (vgpu)

- Package: [`vgpu`](https://github.com/vercel-labs/vgpu) with `hero-review.wgsl`
- Effect: cool slate base, coral monitor bloom, timeline markers, scanlines, film grain
- Left-side copy mask fades shader for legibility
- `prefers-reduced-motion`: single static frame at `time = 0.35`, no animation loop
- No WebGPU: CSS gradient fallback (`hero-shader-fallback`) matching palette
- Vite: `@vgpu/wgsl/loader-vite` plugin for `.wgsl` imports

## Motion

Content is **fully visible by default**. Animations enhance only when `prefers-reduced-motion: no-preference`:

- Hero: staggered rise + blur on load; shader animates via vgpu clock
- Problem: slide-in on scroll (`animation-timeline: view()`)
- Loop: staggered timeline items
- Screenshots / split / funding: fade; self-host: rise

Reduced motion: no transitions on buttons; shader static frame; CSS fallback only.

## Sponsorship tiers

Recognition-only ladder — never “support packages,” “plans,” or “SLA tiers”:

| $/mo | Name | Recognition |
|------|------|-------------|
| 10 | Friend | Name on sponsors list |
| 50 | Studio | Name + link |
| 150 | Production | Logo + link (sponsors page + LP) |
| 500 | Anchor | Larger logo; named in quarterly public report |
| 1000 | Founding partner | Top placement; optional case-study/quote with written permission |

Shared disclaimer on every card and section footer:

> Sponsorship funds general maintenance and development of Playblast. It does not purchase private support, response times, roadmap control, hosting, installation, or priority security treatment. You run your own instance.

CTA: GitHub Sponsors coming online; interim links to Playblast `SPONSORS.md` and Discussions — no fake checkout.

## Bans observed

No side-stripe borders, gradient text, glassmorphism cards, identical card grids, section eyebrows on every block, or JS-gated visibility.

## Files

- Tokens + layout: `src/index.css`
- Structure + locked copy: `src/App.tsx`
- Shader: `src/shaders/hero-review.wgsl`, `src/components/HeroShader.tsx`
- Screenshots: `public/screenshots/`, `src/constants.ts` (`SCREENSHOTS`)
- Tiers: `src/constants.ts` (`SPONSORSHIP_TIERS`)
- Fonts: `index.html`
