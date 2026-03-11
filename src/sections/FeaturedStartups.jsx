/**
 * FeaturedStartups — shows first 6 startups with "View All" link.
 */
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import StartupCard from '../components/StartupCard'
import { STARTUPS } from '../data'

export default function FeaturedStartups() {
  const featured = STARTUPS.slice(0, 6)

  return (
    <section id="startups" className="py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-[12px] font-display font-semibold uppercase tracking-widest mb-4"
              style={{ background: '#FC433B15', color: '#FC433B' }}
            >Featured Startups</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-dark leading-tight">
              Startups on the<br />
              <span style={{ color: '#FC433B' }}>rise right now</span>
            </h2>
          </motion.div>

          <Link to="/startups" className="flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-3 rounded-xl font-display font-semibold text-sm border-2 hover:bg-dark hover:text-white transition-colors"
              style={{ borderColor: '#1C1C1C', color: '#1C1C1C' }}
            >View All Startups →</motion.button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((s, i) => <StartupCard key={s.id} startup={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
