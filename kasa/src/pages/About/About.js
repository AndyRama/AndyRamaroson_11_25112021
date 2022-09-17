import React from 'react';
import './About.scss'
import FaAngleDown  from "./assets/images/FaAngleDown.png"
import FaAngleUp  from "./assets/images/FaAngleUp.png"

class About extends React.Component {
  state = {
    expand1: true
  };

  handleClickIcon1() { this.setState({ expand1: this.state.expand1})}
  
  render() {
    
    const isExtension1 = this.state.expand1

    const ban = document.getElementsByClassName('main-photo')
    ban.display ="none"

    return (
      <section>
        <div className="cover-photo-About"></div>

        <ul className="list-wrapper">
          <li>
            {/* First collapsed */}
            <div className="list-item">
              <p>Fiabiliter</p>
              <div className="icon-wrapper" onClick={ () => this.handleClickIcon1 }>
                { isExtension1 ? < FaAngleDown size="24px" color="white"/> : <FaAngleUp size="24px" color="white"/> }
              </div>
            </div>
            <div className={isExtension1 ? "collapsed-text" : "expanded-text"}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam molestias aliquam delectus adipisci. Repellendus quis est sit impedit! Fuga, autem laboriosam cum exercitationem nesciunt necessitatibus esse corrupti ratione consequuntur. </p>
            </div>
          </li>
          <li>
            {/* First collapsed */}
            <div className="list-item">
              <p>Respect</p>
              <div className="icon-wrapper" onClick={ ()=> this.handleClickIcon2 }>
                { isExtension1 ? <FaAngleDown size="24px" color="white"/> : <FaAngleUp size="24px" color="white"/> }
              </div>
            </div>
            <div className={isExtension1 ? "collapsed-text" : "expanded-text"}>
              <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore nobis optio ea tempore corporis laboriosam, fugiat inventore praesentium ut magni velit cupiditate sint architecto? Voluptates praesentium inventore explicabo at nostrum? </p>              
            </div>
          </li>
        </ul>
      </section>
    );
  }
}
export default About