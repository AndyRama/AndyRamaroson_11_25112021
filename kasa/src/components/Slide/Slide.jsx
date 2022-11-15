import React, { Component } from "react";
import "./Slide.scss";
import IconChevron from "components/Icons/Chevron";

/**
 * Render Slide extends Component
 * @param {object} props
 * @param {boolean} props.onClick > get item state (nextSlid/previousSlid)
 * @param {array} props.pictures >  render all rental pictures
 * @returns {Reactnode} jsx in DOM html
*/

class Slide extends Component {
  state = { index: 0 };

  previousSlid() {
    const nextIndex = this.state.index - 1;
    if (nextIndex < 0) {
      this.setState({ index: this.props.Photos.length - 1 });
    } else {
      this.setState({ index: nextIndex });
    }
  }

  nextSlid() {
    this.setState({ index: (this.state.index + 1) % this.props.Photos.length });
  }
  
  render() {    
    const photos = this.props.Photos;

    return (
      <div className="photo-box">
        <div className="left-icon" onClick={() => this.previousSlid()}>
          <IconChevron color="white" size={70} />
        </div>
        <div className="right-icon" onClick={() => this.nextSlid()}>
          <IconChevron color="white" size={70} />
        </div>
        <img src={photos[this.state.index]} alt="Foto" />
      </div>
    );
  }
}

export default Slide;
