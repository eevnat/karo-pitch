/**
 * Hero — white background, bold Syne display type, floating startup card,
 * staggered fade-in, stat row, dual CTAs.
 */
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/* Stagger container */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: .13 } },
}
const item = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: .7, ease: [.22,1,.36,1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-white dot-grid overflow-hidden"
      style={{ paddingTop: 64 }}
    >
      {/* Red blur blob top-right */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full opacity-[.07]"
        style={{ background: 'radial-gradient(circle,#FC433B,transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* ── Left copy ── */}
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-6">

          {/* Pill badge */}
          <motion.div variants={item}>
            <span
              className="inline-flex items-center gap-2 text-[13px] font-body font-medium px-4 py-1.5 rounded-full border"
              style={{ borderColor: '#FC433B40', background: '#FC433B0C', color: '#FC433B' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FC433B] animate-pulse" />
              India's #1 Startup Pitching Platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display font-extrabold text-5xl sm:text-6xl xl:text-7xl leading-[1.04] tracking-tight"
            style={{ color: '#1C1C1C' }}
          >
            Where Bold<br />
            Founders<br />
            <span style={{ color: '#FC433B' }}>Meet Capital.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p variants={item} className="font-body text-lg text-gray-500 leading-relaxed max-w-md">
            Karo Pitch connects ambitious Indian founders with investors who believe in transforming the startup ecosystem. Pitch your vision. Raise your round.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 pt-1">
            <Link to="/apply">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-bold text-white text-base"
                style={{ background: '#FC433B', boxShadow: '0 8px 28px rgba(252,67,59,.35)' }}
              >Apply to Pitch →</motion.button>
            </Link>
            <Link to="/startups">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-bold text-base border-2 hover:bg-dark hover:text-white transition-colors"
                style={{ background:'#1C1C1C', color: '#ffffff' , boxShadow: '0 8px 28px rgba(252,67,59,.35)'}}
              >Explore Startups</motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="flex gap-8 pt-4 border-t border-gray-100 mt-2">
            {[
              { v: '500+', l: 'Startups Pitched' },
              { v: '₹120 Cr', l: 'Funding Raised' },
              { v: '80+', l: 'Active Investors' },
            ].map(({ v, l }) => (
              <div key={l}>
                <div className="font-display font-extrabold text-2xl" style={{ color: '#1C1C1C' }}>{v}</div>
                <div className="text-[12px] font-body text-gray-400 mt-0.5">{l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right floating card ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .9, delay: .45, ease: [.22,1,.36,1] }}
          className="hidden lg:flex justify-center items-center"
        >
          <div className="relative w-full max-w-sm">
            {/* Main card */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="bg-white rounded-3xl p-7 relative z-10"
              style={{ boxShadow: '0 32px 80px rgba(0,0,0,.13)' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: 'linear-gradient(135deg,#FC433B22,#ff6b3522)' }}
                >💊</div>
                <div>
                  <div className="font-display font-bold text-dark text-sm">PharmaChain</div>
                  <div className="text-[11px] text-gray-400 font-body">HealthTech · Series A</div>
                </div>
                <span
                  className="ml-auto px-2.5 py-1 rounded-lg text-[11px] font-body font-semibold"
                  style={{ background: '#D1FAE5', color: '#065F46' }}
                >Funded ✓</span>
              </div>

              {/* Progress bar */}
              <div className="mb-5">
                <div className="flex justify-between text-[12px] font-body mb-1.5">
                  <span className="text-gray-400">Funding Goal</span>
                  <span className="font-semibold text-dark">₹3.2 Cr</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '82%' }}
                    transition={{ duration: 1.8, delay: 1.1 }}
                    className="h-2 rounded-full"
                    style={{ background: 'linear-gradient(90deg,#FC433B,#ff8c69)' }}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-gray-400 font-body mt-1">
                  <span>₹2.6 Cr raised</span><span>82 %</span>
                </div>
              </div>

              {/* Investor avatars */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['#FC433B','#1C1C1C','#7c3aed','#0ea5e9'].map((bg, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-display font-bold"
                      style={{ background: bg }}
                    >{['A','R','S','P'][i]}</div>
                  ))}
                  <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-body text-gray-500">+8</div>
                </div>
                <span className="text-[11px] text-gray-400 font-body">12 investors interested</span>
              </div>
            </motion.div>

            {/* Mini float cards */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: .6 }}
              className="absolute -top-10 -right-10 bg-white rounded-2xl px-4 py-3"
              style={{ boxShadow: '0 12px 32px rgba(0,0,0,.12)' }}
            >
              <div className="text-xl mb-0.5">💰</div>
              <div className="font-display font-bold text-sm text-dark">₹42 L</div>
              <div className="text-[11px] text-gray-400 font-body">avg deal size</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl px-4 py-3"
              style={{ boxShadow: '0 12px 32px rgba(0,0,0,.12)' }}
            >
              <div className="text-xl mb-0.5">⚡</div>
              <div className="font-display font-bold text-sm text-dark">48 hrs</div>
              <div className="text-[11px] text-gray-400 font-body">avg response</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
