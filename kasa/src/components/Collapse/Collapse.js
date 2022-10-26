import './Collapse.scss'
import { useState } from 'react';
import IconChevron from 'components/Icons/Chevron';

/**
 * Function Collapse
 * @param {object} props
 * @param {boolean} props.isOpen > get item state (open/close)
 * @param {function} props.showContent > handle content toggle render (show/hide) by clicking on button
 * @param {boolean} props.open > get item state (rotate icon)
 * @returns {Reactnode} jsx injected in DOM
 */

function Collapse(props, page) {

  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };

  return (
    <li>
      <div className="list-item" onClick={toggle} >
        <p>{props.title}</p>
        <div className={open ? 'reverse icon-wrapper' : 'icon-wrapper'}>
          <IconChevron  />
        </div>
      </div>
      {open && (
        <div className="collapsed-text">
          <p>{props.text}</p>
        </div>
      )}
    </li>
  )
}

export default Collapse