import React from "react";
import { Link } from "react-router-dom";
import './ServiceCard.css';

const ServiceCard = ({ image, name, fees, link }) => {
  return (
    <div className="service-card">
      <img src={image} alt={name} className="service-image" />
      <h4>{name}</h4>
      <p>{fees}</p>
      <button className="card-btn">
        <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
          Know More
        </Link>
      </button>
    </div>
  );
};

export default ServiceCard;
