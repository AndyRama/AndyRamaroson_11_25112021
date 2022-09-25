import React from 'react';

import { useParams } from "react-router-dom";

import './SingleProduct.scss'

import Footer from 'components/Footer/Footer';
import Collapse from 'components/Collapse/Collapse';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Tags from 'components/Tags/Tags';
import Rating from "components/Rating/Rating";

import Banner from "assets/images/HeroBanner.png";
import IconStarFull from 'components/Icons/StarFull';
import IconStarEmpty from 'components/Icons/StarEmpty';

var logements = require('data/logements.json');

function SingleProduct() {

  const { logementId } = useParams();
  const logement = logements.find((logement) => logement.id === logementId);
  const { title, location, rating, host, equipement, description, pictures } = logement;

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
        <HeroBanner image={Banner} />
        <div className="singleproduct__content">
          <div className="singleproduct__information">
            <h1 className="singleproduct__title">{logement.title}</h1>
            <p className="singleproduct__location">{logement.location}</p>
            <div className="singleproduct__tags">
              {logement.tags.map((tag, index) => (
                <Tags key={index} getTag={tag} />
              ))}
            </div>
          </div>
          <div className="singleproduct__rating-and-host">
            <Rating rating={rating} />
          </div>
          {/* <ul className="list-wrapper">
            {collapse.map((item, index) => (
              <Collapse title={item.title} text={item.text} />
            ))}
          </ul> */}
        </div>
      </div>
      <Footer />
    </section>

  );
}


export default SingleProduct;