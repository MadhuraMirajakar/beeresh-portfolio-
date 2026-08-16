import { about } from '../data/data.js'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-midnight-900/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="section-label mb-3">01 · About</p>
          <h2 className="section-heading mb-14 max-w-2xl">Engineer first, student always.</h2>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-14 items-start">
          <Reveal delay={100}>
            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid sm:grid-cols-2 gap-4">
              {about.highlights.map((h) => (
                <div
                  key={h.title}
                  className="card-surface p-5 transition-all hover:border-cyan-accent/40 hover:-translate-y-1"
                >
                  <h3 className="font-display text-sm font-semibold text-white mb-1.5">{h.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
