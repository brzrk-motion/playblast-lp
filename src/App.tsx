import { LINKS, SCREENSHOTS, SPONSORSHIP_DISCLAIMER, SPONSORSHIP_TIERS } from './constants'
import { HeroShader } from './components/HeroShader'

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

function HeroTimestamp() {
  return (
    <div className="hero-timestamp" aria-hidden="true">
      <span>00:14</span>
      <span>v03 · internal cut</span>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero reveal-hero" aria-labelledby="hero-heading">
      <div className="hero__copy">
        <p className="kicker">Playblast</p>
        <h1 id="hero-heading">
          Private review for the work your studio is already making.
        </h1>
        <p className="subhead">
          Free, open-source video proofing for small motion, CGI, animation, and
          video studios. Versions, comments, frame annotations, compare, and
          approvals — media on infrastructure you control.
        </p>
        <div className="cta-group">
          <ExternalLink href={LINKS.github} className="btn btn-primary">
            Explore Playblast on GitHub
          </ExternalLink>
          <ExternalLink href={LINKS.installGuide} className="btn btn-secondary">
            Read the installation guide
          </ExternalLink>
        </div>
        <aside className="status-block">
          <p className="status-line">
            Self-hosted MVP release candidate. Core proofing loop exists;
            independent clean-install / adoption checks still in progress. Not
            commercially validated. Not hosted. No support package.
          </p>
          <p className="status-helper">You run it; we don&apos;t host or support.</p>
        </aside>
      </div>
      <div className="hero__visual">
        <HeroShader className="hero__shader" />
        <HeroTimestamp />
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section className="section section--problem reveal-slide" aria-labelledby="problem-heading">
      <div className="section__inner section__inner--offset">
        <h2 id="problem-heading">Feedback shouldn&apos;t live in five places</h2>
        <p className="prose">
          Version notes in email. Frame feedback in chat. Drive links for cuts
          that don&apos;t match the thread. Approvals buried where nobody will
          find them next week — with no single source of truth tied to the media.
        </p>
      </div>
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
    <section className="section section--loop reveal-stagger" aria-labelledby="loop-heading">
      <div className="section__inner section__inner--wide">
        <div className="loop-header">
          <h2 id="loop-heading">The loop</h2>
          <p className="section-intro">
            Versions → frame-aware feedback → compare → approve — on infrastructure
            you control.
          </p>
        </div>
        <ol className="timeline">
          {STEPS.map((step, i) => (
            <li key={step.title} className="timeline__item">
              <span className="timeline__marker" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="timeline__body">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Screenshots() {
  return (
    <section className="section section--screenshots reveal-fade" aria-labelledby="screenshots-heading">
      <div className="section__inner section__inner--wide">
        <div className="screenshots-header">
          <h2 id="screenshots-heading">Inside the proofing room</h2>
          <p className="section-intro">
            Playback, compare, frame markup, and project tracking — the core
            loop in one self-hosted interface. Studio Demo seed data shown.
          </p>
        </div>
        <ul className="screenshot-gallery">
          {SCREENSHOTS.map((shot) => (
            <li key={shot.caption} className="screenshot-card">
              <figure>
                <div className="screenshot-card__frame">
                  <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
                </div>
                <figcaption>{shot.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
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
    <section className="section section--split reveal-fade" aria-labelledby="get-heading">
      <div className="split-grid">
        <div className="split-panel split-panel--get">
          <h2 id="get-heading">What you get</h2>
          <ul className="check-list">
            {YOU_GET.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="split-panel split-panel--dont">
          <h2>What you don&apos;t get</h2>
          <ul className="cross-list">
            {YOU_DONT_GET.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function SelfHost() {
  return (
    <section className="section section--selfhost reveal-rise" aria-labelledby="selfhost-heading">
      <div className="selfhost-band">
        <div className="selfhost-band__inner">
          <h2 id="selfhost-heading">You operate the instance</h2>
          <div className="selfhost-band__prose">
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
          </div>
          <ExternalLink href={LINKS.installGuide} className="text-link">
            Read the installation guide →
          </ExternalLink>
        </div>
      </div>
    </section>
  )
}

function SoftCtas() {
  return (
    <section className="section section--cta-strip" aria-label="Explore and contribute">
      <nav className="cta-strip">
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
    <section className="section section--funding reveal-fade" aria-labelledby="funding-heading">
      <div className="funding-block">
        <h2 id="funding-heading">Sponsorship tiers</h2>
        <ul className="tier-grid">
          {SPONSORSHIP_TIERS.map((tier) => (
            <li key={tier.name} className="tier-card">
              <div className="tier-card__head">
                <h3>{tier.name}</h3>
                <p className="tier-card__price">
                  <span className="tier-card__amount">{tier.amount}</span>
                  <span className="tier-card__period">{tier.period}</span>
                </p>
              </div>
              <p className="tier-card__recognition">{tier.recognition}</p>
              <p className="tier-card__boundary">{SPONSORSHIP_DISCLAIMER}</p>
            </li>
          ))}
        </ul>
        <p className="funding-footer">{SPONSORSHIP_DISCLAIMER}</p>
        <div className="funding-cta">
          <p className="funding-cta__note">GitHub Sponsors coming online.</p>
          <ExternalLink href={LINKS.sponsorsDoc} className="text-link funding-doc-link">
            Read SPONSORS.md →
          </ExternalLink>
          <ExternalLink href={LINKS.discussions} className="text-link funding-doc-link">
            Join Discussions →
          </ExternalLink>
        </div>
      </div>
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
            <ExternalLink href={LINKS.sponsorsDoc}>Sponsor</ExternalLink>
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
      <div className="page__ambient" aria-hidden="true" />
      <header className="site-header">
        <span className="logo-mark" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M6 4.5L15 10L6 15.5V4.5Z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="site-name">Playblast</span>
      </header>
      <main>
        <Hero />
        <Problem />
        <TheLoop />
        <Screenshots />
        <GetAndDontGet />
        <SelfHost />
        <SoftCtas />
        <Funding />
      </main>
      <Footer />
    </div>
  )
}
