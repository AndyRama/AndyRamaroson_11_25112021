import './Home.scss'
import { Link } from "react-router-dom";
import Banner from 'components/Banner/Banner';
import Footer from 'components/Footer/Footer';

var logements = require('data/logements.json')

function Home() {

  return (
    <section>
      <Banner />
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
