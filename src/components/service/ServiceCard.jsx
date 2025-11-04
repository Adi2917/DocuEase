import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ image, name, fees }) => {
  const whatsappNumber = "9570197579"; // ✅ Your WhatsApp number
  const message = `Hi, I am interested in the ${name} service. Could you please provide more details?`;
  const encodedMessage = encodeURIComponent(message);
  const finalLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="service-card">
      <img src={image} alt={name} className="service-image" />
      <h3>{name}</h3>
      <p className="service-fees">{fees}</p>
      <a
        href={finalLink}
        target="_blank"
        rel="noopener noreferrer"
        className="service-btn"
      >
        Get Service
      </a>
    </div>
  );
};

export default ServiceCard;
