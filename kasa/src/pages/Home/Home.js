import './Home.scss'
var logements = require('data/logements.json')

function Home() {
  return (
    <div className="Home">
      <ul>
        {logements.map((logement, index) =>(
         <li>{logement.title}</li>

        ))}
      </ul>
    </div>
  );  
}

export default Home;
