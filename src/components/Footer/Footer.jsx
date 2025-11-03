import React from "react";
import "./Footer.css";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* --- Left Section --- */}
        <div className="footer-left">
          <h2 className="footer-logo">DocuEase</h2>
          <p className="footer-about">
            Making documentation simple, secure, and quick.  
            From certificates to official registrations — we help you every step of the way.  
            At DocuEase, transparency, trust, and timely service are our top priorities.
          </p>
        </div>

        {/* --- Middle Section --- */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/services" className="footer-link">Services</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        {/* --- Right Section --- */}
        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p><FaEnvelope /> <a href="mailto:support@docuease.in">support@docuease.in</a></p>
          <p><FaPhoneAlt /> <a href="tel:+919570197579">+91 9570197579</a></p>

          <a
            href="https://wa.me/919570197579"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-link"
          >
            <FaWhatsapp />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* --- Bottom Section --- */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} <strong>DocuEase</strong> — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
