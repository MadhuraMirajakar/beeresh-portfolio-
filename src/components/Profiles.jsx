import { profile } from '../data/data.js'
import Reveal from './Reveal.jsx'

const cards = [
  {
    label: 'GitHub',
    value: 'Beeresh0l',
    href: profile.github,
    cta: 'Visit GitHub',
    icon: (
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.14c-3.16.69-3.83-1.36-3.83-1.36-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.65 1.24 3.3.95.1-.73.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.61 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.36-2.66 5.32-5.19 5.6.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z" />
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Beeresh Muragannavar',
    href: profile.linkedin,
    cta: 'Connect on LinkedIn',
    icon: (
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.52V23H.24V8.25zM8.25 8.25h4.33v2.01h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.93V23h-4.52v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23H8.25V8.25z" />
    ),
  },
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    cta: 'Send Email',
    icon: (
      <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15zM3 6l9 6.5L21 6" stroke="currentColor" strokeWidth="0" fill="none" />
    ),
    stroke: true,
  },
]

export default function Profiles() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="section-label mb-3">07 · Find Me Online</p>
          <h2 className="section-heading mb-16 max-w-2xl">Professional profiles.</h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Reveal key={card.label} delay={i * 100}>
              <div className="card-surface p-7 h-full flex flex-col items-start transition-all hover:border-cyan-accent/40 hover:-translate-y-1">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-cyan-accent/10 border border-cyan-accent/20 text-cyan-accent mb-5">
                  {card.stroke ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2.5" />
                      <path d="M3 6.5l9 6.2 9-6.2" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      {card.icon}
                    </svg>
                  )}
                </div>
                <p className="text-xs font-mono tracking-wide text-slate-500 uppercase mb-1">{card.label}</p>
                <p className="font-display text-white font-medium mb-6 break-all">{card.value}</p>
                <a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-cyan-accent hover:text-cyan-soft transition-colors"
                >
                  {card.cta}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-8 text-center text-slate-500 text-sm">
            Prefer a call?{' '}
            <a href={`tel:${profile.phone}`} className="text-cyan-accent hover:text-cyan-soft transition-colors font-mono">
              +91 {profile.phone}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
