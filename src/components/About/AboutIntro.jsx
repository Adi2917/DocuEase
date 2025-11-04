import React from 'react';
import { Link } from "react-router-dom";
import './AboutIntro.css';

const AboutIntro = () => {
  return (
    <div className="about-intro">
      <h3>ABOUT <span className="underline">Us</span></h3>
      <p className="about-text">
        At Docu Ease, we simplify the process of obtaining essential documents like residence, income, and caste certificates.
        Our goal is to make government and personal documentation fast, transparent, and stress-free for everyone — anytime, anywhere.
      </p>
      <p className="about-text">
        DOCs Service was founded with a mission to bridge the gap between citizens and essential government services.
      </p>
      <button className="about-btn">
        <Link to="./About">Know More</Link>
      </button>
    </div>
  )
}

export default AboutIntro;
