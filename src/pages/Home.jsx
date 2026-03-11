/**
 * Home page — assembles all sections in order.
 * Includes a scrolling marquee ticker and a final dark CTA before footer.
 */
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Hero             from '../sections/Hero'
import About            from '../sections/About'
import HowItWorks       from '../sections/HowItWorks'
import FeaturedStartups from '../sections/FeaturedStartups'
import Investors        from '../sections/Investors'

/* ── Ticker strip between sections ── */
const TICKER_ITEMS = [
  '🚀 500+ Startups Pitched',
  '💰 ₹120 Cr Raised',
  '🤝 80+ Active Investors',
  '⚡ 48-hr Review SLA',
  '🇮🇳 Pan-India Network',
  '📈 3x Avg Growth Post-Funding',
]

function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div
      className="py-4 overflow-hidden border-y border-gray-100"
      style={{ background: '#1C1C1C' }}
    >
      <div className="animate-ticker">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="inline-block px-8 text-[13px] font-display font-semibold text-white/70 whitespace-nowrap"
          >
            {t}
            <span className="ml-8 text-[#FC433B]">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Final CTA section ── */
function ClosingCTA() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: '#1C1C1C' }}
    >
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] opacity-25"
        style={{ background: 'radial-gradient(ellipse,#FC433B,transparent 70%)' }}
      />
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-[12px] font-display font-semibold uppercase tracking-widest mb-6"
            style={{ background: '#FC433B25', color: '#FC433B' }}
          >Get Started Today</span>
          <h2 className="font-display font-extrabold text-5xl sm:text-6xl text-white leading-tight mb-6">
            Your startup story<br />
            <span style={{ color: '#FC433B' }}>starts here.</span>
          </h2>
          <p className="font-body text-white/50 text-lg mb-10 leading-relaxed">
            Join hundreds of ambitious founders who've used Karo Pitch to raise their first round, find advisors, or simply get the right eyes on their idea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="px-10 py-4 rounded-xl font-display font-bold text-white text-base"
                style={{ background: '#FC433B', boxShadow: '0 8px 30px rgba(252,67,59,.4)' }}
              >Apply to Pitch →</motion.button>
            </Link>
            <Link to="/startups">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="px-10 py-4 rounded-xl font-display font-bold text-white text-base border border-white/20 hover:border-white/50 transition-colors"
              >Explore Startups</motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <About />
      <HowItWorks />
      <FeaturedStartups />
      <Investors />
      <ClosingCTA />
    </main>
  )
}
