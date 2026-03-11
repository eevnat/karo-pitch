/**
 * Startups page — full directory with:
 * • Live search (name / founder / description)
 * • Category filter pills
 * • Stage filter pills
 * • Empty state with clear-filters button
 */
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import StartupCard from '../components/StartupCard'
import { STARTUPS, CATEGORIES, STAGES } from '../data'

export default function Startups() {
  const [cat,   setCat]   = useState('All')
  const [stage, setStage] = useState('All Stages')
  const [query, setQuery] = useState('')

  const filtered = STARTUPS.filter(s => {
    const matchCat   = cat   === 'All'        || s.category === cat
    const matchStage = stage === 'All Stages' || s.stage    === stage
    const q = query.toLowerCase()
    const matchQ = !q ||
      s.name.toLowerCase().includes(q) ||
      s.founder.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q)
    return matchCat && matchStage && matchQ
  })

  const clearAll = () => { setCat('All'); setStage('All Stages'); setQuery('') }

  return (
    <main className="min-h-screen bg-gray-50 pt-16">

      {/* Dark page header */}
      <div className="relative overflow-hidden" style={{ background: '#1C1C1C' }}>
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{ background: 'radial-gradient(ellipse at 35% 50%,#FC433B,transparent 60%)' }}
        />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5"
          >
            <div>
              <span
                className="inline-block px-4 py-1.5 rounded-full text-[12px] font-display font-semibold uppercase tracking-widest mb-4"
                style={{ background: '#FC433B25', color: '#FC433B' }}
              >Startups Directory</span>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-tight">
                India's boldest<br />
                <span style={{ color: '#FC433B' }}>startups — live.</span>
              </h1>
              <p className="font-body text-white/50 text-base mt-3 max-w-lg">
                Browse our curated portfolio of high-potential startups actively seeking investment.
              </p>
            </div>
            <Link to="/apply" className="flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="px-6 py-3 rounded-xl font-display font-bold text-white text-sm"
                style={{ background: '#FC433B', boxShadow: '0 8px 24px rgba(252,67,59,.35)' }}
              >Apply to Pitch →</motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Sticky filter bar */}
      <div
        className="sticky top-16 z-30 bg-white border-b border-gray-100"
        style={{ boxShadow: '0 2px 16px rgba(0,0,0,.04)' }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex flex-col gap-3">
          {/* Search */}
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="text" value={query} onChange={e => setQuery(e.target.value)}
              placeholder="Search by startup name, founder, or keyword…"
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 font-body text-sm text-dark outline-none focus:border-[#FC433B] focus:ring-2 focus:ring-[#FC433B]/10 transition-all"
            />
            {query && (
              <button onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg">×</button>
            )}
          </div>

          {/* Pill filters */}
          <div className="flex flex-wrap gap-2 items-center">
            {CATEGORIES.map(c => (
              <motion.button
                key={c}
                whileTap={{ scale: .94 }}
                onClick={() => setCat(c)}
                className="px-3.5 py-1.5 rounded-full text-[12px] font-display font-semibold transition-all"
                style={cat === c
                  ? { background: '#FC433B', color: '#fff' }
                  : { background: '#F3F4F6', color: '#374151' }}
              >{c}</motion.button>
            ))}

            <div className="w-px h-5 bg-gray-200 mx-1 hidden sm:block" />

            {STAGES.map(s => (
              <motion.button
                key={s}
                whileTap={{ scale: .94 }}
                onClick={() => setStage(s)}
                className="px-3.5 py-1.5 rounded-full text-[12px] font-body font-medium border transition-all"
                style={stage === s
                  ? { background: '#1C1C1C', color: '#fff', borderColor: '#1C1C1C' }
                  : { background: '#fff', color: '#6B7280', borderColor: '#E5E7EB' }}
              >{s}</motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <p className="font-body text-sm text-gray-500">
            Showing <span className="font-semibold text-dark">{filtered.length}</span> startup{filtered.length !== 1 ? 's' : ''}
            {cat !== 'All' && ` in ${cat}`}
          </p>
          {(cat !== 'All' || stage !== 'All Stages' || query) && (
            <button onClick={clearAll} className="text-[12px] font-body text-[#FC433B] hover:underline">
              Clear all filters
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={cat + stage + query}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .25 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((s, i) => <StartupCard key={s.id} startup={s} index={i} />)}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center py-24 text-center gap-4"
            >
              <div className="text-5xl">🔍</div>
              <h3 className="font-display font-bold text-xl text-dark">No startups found</h3>
              <p className="font-body text-gray-400 text-sm max-w-xs">
                Try adjusting your filters or search query.
              </p>
              <motion.button
                whileHover={{ scale: 1.04 }}
                onClick={clearAll}
                className="mt-2 px-6 py-2.5 rounded-xl font-display font-semibold text-sm text-white"
                style={{ background: '#FC433B' }}
              >Clear Filters</motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
