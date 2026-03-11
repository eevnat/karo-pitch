/**
 * HowItWorks — 4-step visual process with connecting line on desktop.
 */
import { motion } from 'framer-motion'

const STEPS = [
  { n: '01', emoji: '📝', title: 'Submit Application',      desc: 'Fill our streamlined form — startup details, team, and deck. Takes less than 10 minutes.' },
  { n: '02', emoji: '🔍', title: 'Expert Review',           desc: 'Our panel reviews within 48 hours and gives you candid, constructive feedback.' },
  { n: '03', emoji: '🎯', title: 'Investor Matching',       desc: 'If selected, we match you with investors based on your sector, stage, and deal size.' },
  { n: '04', emoji: '🤝', title: 'Pitch & Close',           desc: 'Structured pitch session + hands-on support through term sheets and closing.' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: .55, delay, ease: [.22,1,.36,1] },
})

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden">
      {/* Subtle red blur */}
      <div
        className="pointer-events-none absolute -translate-x-1/2 left-1/2 w-96 h-96 rounded-full opacity-[.05]"
        style={{ background: '#FC433B', filter: 'blur(100px)' }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-[12px] font-display font-semibold uppercase tracking-widest mb-4"
            style={{ background: '#FC433B15', color: '#FC433B' }}
          >How It Works</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-dark leading-tight">
            From idea to investment<br />
            <span style={{ color: '#FC433B' }}>in 4 steps</span>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-px pointer-events-none"
            style={{ background: 'linear-gradient(90deg,transparent,#FC433B80,transparent)' }}
          />

          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              {...fadeUp(i * .11)}
              className="flex flex-col items-center text-center gap-4"
            >
              {/* Numbered icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 6 }}
                className="w-[68px] h-[68px] rounded-2xl flex items-center justify-center text-2xl border-2 bg-white relative z-10"
                style={{ borderColor: '#FC433B', boxShadow: '0 8px 24px rgba(252,67,59,.15)' }}
              >{s.emoji}</motion.div>

              <span className="font-display font-extrabold text-[13px]" style={{ color: '#FC433B' }}>{s.n}</span>
              <h3 className="font-display font-bold text-dark text-base leading-tight">{s.title}</h3>
              <p className="text-[13px] font-body text-gray-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
