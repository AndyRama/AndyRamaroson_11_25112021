import './Banner.scss'
import React from 'react'

/**
 * Render Banner component
 * @param {object} props
 * @param {string} props.title > banner title (can be different or empty)
 * @param {string} props.image > background picture url
 * @returns {Reactnode} jsx injected in DOM
 */

const Banner = ({ image, text, page }) => {
  let bannerClass = ''
  if (page === 'about') {
    bannerClass = 'about'
  }

  return (
    <div className={`banner ${bannerClass}`}>
      <img src={image} alt="banner" className="banner__img" />
      <div className="banner__overlay"></div>
      {text ? <h1 className="banner__text">{text}</h1> : null}
    </div>
  )
}

export default Banner
