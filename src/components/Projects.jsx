import { projects } from '../data/data.js'
import Reveal from './Reveal.jsx'

function GithubIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.14c-3.16.69-3.83-1.36-3.83-1.36-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.65 1.24 3.3.95.1-.73.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.61 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.36-2.66 5.32-5.19 5.6.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="section-label mb-3">04 · Projects</p>
          <h2 className="section-heading mb-4 max-w-2xl">Things I've built and shipped.</h2>
          <p className="text-slate-400 max-w-2xl mb-16">
            Real systems, not tutorials — from an offline clinical AI built in 24 hours to a
            YOLO-based navigation aid.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 100}
              className={i === 0 ? 'md:col-span-2' : ''}
            >
              <article className="group relative h-full card-surface p-7 sm:p-9 overflow-hidden transition-all duration-300 hover:border-cyan-accent/50 hover:-translate-y-1.5 hover:shadow-cyan-glow">
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-accent/5 blur-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

                <div className="relative flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    {project.badge && (
                      <span className="inline-flex items-center gap-1.5 mb-3 rounded-full bg-indigo-accent/15 border border-indigo-accent/30 px-3 py-1 font-mono text-[11px] text-indigo-accent">
                        ⚡ {project.badge}
                      </span>
                    )}
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-white leading-snug max-w-xl">
                      {project.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-slate-500 whitespace-nowrap pt-1">{project.period}</span>
                </div>

                <p className="relative text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  {project.description}
                </p>

                <ul className="relative mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-400">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0 text-cyan-accent">
                        <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] tracking-wide rounded-full bg-midnight-800 border border-slate-hair px-3 py-1 text-cyan-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="relative mt-7 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-hair px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-cyan-accent/50 hover:text-cyan-accent"
                  >
                    <GithubIcon />
                    View on GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-cyan-accent px-5 py-2.5 text-sm font-semibold text-midnight-950 transition-all hover:shadow-cyan-glow"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
