import './Banner.scss'
import React from "react";

const Banner = ({ image, text, page }) => {

  let bannerClass = "";
  if(page === "about")  {
    bannerClass = "about";
  }

  return (
    <div className={`banner ${bannerClass}`}>
      <div className="banner__overlay">
      <img src={image} alt="" className="banner__img" />
        </div>        
      {text ? <h1 className="banner__text">{text}</h1> : null}
    </div>
  );
};

export default Banner;