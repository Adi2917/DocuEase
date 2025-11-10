import React from "react";
import "./AdverHero.css";
import heroImg from "../../assets/Advertisement.webp"; 

const AdverHero = () => {
  return (
    <section className="adver-hero-container">
      <div className="adver-hero-content">

        <div className="adver-left">
          <h1 className="adver-heading">
            Creative Ads That Grow Your Business
          </h1>

          <p className="adver-para">
            We create modern, eye-catching advertisements that help your brand 
            stand out and reach the right audience with smart and effective communication.
          </p>
        </div>

        <div className="adver-right">
          <img src={heroImg} alt="advertise banner" className="adver-image" />
        </div>

      </div>
    </section>
  );
};

export default AdverHero;
