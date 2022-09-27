import React from "react";

import { useParams } from "react-router-dom";

import "./SingleProduct.scss";

import Collapse from "components/Collapse/Collapse";
import Footer from "components/Footer/Footer";
import Tags from "components/Tags/Tags";
import Slide from "components/Slide/Slide";


function SingleProduct() {
  var logements = require("data/logements.json");
  const { logementId } = useParams();
  const logement = logements.find((logement) => logement.id === logementId);
  const { title, location, rating, host, equipments, description, pictures } = logement;

  return (
    <section>
      <div className="singleproduct">
        <Slide Photos={pictures}/>
        <div className="singleproduct__content">
          <div className="singleproduct__information">
            <h1 className="singleproduct__title">{title}</h1>
            <p className="singleproduct__location">{location}</p>
            <div className="singleproduct__tags">
              {logement.tags.map((tag, index) => (
                <Tags key={index} getTag={tag} />
              ))}
            </div>
          </div>
          <div className="singleproduct__collapse">
            <Collapse title="description" text={description} />
            <Collapse title="équipement" text={equipments} />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default SingleProduct;
