/**
 * About — "Why Karo Pitch" feature grid + embedded dark CTA banner.
 */
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const FEATURES = [
  { emoji: '🎯', title: 'Curated Matching',    desc: 'Our algorithm pairs your startup with investors actively investing in your sector and stage — no spray-and-pray.' },
  { emoji: '🤝', title: 'Warm Introductions',  desc: 'We make direct, personalised intros that lead to real conversations, not cold-email black holes.' },
  { emoji: '📊', title: 'Data-Driven Feedback',desc: 'Get actionable feedback on your pitch deck and financials from seasoned entrepreneurs before you hit the room.' },
  { emoji: '🚀', title: 'Growth Community',    desc: 'Beyond funding — access our network of 200+ mentors, advisors, and fellow founders for ongoing support.' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: .6, delay, ease: [.22,1,.36,1] },
})

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F8F8F8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-[12px] font-display font-semibold uppercase tracking-widest mb-4"
            style={{ background: '#FC433B15', color: '#FC433B' }}
          >Why Karo Pitch</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-dark leading-tight">
            The smartest way to<br />
            <span style={{ color: '#FC433B' }}>fund your startup</span>
          </h2>
          <p className="mt-4 text-gray-500 font-body text-lg max-w-xl mx-auto">
            We've rebuilt fundraising from scratch : faster, fairer, and fully transparent.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              {...fadeUp(i * .09)}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-gray-100"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,.05)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: '#FC433B0F' }}
              >{f.emoji}</div>
              <div>
                <h3 className="font-display font-bold text-dark text-[15px] mb-1.5">{f.title}</h3>
                <p className="text-gray-500 text-[13px] font-body leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dark CTA band */}
        <motion.div
          {...fadeUp(.25)}
          className="mt-14 rounded-3xl p-10 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative"
          style={{ background: '#1C1C1C' }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{ background: 'radial-gradient(ellipse at 80% 50%, #FC433B, transparent 60%)' }}
          />
          <div className="relative z-10">
            <h3 className="font-display font-extrabold text-white text-2xl sm:text-3xl">
              Ready to raise your round?
            </h3>
            <p className="text-white/50 font-body text-sm mt-1">
              500+ founders have already pitched on Karo Pitch.
            </p>
          </div>
          <Link to="/apply" className="relative z-10 flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-3.5 rounded-xl font-display font-bold text-white text-sm"
              style={{ background: '#FC433B', boxShadow: '0 8px 24px rgba(252,67,59,.4)' }}
            >Start Your Application →</motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
