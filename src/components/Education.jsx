import { education } from '../data/data.js'
import Reveal from './Reveal.jsx'

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="section-label mb-3">02 · Education</p>
          <h2 className="section-heading mb-16 max-w-2xl">Academic timeline.</h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-[15px] sm:left-1/2 top-0 bottom-0 w-px bg-slate-hair sm:-translate-x-1/2" />

          <div className="space-y-12">
            {education.map((ed, i) => (
              <Reveal key={ed.degree} delay={i * 120}>
                <div
                  className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                    i % 2 === 1 ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  <span className="absolute left-[9px] sm:left-1/2 top-1.5 h-3.5 w-3.5 rounded-full bg-midnight-950 border-2 border-cyan-accent sm:-translate-x-1/2" />

                  <div className="hidden sm:block sm:w-1/2" />

                  <div className="pl-10 sm:pl-0 sm:w-1/2">
                    <div className="card-surface p-6 transition-all hover:border-cyan-accent/40 hover:-translate-y-1">
                      <p className="font-mono text-xs text-cyan-accent mb-2">{ed.period}</p>
                      <h3 className="font-display text-lg font-semibold text-white leading-snug">{ed.degree}</h3>
                      <p className="text-slate-300 mt-1.5 text-sm">{ed.institution}</p>
                      {ed.university && <p className="text-slate-500 text-xs mt-0.5">{ed.university}</p>}
                      <div className="mt-4 flex items-center justify-between text-xs">
                        <span className="rounded-full bg-cyan-accent/10 text-cyan-soft px-3 py-1 font-mono">
                          {ed.metric}
                        </span>
                        <span className="text-slate-500">{ed.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
