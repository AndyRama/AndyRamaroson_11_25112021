import Banner from "components/Banner/Banner";
import imageBanner from "assets/images/BannerAbout.png";
import Collapse from "components/Collapse/Collapse";
import Footer from "components/Footer/Footer";

/**
 * Render "A propos" page
 * @function About
 * @param {Object} props
 * @param {string} props.id > unique key to identify changed, added or removed items
 * @param {string} props.title > item title
 * @param {string} props.id > item content
 * @returns {Reactnode} jsx in DOM html
 */

function About() {
  const collapse = [
    {
      title: "Fiabilité",
      text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      title: "Respect",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurité",
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <section>
      <Banner image={imageBanner}  page="about"  />
      <ul className="list-wrapper">
        {collapse.map((item, index) => (
          <Collapse  key={index} title={item.title} text={item.text} />
        ))}
      </ul> 
      <Footer />
    </section>
  );
}

export default About;
