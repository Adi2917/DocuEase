import React from "react";
import "./ContactIntro.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactIntro = () => {
  return (
    <div className="contact-intro-container">
      {/* --- Left Side --- */}
      <div className="contact-intro-text">
        <h2>We’re Here to Help You</h2>
        <p>
          At <strong>DocuEase</strong>, we believe that documentation shouldn’t be stressful.  
          Whether you need help with certificates, registrations, or official form submissions,  
          our team ensures a smooth and transparent process every step of the way.  
          We value your time — and that’s why we handle the complexities,  
          so you can focus on what matters most to you.
        </p>
      </div>

      {/* --- Right Side (Cards) --- */}
      <div className="contact-intro-cards">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email Us</h3>
          <p>
            Have a question or need assistance?  
            Write to us anytime and we’ll respond shortly.
          </p>
          <a href="mailto:support@docuease.in" className="contact-link">
            support@docuease.in
          </a>
        </div>

        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Call Us</h3>
          <p>
            Speak directly with our support team  
            for quick help and personalized guidance.
          </p>
          <a href="tel:+919570197579" className="contact-link">
            +91 9570197579
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactIntro;
