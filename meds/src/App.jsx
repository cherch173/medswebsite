import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ReactGA from 'react-ga'
import Home from './pages/Home'
import Tour from './pages/Tour'
import Bio from './pages/Bio'
import Merch from './pages/Merch'
import Nav from './components/Nav'
import Contact from './pages/Contact'
import News from './components/News'
import PageNotFound from './pages/PageNotFound'
import Footer from './components/Footer'
import './App.css'

function App() {
  // initializing GA for metrics bb
  ReactGA.initialize('G-MWZRCQCMTS')

  // ping the site user's location using GA
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search)
  }, [location]);


  function handleClick() {
    // track a custom event with GA
    ReactGA.event({
      category: 'Button Click',
      action: 'Click on any Link',
      label: 'Link Tracking',
    })
    { onclick }
  }

  handleClick()

  const getYear = () => {
    return new Date().getUTCFullYear()
  }


  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
