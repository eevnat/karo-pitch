/* ──────────────────────────────────────────────
   DEMO DATA  —  startups & investors
   Edit this file to add / change entries.
   ────────────────────────────────────────────── */

export const STARTUPS = [
  {
    id: 1,
    name: 'PharmaChain',
    category: 'HealthTech',
    description:
      'Blockchain-powered pharma supply chain that guarantees drug authenticity and slashes counterfeit medicines across India\'s distribution network.',
    founder: 'Dr. Riya Sharma',
    stage: 'Series A',
    location: 'Bengaluru',
    raised: '₹3.2 Cr',
    emoji: '💊',
  },
  {
    id: 2,
    name: 'KisanMart',
    category: 'AgriTech',
    description:
      'Direct farmer-to-consumer marketplace eliminating middlemen, boosting farmer income by 40 % through transparent digital commerce.',
    founder: 'Arun Patel',
    stage: 'Seed',
    location: 'Pune',
    raised: '₹80 L',
    emoji: '🌾',
  },
  {
    id: 3,
    name: 'SkillBridge',
    category: 'EdTech',
    description:
      'AI-driven upskilling platform delivering job-ready vocational training in 12 vernacular languages to tier-2 and tier-3 India.',
    founder: 'Priya Nair',
    stage: 'Pre-Seed',
    location: 'Kochi',
    raised: '₹25 L',
    emoji: '🎓',
  },
  {
    id: 4,
    name: 'FlowPay',
    category: 'FinTech',
    description:
      'Embedded finance infrastructure giving SMEs instant working-capital loans by using real-time GST data as smart collateral.',
    founder: 'Rahul Mehta',
    stage: 'Series A',
    location: 'Mumbai',
    raised: '₹5.5 Cr',
    emoji: '💳',
  },
  {
    id: 5,
    name: 'SolarGrid',
    category: 'CleanTech',
    description:
      'Peer-to-peer solar energy trading that lets rooftop owners sell surplus power to neighbors via a tamper-proof smart-grid protocol.',
    founder: 'Ananya Singh',
    stage: 'Seed',
    location: 'Jaipur',
    raised: '₹1.1 Cr',
    emoji: '☀️',
  },
  {
    id: 6,
    name: 'LogiQ',
    category: 'Logistics',
    description:
      'ML-powered last-mile delivery optimisation that cuts D2C shipping costs by 30 % with dynamic route intelligence.',
    founder: 'Karan Bhatia',
    stage: 'Series A',
    location: 'Delhi',
    raised: '₹4 Cr',
    emoji: '🚚',
  },
  {
    id: 7,
    name: 'NeuralDx',
    category: 'AI / ML',
    description:
      'Medical AI assistant that diagnoses rare diseases from symptom data with 94 % accuracy — built for India\'s under-served rural clinics.',
    founder: 'Dr. Vikram Iyer',
    stage: 'Seed',
    location: 'Hyderabad',
    raised: '₹90 L',
    emoji: '🧠',
  },
  {
    id: 8,
    name: 'NestCommerce',
    category: 'E-Commerce',
    description:
      'Social commerce super-app empowering tier-2 homemakers to sell curated lifestyle products through WhatsApp communities.',
    founder: 'Sunita Rao',
    stage: 'Pre-Seed',
    location: 'Nagpur',
    raised: '₹15 L',
    emoji: '🛍️',
  },
  {
    id: 9,
    name: 'BuildStack',
    category: 'SaaS',
    description:
      'No-code construction management platform — track projects, manage contractors, and invoice clients from one clean dashboard.',
    founder: 'Meera Joshi',
    stage: 'Bootstrap',
    location: 'Chennai',
    raised: 'Self-funded',
    emoji: '🏗️',
  },
]

