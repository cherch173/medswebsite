import { useState, useRef, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
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
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
