import './About.scss'

import Collapse from 'components/Collapse/Collapse';

function About() {
  const collapse = [
    {
      "title": "Collapse",
      "text": "Blabla",
    },
    {
      "title": "Collapse 2",
      "text": "Blabla",
    },
    {
      "title": "Collapse 3",
      "text": "Blabla",
    },
    {
      "title": "Collapse 4",
      "text": "Blabla",
    }

  ]

  return (
    <section>
      <div className="cover-photo-About"></div>
      <ul className="list-wrapper">
        {collapse.map((item, index) => (
          <Collapse title={item.title} text={item.text} />
        ))}
      </ul>
    </section>
  );
}
export default About