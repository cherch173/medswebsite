import { useState, useRef, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Tour from './pages/Tour'
import Bio from './pages/Bio'
import Nav from './components/Nav'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const getYear = () => {
    return new Date().getUTCFullYear()
  }

  const [count, setCount] = useState(0)

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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer className="footer">
        © {getYear()} Cherch, all rights reserved
        <a className="footerLink" target="_blank" href="mailto:mmmedddsss@gmail.com">CONTACT</a>
      </footer>
    </div>
  )
}

export default App
