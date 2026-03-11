/**
 * Investors — full investor grid with "Join as Investor" CTA.
 */
import { motion } from 'framer-motion'
import InvestorCard from '../components/InvestorCard'
import { INVESTORS } from '../data'

export default function Investors() {
  return (
    <section id="investors" className="py-24 bg-white overflow-hidden">
      {/* Blob */}
      <div
        className="pointer-events-none absolute right-0 -translate-y-1/2 w-96 h-96 rounded-full opacity-[.05]"
        style={{ background: '#FC433B', filter: 'blur(100px)' }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-[12px] font-display font-semibold uppercase tracking-widest mb-4"
            style={{ background: '#FC433B15', color: '#FC433B' }}
          >Our Investors</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-dark leading-tight">
            Backed by the best<br />
            <span style={{ color: '#FC433B' }}>minds in the game</span>
          </h2>
          <p className="mt-4 text-gray-500 font-body text-lg max-w-xl mx-auto">
            Our network spans top-tier VCs, serial angels, family offices, and corporate funds, actively deploying capital across India.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INVESTORS.map((inv, i) => <InvestorCard key={inv.id} investor={inv} index={i} />)}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6, delay: .3 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-500 font-body text-base mb-4">
            Investor looking for curated deal-flow from India's top emerging startups?
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3.5 rounded-xl font-display font-bold text-white text-sm"
            style={{ background: '#1C1C1C', boxShadow: '0 8px 24px rgba(0,0,0,.18)' }}
          >Join as an Investor →</motion.button>
        </motion.div>
      </div>
    </section>
  )
}
