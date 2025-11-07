import React from "react";
import ServiceCard from "./ServiceCard";
import srvimg from '../../../src/assets/srv-intro.webp';
import './ServiceIntro.css';
import { Link } from "react-router-dom";

// Service images
import adds from '../../assets/add-logo.jpg';
import graphics from '../../assets/graphics-logo.jpg';
import software from '../../assets/software-logo.png';
import consultancy from '../../assets/consultancy-logo.png';
import docuease from '../../assets/document-logo.jpg';
import loan from '../../assets/loan-logo.jpg';

const ServiceIntro = () => {
  return (
    <div className="service-intro-container">
      
      {/* ===== Section Heading ===== */}
      <h2 className="service-heading">Service at <span className="highlight">Creators</span></h2>

      {/* ===== Intro Section ===== */}
      <div className='intro-flex'>
        <img src={srvimg} className='servimg' alt="Services" />
        <div className='parabtn'>
          <p className='servintro'>
            At <strong>Creators</strong>, we offer six core services — Ads Creation, Graphics Designing, Software Development, Consultancy, DocuEase Services, and Loan Assistance. Each service is designed to help individuals and businesses efficiently achieve their goals.
          </p>
        </div>
      </div>

      {/* ===== Services Cards ===== */}
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
