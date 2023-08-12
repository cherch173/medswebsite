import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Burger from './Burger'
import SocialNav from './SocialNav'

const Nav = () => {
  const [burgerOpen, setBurgerOpen] = useState(false)

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen)
  }

  return (
      <div className="nav">
        <Burger />
        <ul>
          <Link to="/">HOME</Link>
          <Link to="/tour">TOUR DATES</Link>
          <Link to="/bio">BIO</Link>
          <Link to="/merch">MERCH</Link>
          <Link to="/contact">CONTACT</Link>
        </ul>
        <SocialNav />
        <div className="burger" onClick={toggleBurger}>
        </div>
      </div>
  )
}

export default Nav
