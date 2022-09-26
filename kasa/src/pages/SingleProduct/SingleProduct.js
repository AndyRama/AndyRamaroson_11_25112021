import React from 'react';

import { useParams } from "react-router-dom";

import './SingleProduct.scss'

import Footer from 'components/Footer/Footer';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Tags from 'components/Tags/Tags';

import Banner from "assets/images/HeroBanner.png";

var logements = require('data/logements.json');

function SingleProduct() {

  const { logementId } = useParams();
  const logement = logements.find((logement) => logement.id === logementId);
  const { title, location, rating, host, equipement, description, pictures } = logement;

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
        </div>

      </div>
      <Footer />
    </section>
  );
}


export default SingleProduct;