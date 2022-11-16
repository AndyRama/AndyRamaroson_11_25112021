import './Home.scss'
import { Link } from "react-router-dom";

import Banner from 'components/Banner/Banner';
import imageBanner from "assets/images/BannerHome.png";
import Footer from 'components/Footer/Footer';

/**
 * @Function Home
 * @param {object} props
 * @param {string} props.id > unique key to identify changed, added or removed items
 * @param {string} props.id > get selection data by its id
 * @param {string} props.title > rental ad title
 * @param {string} props.cover > cover picture url
 * @param {array} rental add data
 * @returns {Reactnode} jsx injected in DOM
 */

var logements = require('data/logements.json')

function Home() {
  return (
    <section>
      <Banner image={imageBanner}  text="Chez vous, partout et ailleurs"/>
      
      <div className="logements-wrapper">
        {logements.map((logement, index) => (
          <Link to={`/logement/${logement.id}`} key={logement.id} className="logement-box">
            <img src={logement.cover} alt={logement.title} />
            <div className="opacity-div"></div>
            <p>{logement.title}</p>
          </Link>
        ))}
      </div>
      <Footer />
    </section>
  );
}

export default Home;
