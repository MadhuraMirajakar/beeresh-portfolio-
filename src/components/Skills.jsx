import { skills } from '../data/data.js'
import Reveal from './Reveal.jsx'

const categoryIcons = {
  Programming: (
    <path d="M8 4L2 12l6 8M16 4l6 8-6 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
  'Web Development': (
    <path
      d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13zM3 9h18M8 3v6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  'AI / Machine Learning': (
    <path
      d="M12 2a3 3 0 0 1 3 3v.2A3 3 0 0 1 17 8v1a3 3 0 0 1 2 2.8v1.4A3 3 0 0 1 17 16v1a3 3 0 0 1-2 2.8V20a3 3 0 0 1-6 0v-.2A3 3 0 0 1 7 17v-1a3 3 0 0 1-2-2.8v-1.4A3 3 0 0 1 7 9V8a3 3 0 0 1 2-2.8V5a3 3 0 0 1 3-3z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  Database: (
    <path
      d="M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3zM4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  Tools: (
    <path
      d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l1 1 1 1 5.3-5.3a4 4 0 0 1 5.4-5.4l-2.4 2.4-1.6-.4-.4-1.6 2.4-2.4z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
  ),
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="section-label mb-3">05 · Skills</p>
          <h2 className="section-heading mb-16 max-w-2xl">The stack I build with.</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 90}>
              <div className="card-surface p-7 h-full transition-all hover:border-cyan-accent/40 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-accent/10 border border-cyan-accent/20 text-cyan-accent">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      {categoryIcons[group.category]}
                    </svg>
                  </div>
                  <h3 className="font-display text-base font-semibold text-white">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs tracking-wide rounded-full bg-midnight-800 border border-slate-hair px-3 py-1.5 text-slate-300 transition-colors hover:border-cyan-accent/50 hover:text-cyan-soft"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
