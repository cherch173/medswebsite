import { useState, useRef, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Tour from './pages/Tour'
import Bio from './pages/Bio'
import Nav from './components/Nav'
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
      <br />
      <main>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/bio" element={<Bio />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
