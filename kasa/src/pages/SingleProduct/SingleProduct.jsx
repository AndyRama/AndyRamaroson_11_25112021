import React from 'react'

import { useParams } from 'react-router-dom'

import './SingleProduct.scss'

import Collapse from 'components/Collapse/Collapse'
import Footer from 'components/Footer/Footer'
import Tags from 'components/Tags/Tags'
import Slide from 'components/Slide/Slide'
import Rating from 'components/Rating/Rating'
import PageNotFound from 'pages/PageNotFound/PageNotFound'

/**
 * @Function SingleProduct
 * @param {object} props
 * @param {string} props.id > unique key to identify 
 * @param {string} props.id > get selection data by its id
 * @param {string} props.title > rental add title
 * @param {string} props.location > rental localisation
 * @param {string} props.host.name > render name hoster
 * @param {string} props.host.picutre > render avatar hoster
 * @param {string} props.descritption > cover picture url
 * 
 * @param {array} props .rating >  display starsArray
 * @param {array} props.equipments > cover picture url
 * @param {array} props.pictures > all pictures for rental
 * @param {array} rental add data
 * @returns {Reactnode} jsx injected in DOM
 */

function SingleProduct() {

  var logements = require('data/logements.json')

  const { logementId } = useParams()
  const logement = logements.find((logement) => logement.id === logementId)
  if(!logement) {
    return(
      <PageNotFound />
    )
  }

  const { title, location, rating, host, equipments, description, pictures } = logement

  // Equipements content
  const content = (
    <ul>
      {equipments.map((equipment, index) => (
        <li key={index} className="singleproduct__collapse">
          {equipment}
        </li>
      ))}
    </ul>
  )

  return (
    <section>
      <div className="singleproduct">
        <Slide Photos={pictures} />
        <div className="singleproduct__content">
          <div className="group-element-left">
            <h1 className="title">{title}</h1>
            <p className="location">{location}</p>
            <div className="tags-list-wrapper">
              {logement.tags.map((tag, index) => (
                <Tags key={index} getTag={tag} />
              ))}
            </div>
          </div>
          <div className="group-elements-right">
            <div className="name-photo-wrapper">
              <div className="host-name">{host.name}</div>
              <img className="host-photo" src={host.picture} alt={host.name} />
            </div>
            <Rating rating={rating} />
          </div>
        </div>
      </div>
      <div className="singleproduct__collapse">
        <Collapse title="description" text={description} />
        <Collapse title="équipement" text={content} />
      </div>
      <Footer />
    </section>
  )
}

export default SingleProduct;
