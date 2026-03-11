# 🚀 Karo Pitch

> **India's most ambitious startup pitching platform.**  
> Connect visionary founders with investors who believe in their mission.

**Link** : https://karo-pitch-five.vercel.app/

Built with **React 18 + Vite + Tailwind CSS + Framer Motion + React Router v6**.

---

## 📁 Project Structure

```
karo-pitch/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky dark navbar + mobile hamburger
│   │   ├── Footer.jsx          # Multi-column footer, social links, copyright
│   │   ├── StartupCard.jsx     # Reusable startup card (logo, badge, CTA)
│   │   └── InvestorCard.jsx    # Reusable investor card (bio, sectors, CTA)
│   ├── pages/
│   │   ├── Home.jsx            # Landing page — assembles all sections
│   │   ├── Apply.jsx           # Application form + animated success screen
│   │   └── Startups.jsx        # Searchable, filterable startup directory
│   ├── sections/
│   │   ├── Hero.jsx            # Hero + floating card + staggered animation
│   │   ├── About.jsx           # "Why Karo Pitch" feature grid
│   │   ├── HowItWorks.jsx      # 4-step process
│   │   ├── FeaturedStartups.jsx# Homepage startup grid (6 cards)
│   │   └── Investors.jsx       # Investor profiles grid
│   ├── App.jsx                 # Router root
│   ├── data.js                 # All demo content (edit to customise)
│   ├── index.css               # Global styles + Tailwind directives
│   └── main.jsx                # React entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml                # SPA routing fix for Netlify
└── package.json
```

---

## 🎨 Design Decisions

| Token          | Value                 |
|----------------|-----------------------|
| Navbar BG      | `#1C1C1C`             |
| Primary Red    | `#FC433B`             |
| Dark Text      | `#1C1C1C`             |
| Display Font   | **Syne** (Google)     |
| Body Font      | **DM Sans** (Google)  |
| Motion Library | **Framer Motion 11**  |

---

## ⚙️ Tech Stack

| Tool              | Version  | Purpose                       |
|-------------------|----------|-------------------------------|
| React             | 18.x     | UI framework                  |
| Vite              | 5.x      | Dev server & bundler          |
| Tailwind CSS      | 3.x      | Utility-first styling         |
| Framer Motion     | 11.x     | Scroll animations, hover FX   |
| React Router DOM  | 6.x      | Client-side routing           |

---
## How Does This Looks

<img width="1920" height="1080" alt="Screenshot 2026-03-11 124442" src="https://github.com/user-attachments/assets/5a59605c-9ded-4a21-b2d5-b80b2b1c471a" />

<img width="1920" height="1080" alt="Screenshot 2026-03-11 124518" src="https://github.com/user-attachments/assets/bb92f705-2c23-446e-a040-5e8148092657" />

<img width="1920" height="1080" alt="Screenshot 2026-03-11 124547" src="https://github.com/user-attachments/assets/08c48746-47bf-4319-886a-4c8516db7aae" />

<img width="1920" height="1080" alt="Screenshot 2026-03-11 124617" src="https://github.com/user-attachments/assets/24f8c88e-2a85-4690-b972-f8c898d88767" />

<img width="1920" height="1080" alt="Screenshot 2026-03-11 124641" src="https://github.com/user-attachments/assets/bb7a556c-bb1d-41f9-ae61-6f464453302b" />

<img width="1920" height="1080" alt="Screenshot 2026-03-11 124701" src="https://github.com/user-attachments/assets/afa36cf6-bf48-4535-a3ee-80ee34fd09f9" />

<img width="1919" height="504" alt="Screenshot 2026-03-11 124718" src="https://github.com/user-attachments/assets/40cf6b90-334b-4448-bc0e-336670cd956b" />

## 💻 How to Download & Run Locally

### Prerequisites
- **Node.js** v18 or higher → https://nodejs.org  
- **npm** v9+ (bundled with Node)
- A code editor (**VS Code** recommended)

---

### Step 1 — Download the project

**Option A — Clone with Git**
```bash
git clone https://github.com/YOUR_USERNAME/karo-pitch.git
cd karo-pitch
```

**Option B — Download ZIP**
1. Click **Code → Download ZIP** on GitHub
2. Unzip the folder
3. Open terminal and `cd` into it:
```bash
cd karo-pitch
```

---

### Step 2 — Install dependencies

```bash
npm install
```

This installs React, Vite, Tailwind CSS, Framer Motion, and React Router.

---

### Step 3 — Run the dev server

```bash
npm run dev
```

Open your browser: **http://localhost:5173**

The app hot-reloads automatically on every file change.

---

### Step 4 — Build for production

```bash
npm run build
```

Output: `dist/` folder — ready to deploy anywhere.

Preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deployment Guide

### 🔷 Vercel (Recommended — 60-second deploy)

**Via Vercel CLI:**
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login
vercel login

# Deploy (run from project root)
vercel

# Answer the prompts:
# Set up and deploy: Y
# Link to existing project: N
# Project name: karo-pitch
# Directory: ./
# Override build settings: N

# → Your site is live at https://karo-pitch.vercel.app
```

**Via Vercel Dashboard (no CLI):**
1. Push code to GitHub
2. Go to https://vercel.com → sign in with GitHub
3. Click **"New Project"** → select `karo-pitch`
4. Vercel auto-detects Vite — click **"Deploy"** ✅

Every `git push` to `main` triggers an automatic redeploy.

---


### 🐙 GitHub Pages

```bash
# 1. Install gh-pages
npm install --save-dev gh-pages

# 2. Add to package.json → "scripts":
#    "predeploy": "npm run build",
#    "deploy": "gh-pages -d dist"

# 3. Add to vite.config.js:
#    base: '/karo-pitch/'   ← use your exact repo name

# 4. Deploy
npm run deploy
```

Enable Pages in your repo: **Settings → Pages → Source: gh-pages branch**

Live URL: `https://YOUR_USERNAME.github.io/karo-pitch`

---

## 🛠️ Customisation

### Add / edit startups or investors
Open `src/data.js` and add entries to the `STARTUPS` or `INVESTORS` arrays.

### Change the colour palette
- Primary red: search-replace `#FC433B`
- Dark: search-replace `#1C1C1C`

### Change fonts
Edit the Google Fonts `<link>` in `index.html` and update `tailwind.config.js → fontFamily`.

### Environment variables
```bash
# .env  (project root)
VITE_API_URL=https://your-backend.com
```
Access in code: `import.meta.env.VITE_API_URL`

---

## 📄 License

MIT — free for personal and commercial use.

---

Built with ❤️ for India's founders by **Karo Pitch**.
