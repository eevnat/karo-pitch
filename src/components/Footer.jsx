/**
 * Footer — dark (#1C1C1C), red accents, multi-column links, socials, copyright.
 */
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const COLS = {
  Platform: [
    { label: 'Home',      to: '/' },
    { label: 'Startups',  to: '/startups' },
    { label: 'Apply',     to: '/apply' },
    { label: 'Investors', to: '/#investors' },
  ],
  Company: [
    { label: 'About',    to: '/#about' },
    { label: 'Careers',  to: '#' },
    { label: 'Press',    to: '#' },
    { label: 'Blog',     to: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy',   to: '#' },
    { label: 'Terms of Service', to: '#' },
    { label: 'Cookie Policy',    to: '#' },
  ],
}

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/karo-startup/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  { label: 'X / Twitter', href: 'https://x.com/karo_startup', icon: ( <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/> </svg> ), },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@karostartup/videos',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a2.973 2.973 0 00-2.09-2.103C19.548 3.5 12 3.5 12 3.5s-7.548 0-9.408.583a2.973 2.973 0 00-2.09 2.103A31.337 31.337 0 000 12a31.337 31.337 0 00.502 5.814 2.973 2.973 0 002.09 2.103C4.452 20.5 12 20.5 12 20.5s7.548 0 9.408-.583a2.973 2.973 0 002.09-2.103A31.337 31.337 0 0024 12a31.337 31.337 0 00-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z"/>
      </svg>
    ),
  },

  {
    label: 'Facebook',
    href: 'https://www.facebook.com/karostartup',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.407.595 24 1.326 24h11.495v-9.294H9.692V11.01h3.129V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.764v2.314h3.587l-.467 3.696h-3.12V24h6.116C23.405 24 24 23.407 24 22.674V1.326C24 .592 23.405 0 22.675 0z"/>
      </svg>
    ),
  },

  { label: 'Instagram', href: 'https://www.instagram.com/karo_startup_/', icon: ( <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/> </svg> ), },

  {
    label: 'Website',
    href: 'http://karostartup.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 
        10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 017.446 
        5H4.554A8 8 0 0112 4zm0 16a8 8 0 
        01-7.446-5h14.892A8 8 0 0112 20z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#1C1C1C' }}>
      {/* Red top accent line */}
      <div className="h-px" style={{ background: 'linear-gradient(90deg,transparent,#FC433B,transparent)' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2.5 w-fit">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-extrabold text-white text-base"
                style={{ background: '#FC433B' }}
              >K</span>
              <span className="font-display font-bold text-white text-lg">
                Karo<span style={{ color: '#FC433B' }}>Pitch</span>
              </span>
            </Link>

            <p className="text-white/50 text-sm font-body leading-relaxed max-w-xs">
              India's most ambitious startup pitching platform connecting visionary founders with investors who believe in the future.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-1">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.15 }}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-[#FC433B] hover:border-[#FC433B]/40 transition-colors"
                >{s.icon}</motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(COLS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-white text-xs uppercase tracking-widest mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm font-body text-white/50 hover:text-[#FC433B] transition-colors"
                    >{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs font-body">
            © {new Date().getFullYear()} Karo Pitch. All rights reserved.
          </p>
          <p className="text-white/20 text-xs font-body">
            Built with ❤️ for India's founders
          </p>
        </div>
      </div>
    </footer>
  )
}
