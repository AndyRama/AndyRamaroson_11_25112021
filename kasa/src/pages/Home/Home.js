import './Home.scss'
import { Link } from "react-router-dom";

var logements = require('data/logements.json')

function Home() {
  return (
    <div className="Home">
  
      {logements.map((logement, index) => (         
        <Link to={`/logement/${logement.id}`} key={logement.id} className="logement-box">
          <img src={logement.cover} alt={logement.title} />
          <div className="opacity-div"></div>
          <p>{logement.title}</p>
        </Link>            
      ))}

    </div>
  );  
}

export default Home;
