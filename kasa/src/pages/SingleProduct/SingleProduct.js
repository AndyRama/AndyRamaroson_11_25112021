import React from 'react';

import { useParams } from "react-router-dom";

import './SingleProduct.scss'

// import heroBanner from 'components/heroBanner/heroBanner';
import Footer from 'components/Footer/Footer';
import Collapse from 'components/Collapse/Collapse';


var logements = require('data/logements.json');

function SingleProduct() {

  const { logementId } = useParams();
  const logement = logements.find((logement) => logement.id === logementId);
  // const { title, location, rating, host, equipement, description, pictures } = logement;

  const collapse = [
    {
      "title": "Description",
      "text": "Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied)."
    },
    {
      "title": "équipements",
      "text": "Climatisation Wi-Fi Cuisine Espace de travail Fer à repasser Sèche-cheveux Cintres"
    }

  ]

  return (
    <section>
      <div className="singleproduct">
        {/* "slider picture"  add component slider */}
        <div className="singleproduct__content">
          <div className="singleproduct__information">
            <h1 className="singleproduct__title">{logement.title}</h1>
            <p className="singleproduct__location">{logement.location}</p>
            {/* "Tags" add component tags */}
            {/* "Tags" add component tags */}
            <ul className="list-wrapper">
              {collapse.map((item, index) => (
                <Collapse title={item.title} text={item.text}/>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </section>

  );
}


export default SingleProduct;