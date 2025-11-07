import React from "react";
import ServiceCard from "./ServiceCard";
import './ServiceIntro.css';
import { Link } from "react-router-dom";

// Import srv-intro from src/assets
import srvimg from "../../assets/srv-intro.webp";

// Service images using public folder
const adds = "/images/Add-logo.jpg";
const graphics = "/images/graphics-logo.jpg";
const software = "/images/software-logo.png";
const consultancy = "/images/consultancy-logo.png";
const docuease = "/images/document-logo.jpg";
const loan = "/images/loan-logo.jpg";

const ServiceIntro = () => {
  return (
    <div className="service-intro-container">
      
      <h2 className="service-heading">
        Service at <span className="highlight">Creators</span>
      </h2>

      <div className='intro-flex'>
        <img src={srvimg} className='servimg' alt="Services" />
        <div className='parabtn'>
          <p className='servintro'>
            At <strong>Creators</strong>, we offer six core services — Ads Creation, Graphics Designing, Software Development, Consultancy, DocuEase Services, and Loan Assistance. Each service is designed to help individuals and businesses efficiently achieve their goals.
          </p>
        </div>
      </div>

      <div className='card-container'>
        <ServiceCard image={adds} name="Ads Creation" link="/advertising" />
        <ServiceCard image={graphics} name="Graphics Designing" link="/graphics" />
        <ServiceCard image={software} name="Software Development" link="/software" />
        <ServiceCard image={consultancy} name="Consultancy" link="/consultancy" />
        <ServiceCard image={docuease} name="DocuEase Services" link="/docuease" />
        <ServiceCard image={loan} name="Loan Assistance" link="/loan" />
      </div>
    </div>
  );
};

export default ServiceIntro;
