import React from 'react';
import './About.scss'

//help Error path icon ?
import FaAngleDown from "assets/images/FaAngleDown.png"
import FaAngleUp  from "assets/images/FaAngleUp.png"


class About extends React.Component {
  state = {
    expand1: true,
    expand2: true,
    expand3: true,
    expand4: true
  };

  handleClickIcon1() { this.setState({ expand1: !this.state.expand1 })}
  handleClickIcon2() { this.setState({ expand2: !this.state.expand1 })}
  handleClickIcon3() { this.setState({ expand3: !this.state.expand3 })}  
  handleClickIcon4() { this.setState({ expand4: !this.state.expand4 })}

  render() {
    
    const isExtension1 = this.state.expand1
    const isExtension2 = this.state.expand2
    const isExtension3 = this.state.expand3
    const isExtension4 = this.state.expand4 

    //help Remove banner home ?
    const ban = document.getElementsByClassName("main-photo")
    ban.display = "none";

    return (
      <section>
        <div className="cover-photo-About"></div>
        <ul className="list-wrapper">
          
          {/* Collapsed 1 */}
          <li>
            <div className="list-item">
              <p>Fiabilité</p>
              <div className="icon-wrapper" onClick={ () => this.handleClickIcon1 }>
                { isExtension1 ? < FaAngleDown size="24px" color="white"/> : <FaAngleUp size="24px" color="white"/> }
              </div>
            </div>
            <div className={isExtension1 ? "collapsed-text" : "expanded-text"}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam magnam molestias aliquam delectus adipisci. Repellendus quis est sit impedit! Fuga, autem laboriosam cum exercitationem nesciunt necessitatibus esse corrupti ratione consequuntur. </p>
            </div>
          </li>

          {/* Collapsed 2 */}
          <li>
            <div className="list-item">
              <p>Respect</p>
              <div className="icon-wrapper" onClick={ () => this.handleClickIcon2 }>
                { isExtension2 ? <FaAngleDown size="24px" color="white"/> : <FaAngleUp size="24px" color="white"/> }
              </div>
            </div>
            <div className={isExtension2 ? "collapsed-text" : "expanded-text"}>
              <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore nobis optio ea tempore corporis laboriosam, fugiat inventore praesentium ut magni velit cupiditate sint architecto? Voluptates praesentium inventore explicabo at nostrum? </p>              
            </div>
          </li>

          {/* Collapsed 3 */}
          <li>
            <div className="list-item">
              <p>Service</p>
              <div className="icon-wrapper"onClick={ () => this.handleClickIcon3}>
                { isExtension3 ? <FaAngleDown size="24px" color="white"/> : <FaAngleUp size="24px" color="white"/> }
              </div>
            </div>
            <div class={ isExtension4 ? "collapsed-text" : "expanded-text"}>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, deserunt nisi molestias sapiente error illum, consequuntur voluptatibus alias labore similique quaerat. Perferendis laboriosam voluptas quod, deserunt laudantium dignissimos consectetur eaque.</p>
            </div>
          </li>

          {/* Collapsed 4 */}
          <li>
            <div className="list-item">
              <p>Sécurité</p>
              <div className="icon-wrapper" onClick={ () => this.handleClickIcon4 }>
                { isExtension4 ? < FaAngleDown size="24px" color="white"/> : < FaAngleUp size="24px" color="white"/>}
              </div>
            </div>
            <div class={ isExtension4 ? "collapsed-text" : "expanded-text"}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae aut doloremque modi, voluptatum, ducimus pariatur ut id ratione quam consectetur numquam cumque, quisquam quibusdam hic facere fugit. Repellendus, eveniet!</p>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}
export default About