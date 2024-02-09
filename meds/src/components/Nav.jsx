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
      <div className="burger" onClick={toggleBurger}>
        <Burger />
      </div>
      <Link className="navA" to="/">HOME</Link>
      <Link className="navA" to="/tour">TOUR DATES</Link>
      <Link className="navA" to="/news">NEWS</Link>
      <Link className="navA" to="/bio">BIO</Link>
      <Link className="navA" to="/merch">MERCH</Link>
      <Link className="navA" to="/contact">CONTACT</Link>
      <br />
      <br />
      <SocialNav />
    </div>
  )
}

export default Nav
