export const LINKS = {
  github: 'https://github.com/brzrk-motion/Playblast',
  installGuide:
    'https://brzrk-motion.github.io/Playblast/deployment/install-linux-nas',
  issues: 'https://github.com/brzrk-motion/Playblast/issues',
  sponsorsDoc:
    'https://github.com/brzrk-motion/Playblast/blob/development-mvp/SPONSORS.md',
  discussions: 'https://github.com/brzrk-motion/Playblast/discussions',
} as const

/** Base path for GitHub Pages deploy */
export const BASE = import.meta.env.BASE_URL

export const SCREENSHOTS = [
  {
    src: `${BASE}screenshots/review.png`,
    alt:
      'Playblast review player showing a deliverable cut with timestamped comments in the sidebar',
    caption: 'Timestamped comments on the cut',
  },
  {
    src: `${BASE}screenshots/compare.png`,
    alt:
      'Playblast compare view with two versions in synced side-by-side playback',
    caption: 'Synced side-by-side compare',
  },
  {
    src: `${BASE}screenshots/annotate.png`,
    alt:
      'Playblast review player with frame annotation markup on a video frame',
    caption: 'Frame annotations on the lockup',
  },
  {
    src: `${BASE}screenshots/projects.png`,
    alt:
      'Playblast projects list showing deliverables and status per job',
    caption: 'Deliverables and status per job',
  },
] as const

export const SPONSORSHIP_DISCLAIMER =
  'Sponsorship funds general maintenance and development of Playblast. It does not purchase private support, response times, roadmap control, hosting, installation, or priority security treatment. You run your own instance.'

export const SPONSORSHIP_TIERS = [
  {
    name: 'Friend',
    amount: '$10',
    period: '/ month',
    recognition: 'Name on sponsors list',
  },
  {
    name: 'Studio',
    amount: '$50',
    period: '/ month',
    recognition: 'Name + link',
  },
  {
    name: 'Production',
    amount: '$150',
    period: '/ month',
    recognition: 'Logo + link (sponsors page + LP)',
  },
  {
    name: 'Anchor',
    amount: '$500',
    period: '/ month',
    recognition: 'Larger logo; named in quarterly public report',
  },
  {
    name: 'Founding partner',
    amount: '$1000',
    period: '/ month',
    recognition:
      'Top placement; optional case-study/quote with written permission',
  },
] as const
