import './Collapse.scss'
import { useState } from 'react';
import IconChevron from 'components/Icons/Chevron';

function Collapse(props,page) {

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