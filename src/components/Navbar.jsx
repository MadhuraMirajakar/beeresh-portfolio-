import { useEffect, useState } from 'react'
import { profile } from '../data/data.js'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-midnight-950/85 backdrop-blur-md border-b border-slate-hair' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-display font-semibold text-lg tracking-tight text-white flex items-center gap-2">
          <span className="text-cyan-accent">&lt;</span>
          Beeresh
          <span className="text-cyan-accent">/&gt;</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 font-body text-sm text-slate-300">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 transition-colors hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-cyan-accent after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-cyan-accent px-5 py-2 text-sm font-medium text-midnight-950 transition-all hover:shadow-cyan-glow hover:-translate-y-0.5"
          >
            Download Resume
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-midnight-950/98 border-t border-slate-hair px-5 pb-6 pt-2">
          <ul className="flex flex-col gap-1 font-body text-base">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-3 text-slate-200 hover:text-cyan-accent transition-colors border-b border-slate-hair/60"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resumeUrl}
            download
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-accent px-5 py-3 text-sm font-medium text-midnight-950"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  )
}
