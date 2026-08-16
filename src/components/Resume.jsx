import { profile } from '../data/data.js'
import Reveal from './Reveal.jsx'

export default function Resume() {
  return (
    <section id="resume" className="relative py-24 sm:py-32 bg-midnight-900/40">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden card-surface p-10 sm:p-16 text-center">
            <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-60" />

            <div className="relative">
              <p className="section-label mb-4 justify-center flex">07 · Resume</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white max-w-xl mx-auto">
                Want to know more about my experience?
              </h2>
              <p className="mt-4 text-slate-400 max-w-lg mx-auto">
                Download my resume to explore my education, experience, technical skills, and
                projects in detail.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={profile.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-accent px-7 py-3.5 text-sm font-semibold text-midnight-950 transition-all hover:shadow-cyan-glow hover:-translate-y-0.5"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 1.5v9M4.5 7l3.5 3.5L11.5 7M2.5 13.5h11" />
                  </svg>
                  Download Resume
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-hair px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-cyan-accent/60 hover:text-cyan-accent"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
