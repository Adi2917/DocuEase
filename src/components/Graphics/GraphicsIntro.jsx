// GraphicsIntro.jsx
import React from 'react';
import './GraphicsIntro.css';
import graphicsImage from '../../assets/Graphics.jpg'; // apni image ka path yahan dena

const GraphicsIntro = () => {
  return (
    <div className="graphics-intro">
      <div className="graphics-text">
        <h1>Graphics Design Services</h1>
        <p>
          We specialize in creating visually stunning graphics that elevate your brand's identity.
          Our team ensures innovative design solutions tailored to your business needs.
        </p>
      </div>
      <div className="graphics-image">
        <img src={graphicsImage} alt="Graphics Design" />
      </div>
    </div>
  );
};

export default GraphicsIntro;
