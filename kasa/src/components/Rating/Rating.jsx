import React from 'react'

import './Rating.scss'

import IconStarEmpty from 'components/Icons/StarEmpty'
import IconStarFull from 'components/Icons/StarFull'

/**
 * function Rating
 * @param {object} props
 * @param {integer} props.rating > number of stars
 * @param {Array} starsArray > display Araay of stars
 * @returns {Reactnode} jsx in DOM html
*/

function Rating(props) {
  const ratingNumber = props.rating;
  let starsArray = [];
 
  for (let i = 0; i < 5; i++) {
    i < ratingNumber
      ? starsArray.push(<IconStarFull  key={starsArray.toString()}/>) 
      : starsArray.push(<IconStarEmpty  key={starsArray.toString()}/> )
  }
  
  return (
    <div className="rate">
      <span>{starsArray}</span>
    </div>
  )
}

export default Rating