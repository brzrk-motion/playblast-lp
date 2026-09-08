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
        Free, open-source video proofing for small motion, CGI, animation, and
        video studios. Versions, comments, frame annotations, compare, and
        approvals — media on infrastructure you control.
      </p>
      <p className="status-line">
        Self-hosted MVP release candidate. Core proofing loop exists;
        independent clean-install / adoption checks still in progress. Not
        commercially validated. Not hosted. No support package.
      </p>
      <p className="status-helper">You run it; we don&apos;t host or support.</p>
      <div className="cta-group">
        <ExternalLink href={LINKS.github} className="btn btn-primary">
          Explore Playblast on GitHub
        </ExternalLink>
        <ExternalLink href={LINKS.installGuide} className="btn btn-secondary">
          Read the installation guide
        </ExternalLink>
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section className="section" aria-labelledby="problem-heading">
      <h2 id="problem-heading">Feedback shouldn&apos;t live in five places</h2>
      <p>
        Version notes in email. Frame feedback in chat. Drive links for cuts
        that don&apos;t match the thread. Approvals buried where nobody will
        find them next week — with no single source of truth tied to the media.
      </p>
    </section>
  )
}

const STEPS = [
  {
    title: 'Install on your infrastructure',
    body:
      'Deploy with Docker on NAS or Linux. One studio per instance — media stays on hardware you control.',
  },
  {
    title: 'Set up a project',
    body:
      'Create a project with deliverables for a job, reel, or internal piece.',
  },
  {
    title: 'Upload versions',
    body:
      'Add cuts and iterations as they land. Every version lives on your server.',
  },
  {
    title: 'Leave frame-aware feedback',
    body:
      'Timestamped comments and frame annotations tie notes to the exact moment in the cut.',
  },
  {
    title: 'Compare side by side',
    body:
      'Line up versions to see what changed — without exporting comparison reels by hand.',
  },
  {
    title: 'Approve and track history',
    body:
      'Move deliverables through approval states. Review history shows what was signed off and when.',
  },
]

function TheLoop() {
  return (
    <section className="section" aria-labelledby="loop-heading">
      <h2 id="loop-heading">The loop</h2>
      <p className="section-intro">
        Versions → frame-aware feedback → compare → approve — on infrastructure
        you control.
      </p>
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
  'Projects, deliverables, and versions',
  'Timestamped comments and frame annotations',
  'Side-by-side version comparison',
  'Approval states and review history',
  'Admin, Creative, and Proofing roles',
  'Docs and public issues as the support boundary',
]

const YOU_DONT_GET = [
  'Hosted SaaS — brzrk does not run your instance',
  'Founder install or white-glove onboarding',
  'Support SLA or managed operations from brzrk',
  'CRM, invoicing, or studio ops suite',
  'Guest or client share links (deferred)',
  'Every pro codec, mobile app, or timecode/scrub feature as a pitch',
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

function SoftCtas() {
  return (
    <section className="section cta-strip" aria-label="Explore and contribute">
      <nav className="cta-strip-nav">
        <ExternalLink href={LINKS.github}>Explore GitHub</ExternalLink>
        <span className="cta-sep" aria-hidden="true">·</span>
        <ExternalLink href={LINKS.installGuide}>Read install docs</ExternalLink>
        <span className="cta-sep" aria-hidden="true">·</span>
        <ExternalLink href={LINKS.issues}>Report an issue</ExternalLink>
      </nav>
    </section>
  )
}

function Funding() {
  return (
    <section className="section funding" aria-labelledby="funding-heading">
      <h2 id="funding-heading">Optional funding for maintenance</h2>
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
        <TheLoop />
        <GetAndDontGet />
        <SelfHost />
        <SoftCtas />
        <Funding />
      </main>
      <Footer />
    </div>
  )
}
