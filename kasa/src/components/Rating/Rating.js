import React from "react";

import "./Rating.scss"

import IconStarEmpty from "components/Icons/StarEmpty";
import IconStarFull from "components/Icons/StarFull";


function starRating() {

  const Rating = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
      <div className="rating">
        {stars.map((star) =>
          Rating >= star ? (
            <img
              key={star.toString()}
              className="rating__icon"
              src={IconStarFull}
              alt=""
            />
          ) : (
            <img
              key={star.toString()}
              className="rating__icon"
              src={IconStarEmpty}
              alt=""
            />
          )
        )}
      </div>
    )
  }
}

export default starRating


