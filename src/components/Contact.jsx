import { useState } from 'react'
import { profile } from '../data/data.js'
import Reveal from './Reveal.jsx'

const fields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com' },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Role, opportunity, or question' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || `Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}`
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <p className="section-label mb-3">08 · Contact</p>
          <h2 className="section-heading mb-4 max-w-2xl">Let's build something together.</h2>
          <p className="text-slate-400 max-w-xl mb-16">
            I'm open to software engineering, AI/ML, and other technology opportunities where I
            can contribute, learn, and build impactful solutions.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
          <Reveal>
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 card-surface p-5 transition-all hover:border-cyan-accent/40 hover:-translate-y-0.5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/20">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="2" y="4" width="20" height="16" rx="2.5" />
                    <path d="M3 6.5l9 6.2 9-6.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-slate-500 font-mono">Email</p>
                  <p className="text-sm text-white break-all">{profile.email}</p>
                </div>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-4 card-surface p-5 transition-all hover:border-cyan-accent/40 hover:-translate-y-0.5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/20">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M4 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v4a2 2 0 0 1-2 2C9.5 20 4 14.5 4 7a2 2 0 0 1 0-4z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-slate-500 font-mono">Phone</p>
                  <p className="text-sm text-white">+91 {profile.phone}</p>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 card-surface p-5 transition-all hover:border-cyan-accent/40 hover:-translate-y-0.5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/20">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.52V23H.24V8.25zM8.25 8.25h4.33v2.01h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.93V23h-4.52v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23H8.25V8.25z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-slate-500 font-mono">LinkedIn</p>
                  <p className="text-sm text-white">Beeresh Muragannavar</p>
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 card-surface p-5 transition-all hover:border-cyan-accent/40 hover:-translate-y-0.5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/20">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.14c-3.16.69-3.83-1.36-3.83-1.36-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.65 1.24 3.3.95.1-.73.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.61 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.36-2.66 5.32-5.19 5.6.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-slate-500 font-mono">GitHub</p>
                  <p className="text-sm text-white">Beeresh0l</p>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="card-surface p-7 sm:p-9">
              <div className="grid sm:grid-cols-2 gap-5">
                {fields.slice(0, 2).map((f) => (
                  <div key={f.name} className={f.name === 'subject' ? 'sm:col-span-2' : ''}>
                    <label htmlFor={f.name} className="block text-xs font-mono text-slate-400 mb-2">
                      {f.label}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      value={form[f.name]}
                      onChange={handleChange}
                      className="w-full rounded-lg bg-midnight-800 border border-slate-hair px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-colors focus:border-cyan-accent/60"
                    />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-400 mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Role, opportunity, or question"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-midnight-800 border border-slate-hair px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-colors focus:border-cyan-accent/60"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me a bit about the role or project..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-midnight-800 border border-slate-hair px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-colors focus:border-cyan-accent/60 resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-cyan-accent px-7 py-3.5 text-sm font-semibold text-midnight-950 transition-all hover:shadow-cyan-glow hover:-translate-y-0.5"
              >
                Send Message
              </button>
              {sent && (
                <p className="mt-4 text-sm text-cyan-soft">
                  Opening your mail client with this message pre-filled — thanks for reaching out.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
