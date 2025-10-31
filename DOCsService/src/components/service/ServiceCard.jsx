import React from "react";
import "./ServiceCard.css"; // ✅ CSS import

const ServiceCard = ({ image, name, fees }) => {
  // WhatsApp link + dynamic message
  const whatsappNumber = "9570197579"; // 👈 तुम्‍हारा नंबर
  const message = `I want service of ${name}`;
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


// import React from "react";
// import "./ServiceCard.css"; // ✅ CSS import kiya gaya hai

// const ServiceCard = ({ image, name, fees }) => {
//   return (
//     <div className="service-card">
//       <img src={image} alt={name} className="service-image" />
//       <h3>{name}</h3>
//       <p className="service-fees">{fees}</p>
//     </div>
//   );
// };

// export default ServiceCard;
