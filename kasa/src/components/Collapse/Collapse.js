import './Collapse.scss'
import { useState } from 'react';


function Collapse(props) {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <li>
      <div className="list-item" onClick={toggle} >
        <p>{props.title}</p>
        <div className="icon-wrapper">
          <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.7269 14.1403L23.8599 11.9951L11.93 0.0764155L7.19578e-05 12.0072L2.13299 14.1403L11.93 4.34257L21.7269 14.1403Z" fill="white" />
          </svg>
        </div>
      </div>
      {open && (
        <div>
          <p>{props.text}</p>
        </div>
      )}
    </li>
  )
}

export default Collapse