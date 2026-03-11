/**
 * InvestorCard — investor profile with avatar, type badge,
 * sector chips, short bio, and "View Profile" CTA.
 */
import { motion } from 'framer-motion'

const TYPE_STYLE = {
  'Angel Investor': { bg: '#FEF3C7', fg: '#92400E' },
  'Venture Capital':{ bg: '#DBEAFE', fg: '#1E40AF' },
  'Family Office':  { bg: '#EDE9FE', fg: '#5B21B6' },
  'Corporate VC':   { bg: '#D1FAE5', fg: '#065F46' },
}

const AVATAR_GRADS = [
  ['#FC433B','#ff8c69'],
  ['#1C1C1C','#6b7280'],
  ['#16a34a','#4ade80'],
  ['#0ea5e9','#6366f1'],
  ['#7c3aed','#db2777'],
  ['#f59e0b','#ef4444'],
]

export default function InvestorCard({ investor, index = 0 }) {
  const { name, type, sectors, bio, portfolio, emoji } = investor
  const badge = TYPE_STYLE[type] ?? TYPE_STYLE['Angel Investor']
  const [g1, g2] = AVATAR_GRADS[index % AVATAR_GRADS.length]

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: .5, delay: index * .07, ease: [.22,1,.36,1] }}
      whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(0,0,0,.1)' }}
      className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-4"
      style={{ boxShadow: '0 4px 20px rgba(0,0,0,.06)' }}
    >
      {/* Header */}
      <div className="flex items-start gap-4">
        {/* Photo placeholder */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
          style={{ background: `linear-gradient(135deg,${g1}22,${g2}22)` }}
        >{emoji}</div>

        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-dark text-[15px] leading-tight">{name}</h3>
          <span
            className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-body font-semibold"
            style={{ background: badge.bg, color: badge.fg }}
          >{type}</span>
        </div>

        {/* Portfolio count */}
        <div className="text-right flex-shrink-0">
          <div className="font-display font-extrabold text-xl" style={{ color: '#FC433B' }}>
            {portfolio}+
          </div>
          <div className="text-[11px] font-body text-gray-400">Portfolio</div>
        </div>
      </div>

      {/* Bio */}
      <p className="text-[13px] font-body text-gray-500 leading-relaxed line-clamp-2">{bio}</p>

      {/* Sector chips */}
      <div className="flex flex-wrap gap-1.5">
        {sectors.map(s => (
          <span
            key={s}
            className="px-2.5 py-1 rounded-lg text-[11px] font-body font-medium border"
            style={{ borderColor: '#FC433B30', background: '#FC433B08', color: '#FC433B' }}
          >{s}</span>
        ))}
      </div>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.02, background: '#FC433B', color: '#fff' }}
        whileTap={{ scale: 0.97 }}
        className="w-full py-2.5 rounded-xl text-[13px] font-display font-semibold border-2 transition-colors"
        style={{ borderColor: '#FC433B', color: '#FC433B' }}
      >View Profile</motion.button>
    </motion.article>
  )
}
