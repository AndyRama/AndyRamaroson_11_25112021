import './About.scss'

import Collapse from 'components/Collapse/Collapse';
import Footer from 'components/Footer/Footer';
import Banner from 'components/Banner/Banner';

import imageBanner from "assets/images/BannerAbout.png";

function About() {

  const collapse = [
    {
      "title": "Fiabilité",
      "text": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      "title": "Respect",
      "text": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      "title": "Service",
      "text": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      "title": "Sécurité",
      "text": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    }

  ]

  return (
    <section>
      <Banner image={imageBanner} />
      <ul className="list-wrapper">
        { collapse.map((item, index) => (
          <Collapse title={item.title} text={item.text} />
        ))}
      </ul>
      <Footer />
    </section>
  );
}

export default About