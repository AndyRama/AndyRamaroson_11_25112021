import React from 'react';

import '../sass/04_component/_Footer.scss'
import Logo from "../asset/images/LogoFooter.png"

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <img src={Logo} alt="Logo" />
        <p>2021 Kasa. All rights reserved</p>
      </footer>
    )
  }
}

export default Footer