import { experience } from '../data/data.js'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-midnight-900/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="section-label mb-3">03 · Experience</p>
          <h2 className="section-heading mb-14 max-w-2xl">Where I've applied it.</h2>
        </Reveal>

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 100}>
              <div className="card-surface p-7 sm:p-8 flex flex-col sm:flex-row gap-6 sm:items-center transition-all hover:border-cyan-accent/40 hover:-translate-y-1">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-cyan-accent/10 border border-cyan-accent/20 text-cyan-accent">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="7" width="18" height="13" rx="2" />
                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" strokeLinecap="round" />
                    <path d="M3 12h18" />
                  </svg>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-white">{exp.role}</h3>
                    <span className="font-mono text-xs text-cyan-accent">{exp.period}</span>
                  </div>
                  <p className="text-slate-300 text-sm mt-1">{exp.company}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mt-3 max-w-2xl">{exp.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] tracking-wide rounded-full border border-slate-hair px-3 py-1 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
