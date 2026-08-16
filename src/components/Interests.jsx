import { interests } from '../data/data.js'
import Reveal from './Reveal.jsx'

const icons = [
  'M9 3H5a2 2 0 0 0-2 2v4m0 6v4a2 2 0 0 0 2 2h4m6-18h4a2 2 0 0 1 2 2v4m0 6v4a2 2 0 0 1-2 2h-4', // software eng - frame
  'M12 2a5 5 0 0 0-5 5c0 2 1 3 1 5v2h8v-2c0-2 1-3 1-5a5 5 0 0 0-5-5zM9 19h6M10 22h4', // AI - bulb
  'M4 19V9m5 10V5m5 14v-7m5 7V3', // ML - bars
  'M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0zM12 8v4l3 2', // CV - eye/clock-ish -> replaced below
  'M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M16 3h5v5M10 14 21 3', // web dev - external
  'M13 2 3 14h7l-1 8 11-14h-7l1-6z', // AI apps - bolt
]

export default function Interests() {
  return (
    <section className="relative py-24 sm:py-32 bg-midnight-900/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="section-label mb-3">06 · Focus Areas</p>
          <h2 className="section-heading mb-16 max-w-2xl">Areas I'm interested in.</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, i) => (
            <Reveal key={interest.title} delay={i * 80}>
              <div className="card-surface p-7 h-full transition-all hover:border-cyan-accent/40 hover:-translate-y-1 group">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-cyan-accent/15 to-indigo-accent/15 border border-cyan-accent/20 text-cyan-accent mb-5 transition-transform group-hover:scale-110">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d={icons[i % icons.length]} />
                  </svg>
                </div>
                <h3 className="font-display text-base font-semibold text-white mb-1.5">{interest.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{interest.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
