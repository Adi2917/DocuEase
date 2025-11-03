import React from "react";
import "./Footer.css";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* --- Left Section --- */}
        <div className="footer-left">
          <h2 className="footer-logo">DocuEase</h2>
          <p className="footer-about">
            We make your documentation process simple, fast, and stress-free.  
            From certificates to form filling — everything is now just a message away.  
            Trusted service, easy process, and reliable support for everyone.
          </p>
        </div>

        {/* --- Middle Section (Quick Links) --- */}
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
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:support@docuease.in">support@docuease.in</a></p>
          <p>Phone: <a href="tel:+919570197579">+91 9570197579</a></p>

          <div className="footer-socials">
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
      </div>

      {/* --- Bottom Section --- */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} <strong>DocuEase</strong>. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
