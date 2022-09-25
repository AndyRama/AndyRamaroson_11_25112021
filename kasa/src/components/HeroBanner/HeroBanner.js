import './HeroBanner.scss'

import React from "react";

const HeroBanner = ({ image }) => {
  return (
    <div className="herobanner">
      <img src={image} alt="" className="herobanner__img" />
    </div>
  );
};

export default HeroBanner;