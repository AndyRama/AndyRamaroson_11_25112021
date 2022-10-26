import './PageNotFound.scss'
import React, { Component } from 'react';
import { Link } from "react-router-dom";

/**
 * Render Error component
 * @extends Component
 * @returns {Reactnode} jsx injected in DOM
 */

class PageNotFound extends Component {
  render() {
    return (
      <div className="page-not-found">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <div className="return-to-home">
          <Link to="/">Retourner sur la page d'acceuil</Link>
        </div>
      </div>
    )
  }
}
export default PageNotFound

