import { LINKS } from './constants'

function ExternalLink({
  href,
  children,
  className = '',
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <p className="eyebrow">Playblast</p>
      <h1 id="hero-heading">
        Private review for the work your studio is already making.
      </h1>
      <p className="subhead">
        Playblast is free, open-source video proofing for small motion-design,
        CGI, animation, and video studios. Keep versions, comments, annotations,
        comparisons, and approvals in one place—without moving large media into
        someone else&apos;s cloud.
      </p>
      <div className="cta-group">
        <ExternalLink href={LINKS.github} className="btn btn-primary">
          Explore Playblast on GitHub
        </ExternalLink>
        <ExternalLink href={LINKS.installGuide} className="btn btn-secondary">
          Read the installation guide
        </ExternalLink>
      </div>
      <p className="status-line">
        Self-hosted MVP release candidate. Free, open-source. You run it; we
        don&apos;t host or support.
      </p>
      <p className="secondary-cta">
        <ExternalLink href={LINKS.issues}>Report an issue</ExternalLink>
      </p>
    </section>
  )
}

function Problem() {
  return (
    <section className="section" aria-labelledby="problem-heading">
      <h2 id="problem-heading">Feedback shouldn&apos;t live in five places</h2>
      <p>
        Version notes in email. Frame feedback in chat. A Drive link for the
        latest cut. Another link for the previous one. Approvals buried in a
        thread nobody can find next week.
      </p>
      <p>
        Small studios lose time reconciling scattered feedback—and risk shipping
        the wrong version because nobody had a single source of truth tied to
        the actual media.
      </p>
    </section>
  )
}

const STEPS = [
  {
    title: 'Install with Docker',
    body:
      'Deploy on your NAS or Linux server. One studio per instance—your infrastructure, your rules.',
  },
  {
    title: 'Create a project',
    body:
      'Set up a review space for a job, reel, or internal piece. No external cloud upload required.',
  },
  {
    title: 'Upload versions',
    body:
      'Add cuts and iterations as they land. Every version stays on hardware you control.',
  },
  {
    title: 'Comment and annotate',
    body:
      'Timestamped notes and frame annotations keep feedback tied to the exact moment in the cut.',
  },
  {
    title: 'Compare side by side',
    body:
      'Line up versions to see what changed—without exporting comparison reels by hand.',
  },
  {
    title: 'Approve and track history',
    body:
      'Record approvals and review history so the team knows what was signed off and when.',
  },
]

function HowItWorks() {
  return (
    <section className="section" aria-labelledby="how-heading">
      <h2 id="how-heading">How it works</h2>
      <ol className="steps">
        {STEPS.map((step, i) => (
          <li key={step.title}>
            <span className="step-num" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

const YOU_GET = [
  'Versioned video review on infrastructure you run',
  'Timestamped comments and frame annotations',
  'Side-by-side version comparison',
  'Approvals and review history',
  'Docker deployment for NAS or Linux',
  'One studio per instance—no multi-tenant SaaS',
  'Free and open-source (no license fee to brzrk)',
]

const YOU_DONT_GET = [
  'brzrk-hosted cloud—there is no SaaS offering',
  'Founder install or white-glove onboarding',
  'Paid support SLA or managed operations from brzrk',
  'A guarantee that every NAS or network setup will work without your ops work',
  'Commercial validation or “studios everywhere” readiness claims',
]

function GetAndDontGet() {
  return (
    <section className="section split" aria-labelledby="get-heading">
      <div>
        <h2 id="get-heading">What you get</h2>
        <ul>
          {YOU_GET.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>What you don&apos;t get</h2>
        <ul className="dont-list">
          {YOU_DONT_GET.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function SelfHost() {
  return (
    <section className="section callout" aria-labelledby="selfhost-heading">
      <h2 id="selfhost-heading">You operate the instance</h2>
      <p>
        Playblast runs where you put it. That means your team owns Docker,
        networking, HTTPS or VPN access, backups, SMTP for notifications, and
        who can reach the server. We publish the software and docs; you run the
        environment.
      </p>
      <p>
        Independent clean-install and NAS verification is still in progress—treat
        this as a release candidate and plan time to validate your setup.
      </p>
      <ExternalLink href={LINKS.installGuide} className="text-link">
        Read the installation guide →
      </ExternalLink>
    </section>
  )
}

function Funding() {
  return (
    <section className="section" aria-labelledby="funding-heading">
      <h2 id="funding-heading">Optional support for maintenance</h2>
      <p>
        If Playblast is useful, you can sponsor or donate via GitHub Sponsors.
        That helps fund ongoing maintenance—it does not purchase support,
        hosting, or a service agreement from brzrk.
      </p>
      <ExternalLink href={LINKS.sponsor} className="btn btn-ghost">
        Sponsor on GitHub
      </ExternalLink>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <nav aria-label="Footer">
        <ul className="footer-links">
          <li>
            <ExternalLink href={LINKS.github}>GitHub</ExternalLink>
          </li>
          <li>
            <ExternalLink href={LINKS.installGuide}>Docs</ExternalLink>
          </li>
          <li>
            <ExternalLink href={LINKS.issues}>Issues</ExternalLink>
          </li>
          <li>
            <ExternalLink href={LINKS.sponsor}>Sponsor</ExternalLink>
          </li>
        </ul>
      </nav>
      <p className="company-line">
        <span className="brzrk">brzrk</span> — Tools for the work behind the
        work.
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <div className="page">
      <header className="site-header">
        <span className="logo" aria-hidden="true">▶</span>
        <span className="site-name">Playblast</span>
      </header>
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <GetAndDontGet />
        <SelfHost />
        <Funding />
      </main>
      <Footer />
    </div>
  )
}
