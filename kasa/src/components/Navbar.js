import React from 'react';
import '../sass/04_component/_Navbar.scss'
import Logo from "../asset/images/Logo.png"
import { Link } from 'react-router-dom'



class Navbar extends React.Component {
    render() {
      return (
        <header className="header">
            <nav className="Navbar">
                <img src={Logo} alt="Logo"/>
                <div className="Nav-Buttons-Wrapper">
                    <Link to="/" className="home-page">Accueil</Link>
                    <Link to="/About" className="about">A propos</Link>
                </div>
            </nav>
        </header>
      )
    }
  }

  export default Navbar;