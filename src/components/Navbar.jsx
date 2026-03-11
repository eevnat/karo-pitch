/**
 * Navbar — sticky, #1C1C1C background, red CTA, mobile hamburger.
 * Supports smooth-scroll to on-page sections when on Home route.
 */
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home',      to: '/' },
  { label: 'Startups',  to: '/startups' },
  { label: 'Apply',     to: '/apply' },
  { label: 'About',     section: 'about' },
  { label: 'Investors', section: 'investors' },
]

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location  = useLocation()
  const navigate  = useNavigate()

  /* shadow once user scrolls */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  /* close mobile menu on route change */
  useEffect(() => setOpen(false), [location.pathname])

  /* smooth-scroll helper — navigates to "/" first if needed */
  const scrollTo = (id) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 320)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-shadow duration-300"
      style={{
        background: '#1C1C1C',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,.45)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-2.5 select-none">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-extrabold text-white text-base"
            style={{ background: '#FC433B' }}
          >K</span>
          <span className="font-display font-bold text-white text-lg tracking-tight">
            Karo<span style={{ color: '#FC433B' }}>Pitch</span>
          </span>
        </Link>

        {/* ── Desktop links ── */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) =>
            l.section ? (
              <button
                key={l.label}
                onClick={() => scrollTo(l.section)}
                className="text-sm font-body font-medium text-white/70 hover:text-white transition-colors"
              >{l.label}</button>
            ) : (
              <Link
                key={l.label}
                to={l.to}
                className={`text-sm font-body font-medium transition-colors ${
                  location.pathname === l.to ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
              >{l.label}</Link>
            )
          )}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/apply">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-5 py-2 rounded-lg text-sm font-display font-semibold text-white"
              style={{ background: '#FC433B' }}
            >Apply to Pitch →</motion.button>
          </Link>
        </div>

        {/* ── Hamburger (mobile) ── */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{
                rotate: open ? (i === 0 ? 45 : i === 2 ? -45 : 0) : 0,
                y:      open ? (i === 0 ? 8  : i === 2 ? -8  : 0) : 0,
                opacity: open && i === 1 ? 0 : 1,
              }}
              className="block w-5 h-0.5 bg-white origin-center"
            />
          ))}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: .22 }}
            className="md:hidden overflow-hidden border-t border-white/10"
            style={{ background: '#1C1C1C' }}
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((l) =>
                l.section ? (
                  <button
                    key={l.label}
                    onClick={() => scrollTo(l.section)}
                    className="text-left py-2.5 text-white/70 hover:text-white font-body text-base transition-colors"
                  >{l.label}</button>
                ) : (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="py-2.5 text-white/70 hover:text-white font-body text-base transition-colors"
                  >{l.label}</Link>
                )
              )}
              <Link to="/apply" className="mt-3">
                <button
                  className="w-full py-3 rounded-xl text-sm font-display font-semibold text-white"
                  style={{ background: '#FC433B' }}
                >Apply to Pitch →</button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
