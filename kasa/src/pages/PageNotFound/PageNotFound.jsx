import React from 'react';
import { Link } from "react-router-dom";
import './PageNotFound.scss'

function PageNotFound () {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <div className="return-to-home">
        <Link to="/">Retourner sur la page d'acceuil</Link>
      </div>
    </div>
  );  
}

export default PageNotFound
