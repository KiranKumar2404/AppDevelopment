import React, { useState } from 'react';
import './OrderButton.css'; 

function OrderButton() {
  const [animate, setAnimate] = useState(false);

  const handleButtonClick = () => {
    if (!animate) {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 10000);
    }
    
  };

  return (
    <div className='orderrr'>
    <button className={`order ${animate ? 'animate' : ''}`} onClick={handleButtonClick}>
      <span className="default">Send Message</span>
      <span className="success">
        Message sent
        <svg viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg>
      </span>
      <div className="box"></div>
      <div className="truck">
        <div className="back"></div>
        <div className="front">
          <div className="window"></div>
        </div>
        <div className="light top"></div>
        <div className="light bottom"></div>
      </div>
      <div className="lines"></div>
    </button>
    </div>
  );
}

export default OrderButton;
