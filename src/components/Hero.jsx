import { profile } from '../data/data.js'
import NetworkCanvas from './NetworkCanvas.jsx'
import Terminal from './Terminal.jsx'

function ProfilePhoto() {
  return (
    <div className="relative shrink-0 mb-7">
      <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-cyan-accent/25 via-indigo-accent/15 to-transparent blur-xl" />
      <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full p-[3px] bg-gradient-to-br from-cyan-accent to-indigo-accent">
        <div className="h-full w-full rounded-full overflow-hidden bg-charcoal-900 border-2 border-midnight-950">
          <img
            src="/profile/photo.png"
            alt="Beeresh Muragannavar"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.nextElementSibling.style.display = 'flex'
            }}
          />
          <div
            className="hidden h-full w-full items-center justify-center font-display text-3xl font-semibold text-cyan-accent bg-charcoal-900"
            aria-hidden="true"
          >
            BM
          </div>
        </div>
      </div>
    </div>
  )
}

function IconLink({ href, label, children, download }) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={download ? undefined : '_blank'}
      rel={download ? undefined : 'noopener noreferrer'}
      download={download}
      className="grid h-11 w-11 place-items-center rounded-full border border-slate-hair bg-charcoal-900/60 text-slate-300 transition-all hover:text-cyan-accent hover:border-cyan-accent/50 hover:-translate-y-0.5"
    >
      {children}
    </a>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-16"
    >
      {/* Signature: animated node-link network, subtle radial glow, faint grid */}
      <div className="absolute inset-0">
        <NetworkCanvas className="absolute inset-0 h-full w-full opacity-70" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-grid-fade" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <ProfilePhoto />
          <p className="section-label mb-5">Portfolio · Software Engineering &amp; AI/ML</p>

          <h1 className="font-display font-semibold text-[2.6rem] leading-[1.05] sm:text-6xl md:text-6xl tracking-tight text-white">
            {profile.name}
          </h1>
          <p className="mt-3 font-display text-xl sm:text-2xl text-cyan-accent font-medium">
            {profile.role}
          </p>

          <p className="mt-6 max-w-xl text-slate-300 text-base sm:text-lg leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-accent px-6 py-3.5 text-sm font-semibold text-midnight-950 transition-all hover:shadow-cyan-glow hover:-translate-y-0.5"
            >
              View My Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-hair px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-cyan-accent/60 hover:text-cyan-accent hover:-translate-y-0.5"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <IconLink href={profile.linkedin} label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.52V23H.24V8.25zM8.25 8.25h4.33v2.01h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.93V23h-4.52v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23H8.25V8.25z" />
              </svg>
            </IconLink>
            <IconLink href={profile.github} label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.14c-3.16.69-3.83-1.36-3.83-1.36-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.65 1.24 3.3.95.1-.73.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.61 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.36-2.66 5.32-5.19 5.6.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z" />
              </svg>
            </IconLink>
            <IconLink href={`mailto:${profile.email}`} label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="2" y="4" width="20" height="16" rx="2.5" />
                <path d="M3 6.5l9 6.2 9-6.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </IconLink>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end animate-float">
          <Terminal />
        </div>
      </div>
    </section>
  )
}
