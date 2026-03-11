/**
 * StartupCard — reusable card with gradient avatar, category tag,
 * funding-stage badge, founder name, and "View Details" button.
 */
import { motion } from 'framer-motion'
import { STAGE_STYLE, CATEGORY_GRAD } from '../data'

export default function StartupCard({ startup, index = 0 }) {
  const { name, category, description, founder, stage, emoji } = startup
  const badge = STAGE_STYLE[stage] ?? STAGE_STYLE['Bootstrap']
  const [g1, g2] = CATEGORY_GRAD[category] ?? ['#FC433B', '#ff6b35']

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: .5, delay: index * .07, ease: [.22,1,.36,1] }}
      whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(0,0,0,.1)' }}
      className="bg-white rounded-2xl border border-gray-100 flex flex-col overflow-hidden"
      style={{ boxShadow: '0 4px 20px rgba(0,0,0,.06)' }}
    >
      {/* Gradient top stripe */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg,${g1},${g2})` }} />

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* Header row */}
        <div className="flex items-start gap-3">
          {/* Logo placeholder */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: `linear-gradient(135deg,${g1}22,${g2}22)` }}
          >
            {emoji}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold text-dark text-[15px] leading-tight truncate">
              {name}
            </h3>
            {/* Category tag */}
            <span
              className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[11px] font-display font-semibold text-white"
              style={{ background: g1 }}
            >{category}</span>
          </div>

          {/* Funding stage badge */}
          <span
            className="flex-shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-body font-semibold"
            style={{ background: badge.bg, color: badge.fg }}
          >{stage}</span>
        </div>

        {/* Description */}
        <p className="text-[13px] font-body text-gray-500 leading-relaxed line-clamp-2 flex-1">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          {/* Founder avatar + name */}
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-display font-bold"
              style={{ background: '#1C1C1C' }}
            >
              {founder.split(' ').map(w => w[0]).join('').slice(0, 2)}
            </div>
            <span className="text-[12px] font-body text-gray-500 truncate max-w-[110px]">{founder}</span>
          </div>

          {/* View details */}
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="text-[12px] font-display font-semibold px-3 py-1.5 rounded-lg text-white transition-opacity"
            style={{ background: '#FC433B' }}
          >View Details</motion.button>
        </div>
      </div>
    </motion.article>
  )
}
