import { profile } from '../data/data.js'

export default function Footer() {
  return (
    <footer className="border-t border-slate-hair bg-midnight-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-white">{profile.name}</p>
          <p className="text-sm text-slate-500 mt-0.5">Software Engineer | AI/ML Enthusiast</p>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-400">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-accent transition-colors">
            LinkedIn
          </a>
          <span className="text-slate-700">·</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-accent transition-colors">
            GitHub
          </a>
          <span className="text-slate-700">·</span>
          <a href={`mailto:${profile.email}`} className="hover:text-cyan-accent transition-colors">
            Email
          </a>
        </div>
      </div>
      <div className="border-t border-slate-hair/60">
        <p className="max-w-7xl mx-auto px-5 sm:px-8 py-5 text-center text-xs text-slate-600">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
