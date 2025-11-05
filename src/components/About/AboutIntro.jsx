import React from "react";
import { Link } from "react-router-dom";
import "./AboutIntro.css";

const AboutIntro = () => {
  return (
    <div className="about-intro">
      <h3>
        ABOUT <span className="underline">Creators</span>
      </h3>
      <p className="about-subtext">
        At <strong>Creators</strong>, we bring together innovation, creativity, and smart solutions across six powerful sectors — designed to help individuals and businesses grow efficiently and confidently.
      </p>

      <div className="about-card-container">
        {/* ===== Left Card ===== */}
        <div className="about-card left">
          <div className="about-card-content">
            <h4>🎯 Advertising & Marketing</h4>
            <p>
              Crafting engaging ad campaigns that attract the right audience and build your brand identity effectively.
            </p>

            <h4>🎨 Graphics Designing</h4>
            <p>
              Delivering creative visuals, logos, and branding materials that make your business stand out from the crowd.
            </p>

            <h4>💻 Software Development</h4>
            <p>
              Building modern, scalable, and efficient digital products tailored to your business needs.
            </p>
          </div>
        </div>

        {/* ===== Right Card ===== */}
        <div className="about-card right">
          <div className="about-card-content">
            <h4>🤝 Consultancy</h4>
            <p>
              Offering free, practical, and strategic guidance to help you grow your business with clarity and confidence.
            </p>

            <h4>📄 DocuEase</h4>
            <p>
              Simplifying all your documentation needs — from personal to business — with transparency and speed.
            </p>

            <h4>💰 Loan Assistance</h4>
            <p>
              Connecting you with trusted partners and helping you complete documentation to access loans easily.
            </p>
          </div>
        </div>
      </div>

      <button className="about-btn">
        <Link to="/about">Know More</Link>
      </button>
    </div>
  );
};

export default AboutIntro;
