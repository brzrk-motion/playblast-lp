export const LINKS = {
  github: 'https://github.com/brzrk-motion/Playblast',
  installGuide:
    'https://brzrk-motion.github.io/Playblast/deployment/install-linux-nas',
  issues: 'https://github.com/brzrk-motion/Playblast/issues',
  sponsor: 'https://github.com/sponsors/brzrk-motion',
  sponsorsDoc:
    'https://github.com/brzrk-motion/Playblast/blob/main/SPONSORS.md',
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

export const SPONSORSHIP_TIERS = [
  {
    name: 'Friend',
    amount: '$10',
    period: '/ month',
    benefits: [
      'Public thanks in release notes',
      'Name listed on the sponsors page',
    ],
  },
  {
    name: 'Studio',
    amount: '$50',
    period: '/ month',
    benefits: [
      'Logo on the sponsors page',
      'Public thanks in release notes',
    ],
  },
  {
    name: 'Production',
    amount: '$150',
    period: '/ month',
    benefits: [
      'Prominent logo placement on sponsors page',
      'Public thanks in release notes',
      'Quarterly transparent maintenance report',
    ],
  },
  {
    name: 'Anchor',
    amount: '$500',
    period: '/ month',
    benefits: [
      'Featured sponsor placement on sponsors page',
      'Public thanks in release notes',
      'Quarterly transparent maintenance report',
    ],
  },
  {
    name: 'Founding partner',
    amount: '$1000',
    period: '/ month',
    benefits: [
      'Top-tier sponsor recognition on sponsors page',
      'Public thanks in release notes',
      'Quarterly transparent maintenance report',
    ],
  },
] as const
