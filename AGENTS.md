# AGENTS.md — Playblast landing page

Guidance for humans and agents editing this marketing site. Claims must stay honest to product reality.

## Product spine

**Versions → frame-aware feedback → compare → approve** on infrastructure you control. Soft RC only. No SaaS. No support package from brzrk.

## Product status

Self-hosted MVP release candidate. Core proofing loop exists; independent clean-install / adoption checks still in progress. Not commercially validated. Not hosted.

## Section order (locked)

1. Hero (H1 + status + explore/docs CTAs)
2. Problem (short)
3. The loop (6 steps)
4. What you get / don't get
5. Self-host note
6. Soft CTAs strip (Explore GitHub · Read install docs · Report an issue)
7. Funding (below fold only)
8. Footer

## Soft RC CTA rules (locked)

### Primary CTAs

| Label | URL |
|-------|-----|
| Explore Playblast on GitHub | https://github.com/brzrk-motion/Playblast |
| Read the installation guide | https://brzrk-motion.github.io/Playblast/deployment/install-linux-nas |

### Secondary CTA

| Label | URL |
|-------|-----|
| Report an issue | https://github.com/brzrk-motion/Playblast/issues |

### Optional CTA

| Label | URL |
|-------|-----|
| Sponsor / donate | https://github.com/sponsors/brzrk-motion |

Sponsorship funds maintenance only — it does **not** purchase support, hosting, or a service agreement.

### Hero status copy (locked)

**Status:** Self-hosted MVP release candidate. Core proofing loop exists; independent clean-install / adoption checks still in progress. Not commercially validated. Not hosted. No support package.

**Helper:** You run it; we don't host or support.

## Approved copy sources

- Hero H1, subhead, status, and section structure: `src/App.tsx`
- Company line: **brzrk — Tools for the work behind the work.**

When changing marketing copy, prefer editing `src/App.tsx` and `src/constants.ts` only. Keep URLs centralized in `src/constants.ts`.

## Do NOT claim or imply

- Ready for studios everywhere / broadly available / validated
- "Install today" as a mass invite
- Founder will install / we host it / paid support SLA
- Old $250 + $99/mo pilot offer
- Customer logos, adoption metrics, or commercial proof we do not have
- brzrk-hosted SaaS (there is none)
- **Pro timecode/scrub** (M1–M5 parked) — say **timestamped comments + frame annotations** only
- **Guest/client share links** (deferred)
- **CRM/ops suite** or invoicing as part of the offer
- Fake logos or metrics

## What you get (approved list)

- Projects, deliverables, and versions
- Timestamped comments and frame annotations
- Side-by-side version comparison
- Approval states and review history
- Admin, Creative, and Proofing roles
- Docs and public issues as the support boundary

## What you don't get (approved list)

- Hosted SaaS
- Founder install
- Support SLA
- CRM/invoicing as offer
- Guest links (deferred)
- Every pro codec/mobile as pitch

## What you can say

- Free, open-source, self-hosted
- Docker on NAS/Linux; one studio per instance
- Core loop: versions, timestamped comments, frame annotations, compare, approvals
- Operators own Docker, networking, HTTPS/VPN, backups, SMTP, access
- Release candidate — validate your own setup
- Optional GitHub Sponsors for maintenance (not support)

## Visual / design work

All visual, layout, typography, color, and motion changes on this repo **must** follow the **impeccable** design craft standard (Cursor impeccable skill) in the **brand / marketing** register:

- OKLCH color tokens; no cream/sand/beige AI-default body backgrounds
- Intentional typography pairing (not generic Inter/DM Sans/system-flat stacks)
- Asymmetric rhythm, strong hierarchy; funding stays below the fold
- Intentional entrance motion with `prefers-reduced-motion` alternatives; content visible by default (no JS-gated reveals)
- See `DESIGN.md` for committed tokens and decisions

Do not change locked copy meaning, CTA labels/URLs, or section order without explicit approval.

## Technical notes

- `npm run build` must succeed before merging
- `vite.config.ts` `base` must match GitHub Pages path (`/playblast-lp/`)
- Deploy workflow: `.github/workflows/deploy-pages.yml` on push to `main`
- No stock photos, fake logos, or inflated social proof

## Review checklist

Before opening or updating a PR:

- [ ] Section order matches locked list
- [ ] All CTA labels and URLs match the table above
- [ ] Hero status + helper lines present
- [ ] No forbidden claims in copy
- [ ] `npm run build` passes
- [ ] README still documents dev/build/Pages deploy
