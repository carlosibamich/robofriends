import React from 'react';
import './Scroll.css';

const Scroll = props => {
  return (
    <div className="scroll-window">
      {props.children}
    </div>
  )
};

export default Scroll;
