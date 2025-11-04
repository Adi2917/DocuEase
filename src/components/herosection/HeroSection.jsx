import React from 'react';
import "./HeroSection.css";
import hese from '../../../src/assets/he-se.jpg';

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='hero-text'>
        <h1>
          Get Help To All <br /> Documents
        </h1>
        <p>
          We provide quick, reliable, and stress-free assistance for every document you need — anytime, anywhere. From government forms to essential certificates, we make the entire process simple and smooth. No long waits, no confusion — just easy, trusted help whenever you need it.
        </p>
        <a href="#" className='getstart'>Get Started</a>
      </div>

      <div className='hero-img-container'>
        <img src={hese} alt="Hero" className='hero-img'/>
      </div>
    </div>
  )
}

export default HeroSection;
