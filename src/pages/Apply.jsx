/**
 * Apply page — application form with:
 * Founder Name, Email, Startup Name, Category, Stage,
 * Pitch Deck upload, Short Description.
 * On submit → animated success message.
 */
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CATEGORIES = [
  'FinTech','EdTech','HealthTech','AgriTech','CleanTech',
  'SaaS','E-Commerce','AI / ML','DeepTech','Logistics',
  'FoodTech','PropTech','HRTech','LegalTech','Other',
]
const STAGES = [
  'Pre-Seed (Idea Stage)',
  'Seed (Early Traction)',
  'Series A (Product-Market Fit)',
  'Series B (Scaling)',
]

/* Reusable label wrapper */
function Field({ label, required, hint, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-display font-semibold text-dark">
        {label} {required && <span className="text-[#FC433B]">*</span>}
      </label>
      {children}
      {hint && <p className="text-[11px] font-body text-gray-400">{hint}</p>}
    </div>
  )
}

const inputCls = `
  w-full px-4 py-3 rounded-xl border border-gray-200 bg-white
  font-body text-sm text-dark placeholder-gray-300
  outline-none transition-all
  focus:border-[#FC433B] focus:ring-2 focus:ring-[#FC433B]/10
`.replace(/\s+/g,' ')

/* ── Success screen ── */
function SuccessScreen({ onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: .9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: .5, ease: [.22,1,.36,1] }}
      className="flex flex-col items-center text-center py-16 px-6 gap-5"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: .2, type: 'spring', stiffness: 220 }}
        className="w-24 h-24 rounded-full flex items-center justify-center text-5xl"
        style={{ background: '#D1FAE5' }}
      >✅</motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .32 }}
        className="font-display font-extrabold text-3xl text-dark"
      >Application Submitted!</motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .42 }}
        className="font-body text-gray-500 text-base leading-relaxed max-w-sm"
      >
        Your startup application has been submitted successfully.<br />
        Our team will review it within 48 hours and reach out via email.
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .55 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={onReset}
        className="px-8 py-3.5 rounded-xl font-display font-bold text-white text-sm mt-2"
        style={{ background: '#FC433B', boxShadow: '0 8px 24px rgba(252,67,59,.3)' }}
      >Submit Another Application</motion.button>
    </motion.div>
  )
}

