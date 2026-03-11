import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar  from './components/Navbar'
import Footer  from './components/Footer'
import Home    from './pages/Home'
import Apply   from './pages/Apply'
import Startups from './pages/Startups'

/* Scroll to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/apply"    element={<Apply />} />
        <Route path="/startups" element={<Startups />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}
