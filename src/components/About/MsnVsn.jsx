import React from "react";
import "./MsnVsn.css";
import msnvsnimg from "../../../src/assets/Aboutimg.png";

const MsnVsn = () => {
  return (
    <section className="msnvsn">
      <div className="msnvsnpara">
        <h3>Our Mission 🧭</h3>
        <p>
          At Creators, our mission is to build a multi-service ecosystem that
          empowers individuals and businesses through digital innovation.  
          Whether it's ads, designing, software, documentation, consultancy, or
          loan assistance — we aim to deliver transparent, professional, and
          result-driven solutions under one unified platform.
        </p>

        <h3>Our Vision 🌍</h3>
        <p>
          Our vision is to become one of India’s most trusted and impactful
          multi-sector service providers — where every user gets easy access to
          creative, technical, and financial solutions with complete reliability.  
          We dream of a future where quality services are accessible to every
          city, every business, and every individual without complexity or delay.
        </p>
      </div>

      <div className="msnvsn-img-container">
        <img src={msnvsnimg} className="img" alt="Mission & Vision" />
      </div>
    </section>
  );
};

export default MsnVsn;
