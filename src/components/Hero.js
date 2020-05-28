import React from 'react';
import './Hero.css';

const Hero = (props) => {
  return (
    <div className="fancy-cards">
      <div className="fancy-card">
        <div
          style={{
            backgroundImage: `url(${props.img})`,
          }}
          className="top"
        >
          <div className="caption">
            <h3 className="title">{props.title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
        <div className="middle"></div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Hero;
