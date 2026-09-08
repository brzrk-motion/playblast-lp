export const LINKS = {
  github: 'https://github.com/brzrk-motion/Playblast',
  installGuide:
    'https://brzrk-motion.github.io/Playblast/deployment/install-linux-nas',
  issues: 'https://github.com/brzrk-motion/Playblast/issues',
  sponsor: 'https://github.com/sponsors/brzrk-motion',
  sponsorsDoc:
    'https://github.com/brzrk-motion/Playblast/blob/main/SPONSORS.md',
  discussions: 'https://github.com/brzrk-motion/Playblast/discussions',
} as const

/** Base path for GitHub Pages deploy */
export const BASE = import.meta.env.BASE_URL

export const SCREENSHOTS = [
  {
    src: `${BASE}screenshots/review.png`,
    alt: 'Playblast review view with timestamped comments on a cut',
    caption: 'Review',
  },
  {
    src: `${BASE}screenshots/compare.png`,
    alt: 'Side-by-side version comparison in Playblast',
    caption: 'Compare',
  },
  {
    src: `${BASE}screenshots/annotate.png`,
    alt: 'Frame annotation and markup in Playblast',
    caption: 'Annotate',
  },
  {
    src: `${BASE}screenshots/projects.png`,
    alt: 'Projects and deliverables in Playblast',
    caption: 'Projects',
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