export const INVESTORS = [
  {
    id: 1,
    name: 'Arjun Kapoor',
    type: 'Angel Investor',
    sectors: ['FinTech', 'SaaS', 'AI / ML'],
    bio: 'Serial entrepreneur with 3 exits. Former VP at Razorpay. Writes ₹25 L–₹1 Cr cheques for B2B SaaS and FinTech founders with exceptional velocity.',
    portfolio: 24,
    emoji: '🦁',
  },
  {
    id: 2,
    name: 'Neha Gupta',
    type: 'Venture Capital',
    sectors: ['EdTech', 'HealthTech', 'CleanTech'],
    bio: 'Principal at Blume Ventures. IIM-A MBA. Passionate about impact-first startups solving Bharat-scale problems with lean, resilient teams.',
    portfolio: 18,
    emoji: '🚀',
  },
  {
    id: 3,
    name: 'Sameer Malhotra',
    type: 'Angel Investor',
    sectors: ['AgriTech', 'Logistics', 'E-Commerce'],
    bio: 'Ex-BCG consultant. Co-founder of an agri-platform acquired by ITC. Mentors 40+ founders a year. Backs rural India\'s digital transformation.',
    portfolio: 31,
    emoji: '🌱',
  },
  {
    id: 4,
    name: 'Priya Venkataraman',
    type: 'Venture Capital',
    sectors: ['DeepTech', 'AI / ML', 'HealthTech'],
    bio: 'MD at Sequoia Surge. IIT-Delhi. Focuses on deep-tech and AI startups with global ambitions — particularly excited by India-first problem statements.',
    portfolio: 42,
    emoji: '⚡',
  },
  {
    id: 5,
    name: 'Rohit Oberoi',
    type: 'Family Office',
    sectors: ['FinTech', 'E-Commerce', 'SaaS'],
    bio: 'Managing Partner, Oberoi Family Office. Patient capital with hands-on mentorship. Deploys ₹2–20 Cr tickets at Series A+ with strong founder alignment.',
    portfolio: 15,
    emoji: '🏛️',
  },
  {
    id: 6,
    name: 'Divya Krishnan',
    type: 'Corporate VC',
    sectors: ['CleanTech', 'AgriTech', 'Logistics'],
    bio: 'Head of Innovation Investments at Tata Capital Ventures. Identifies strategic bets aligned with sustainability and supply-chain transformation.',
    portfolio: 29,
    emoji: '🌍',
  },
]

export const CATEGORIES = [
  'All',
  'HealthTech',
  'AgriTech',
  'EdTech',
  'FinTech',
  'CleanTech',
  'Logistics',
  'AI / ML',
  'E-Commerce',
  'SaaS',
]

export const STAGES = ['All Stages', 'Pre-Seed', 'Seed', 'Series A', 'Bootstrap']

/* Badge colour per funding stage */
export const STAGE_STYLE = {
  'Pre-Seed': { bg: '#FEF3C7', fg: '#92400E' },
  'Seed':     { bg: '#D1FAE5', fg: '#065F46' },
  'Series A': { bg: '#DBEAFE', fg: '#1E40AF' },
  'Series B': { bg: '#EDE9FE', fg: '#5B21B6' },
  Bootstrap:  { bg: '#F3F4F6', fg: '#374151' },
}

/* Gradient per category (for card accent) */
export const CATEGORY_GRAD = {
  HealthTech:  ['#FC433B', '#ff8c69'],
  AgriTech:    ['#16a34a', '#4ade80'],
  EdTech:      ['#7c3aed', '#a78bfa'],
  FinTech:     ['#0ea5e9', '#38bdf8'],
  CleanTech:   ['#f59e0b', '#fbbf24'],
  Logistics:   ['#1C1C1C', '#6b7280'],
  'AI / ML':   ['#6366f1', '#a855f7'],
  'E-Commerce':['#ec4899', '#f472b6'],
  SaaS:        ['#0891b2', '#22d3ee'],
  DeepTech:    ['#DC2626', '#f87171'],
}
