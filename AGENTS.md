# AGENTS.md — Playblast landing page

Guidance for humans and agents editing this marketing site. Claims must stay honest to product reality.

## Product status

Playblast is a **self-hosted MVP release candidate**. Core workflow exists; independent clean-install, NAS, and adoption verification are still in progress. It is **not** commercially validated.

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

### Honesty line (use near hero CTAs)

> Self-hosted MVP release candidate. Free, open-source. You run it; we don't host or support.

## Approved copy sources

- Hero H1, subhead, and section structure: see task brief / product positioning doc (this repo's `src/App.tsx` implements the approved draft).
- Company line: **brzrk — Tools for the work behind the work.**

When changing marketing copy, prefer editing `src/App.tsx` and `src/constants.ts` only. Keep URLs centralized in `src/constants.ts`.

## Do NOT claim or imply

- Ready for studios everywhere / broadly available / validated
- "Install today" as a mass invite
- Founder will install / we host it / paid support SLA
- Old $250 + $99/mo pilot offer
- Customer logos, adoption metrics, or commercial proof we do not have
- brzrk-hosted SaaS (there is none)

## What you can say

- Free, open-source, self-hosted
- Docker on NAS/Linux; one studio per instance
- Features that exist in the RC: versions, timestamped comments, frame annotations, side-by-side comparison, approvals, review history
- Operators own Docker, networking, HTTPS/VPN, backups, SMTP, access
- Release candidate — validate your own setup
- Optional GitHub Sponsors for maintenance (not support)

## Technical notes

- `npm run build` must succeed before merging
- `vite.config.ts` `base` must match GitHub Pages path (`/playblast-lp/`)
- Deploy workflow: `.github/workflows/deploy-pages.yml` on push to `main`
- No stock photos, fake logos, or inflated social proof

## Review checklist

Before opening or updating a PR:

- [ ] All CTA labels and URLs match the table above
- [ ] Honesty line present in hero
- [ ] No forbidden claims in copy
- [ ] `npm run build` passes
- [ ] README still documents dev/build/Pages deploy
