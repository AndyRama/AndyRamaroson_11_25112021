import React from "react";
import "./Tags.scss";

/**
 * Render Tags Component
 * @param {object} props
 * @param {array} props.tags > get tag text from corresponding data
 * @returns {Reactnode} jsx in DOM html
*/

const Tags =( { getTag}) => {
  return(
    <div className="tag" >
      <p className="tag__text">{getTag}</p>
    </div>
  )
}

export default Tags