import React from 'react';

import './Footer.scss'
import Logo from "assets/images/LogoFooter.png"

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <img src={Logo} alt="Logo" />
        <p>2022 Kasa. All rights reserved</p>
      </footer>
    )
  }
}

export default Footer