/* ── Main apply page ── */
export default function Apply() {
  const [done, setDone]       = useState(false)
  const [busy, setBusy]       = useState(false)
  const [fileName, setFile]   = useState('')
  const [form, setForm]       = useState({
    founderName:'', email:'', startupName:'',
    category:'', stage:'', website:'', description:'', deck: null,
  })

  const handle = (e) => {
    const { name, value, files } = e.target
    if (files) { setForm(f => ({...f, [name]: files[0]})); setFile(files[0]?.name || '') }
    else        { setForm(f => ({...f, [name]: value })) }
  }

  const submit = async (e) => {
    e.preventDefault()
    setBusy(true)
    await new Promise(r => setTimeout(r, 1800))   // simulate API
    setBusy(false)
    setDone(true)
  }

  const reset = () => {
    setDone(false); setFile('')
    setForm({ founderName:'', email:'', startupName:'', category:'', stage:'', website:'', description:'', deck: null })
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-16">

      {/* Dark page header */}
      <div className="relative overflow-hidden" style={{ background: '#1C1C1C' }}>
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{ background: 'radial-gradient(ellipse at 65% 50%,#FC433B,transparent 60%)' }}
        />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-[12px] font-display font-semibold uppercase tracking-widest mb-4"
              style={{ background: '#FC433B25', color: '#FC433B' }}
            >Apply to Pitch</span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-3 leading-tight">
              Tell us about<br />
              <span style={{ color: '#FC433B' }}>your startup</span>
            </h1>
            <p className="font-body text-white/50 text-base max-w-lg leading-relaxed">
              We review every application personally. Strong founders with a clear problem and early traction get priority.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Form card */}
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: .2 }}
          className="bg-white rounded-3xl border border-gray-100 overflow-hidden"
          style={{ boxShadow: '0 20px 60px rgba(0,0,0,.08)' }}
        >
          <AnimatePresence mode="wait">
            {done ? (
              <SuccessScreen key="success" onReset={reset} />
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={submit}
                className="p-8 sm:p-10 flex flex-col gap-6"
              >
                {/* Section: Founder */}
                <h2 className="font-display font-bold text-lg text-dark border-b border-gray-100 pb-3">
                  Founder Information
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Founder Name" required>
                    <input type="text" name="founderName" value={form.founderName}
                      onChange={handle} placeholder="e.g. Priya Sharma" required className={inputCls} />
                  </Field>
                  <Field label="Email Address" required>
                    <input type="email" name="email" value={form.email}
                      onChange={handle} placeholder="you@startup.com" required className={inputCls} />
                  </Field>
                </div>

                {/* Section: Startup */}
                <h2 className="font-display font-bold text-lg text-dark border-b border-gray-100 pb-3 mt-2">
                  Startup Details
                </h2>

                <Field label="Startup Name" required>
                  <input type="text" name="startupName" value={form.startupName}
                    onChange={handle} placeholder="e.g. FlowPay" required className={inputCls} />
                </Field>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Category" required>
                    <select name="category" value={form.category} onChange={handle} required className={inputCls} style={{ cursor:'pointer' }}>
                      <option value="" disabled>Select category</option>
                      {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </Field>
                  <Field label="Funding Stage" required>
                    <select name="stage" value={form.stage} onChange={handle} required className={inputCls} style={{ cursor:'pointer' }}>
                      <option value="" disabled>Select stage</option>
                      {STAGES.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </Field>
                </div>

                <Field label="Startup Website" hint="Optional — include if the product is live.">
                  <input type="url" name="website" value={form.website}
                    onChange={handle} placeholder="https://yourstartup.com" className={inputCls} />
                </Field>

                {/* Pitch Deck Upload */}
                <Field label="Pitch Deck" required hint="PDF, PPT or PPTX — max 20 MB.">
                  <label className="relative flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 border-dashed border-gray-200 cursor-pointer hover:border-[#FC433B]/50 hover:bg-[#FC433B]/[.03] transition-all">
                    <input type="file" name="deck" accept=".pdf,.ppt,.pptx"
                      onChange={handle} required className="absolute inset-0 opacity-0 cursor-pointer" />
                    <span className="text-xl flex-shrink-0">📎</span>
                    <span className="font-body text-sm text-gray-400 truncate flex-1">
                      {fileName || 'Click to upload your pitch deck'}
                    </span>
                    {fileName && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-body font-semibold text-white flex-shrink-0"
                        style={{ background: '#10b981' }}>✓ Attached</span>
                    )}
                  </label>
                </Field>

                {/* Description */}
                <Field label="Short Description" required
                  hint="Describe your startup in 2–4 sentences: problem, solution, and who it's for.">
                  <textarea
                    name="description" value={form.description} onChange={handle}
                    rows={4} required
                    placeholder="We're building... Our target customers are... We solve the problem of..."
                    className={inputCls}
                    style={{ resize:'vertical', minHeight:'100px' }}
                  />
                </Field>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={busy}
                  whileHover={{ scale: busy ? 1 : 1.02 }}
                  whileTap={{ scale: busy ? 1 : 0.98 }}
                  className="w-full py-4 rounded-xl font-display font-bold text-white text-base transition-all"
                  style={{
                    background: busy ? '#aaa' : '#FC433B',
                    boxShadow: busy ? 'none' : '0 8px 24px rgba(252,67,59,.3)',
                    cursor: busy ? 'not-allowed' : 'pointer',
                  }}
                >
                  {busy ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"/>
                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" className="opacity-75"/>
                      </svg>
                      Submitting…
                    </span>
                  ) : 'Submit Application →'}
                </motion.button>

                <p className="text-center text-[11px] text-gray-400 font-body -mt-2">
                  By submitting you agree to our{' '}
                  <a href="#" className="underline hover:text-[#FC433B] transition-colors">Terms</a>
                  {' '}and{' '}
                  <a href="#" className="underline hover:text-[#FC433B] transition-colors">Privacy Policy</a>.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  )
}
