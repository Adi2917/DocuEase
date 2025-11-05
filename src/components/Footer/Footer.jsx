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
          <h2 className="footer-logo">Creators</h2>
          <p className="footer-about">
            At <strong>Creators</strong>, we bring together innovation, creativity, and smart solutions across six core sectors — Ads Creation, Graphics Designing, Software Development, Consultancy, DocuEase Services, and Loan Assistance.  
            Our mission is to help individuals and businesses grow efficiently and confidently, providing expert guidance, reliable support, and seamless service at every step.
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
          <p><FaEnvelope /> <a href="mailto:support@creators.com">support@creators.com</a></p>
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
          © {new Date().getFullYear()} <strong>Creators</strong> — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
