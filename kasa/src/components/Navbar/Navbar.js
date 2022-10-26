import React from 'react'

import './Navbar.scss'
import Logo from 'assets/images/Logo.png'
import { Link, useLocation } from 'react-router-dom'

/**
 * @functtion NavBar
 * @param {object} props
 * @property {string} useLocation to navigate between home and about page
 * @returns {Reactnode} jsx injected in DOM
 */


function Navbar() {
  const location = useLocation()

  return (
    <header className="header">
      <nav className="Navbar">
        <img src={Logo} alt="Logo" />
        <div className="Nav-Buttons-Wrapper">
          <Link
            to="/"
            className={
              location.pathname === '/' ? 'home-page active' : 'home-page'
            }
            page="home"
          >
            Accueil
          </Link>
          <Link
            to="/About"
            className={
              location.pathname === '/About' ? 'about active' : 'about'
            }
          >
            A Propos
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
