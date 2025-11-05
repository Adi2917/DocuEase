import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../../../src/assets/logo.png";
import wplogo from "../../../src/assets/wp-logo.webp";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 300); // 0.5 second delay before closing
  };

  return (
    <nav className="navbar">
      {/* Left: Logo + Name */}
      <div className="nav-left">
        <img src={logo} alt="Creators Logo" className="logo" />
        <div className="nav-title">
          <h3>Crea</h3>
          <h3 className="blue">Tors</h3>
        </div>
      </div>

      {/* Center: Menu */}
      <div className={`nav-center ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>

        {/* Services Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="dropdown-title">Services ▾</span>
          {servicesOpen && (
            <div className="dropdown-menu">
              <Link to="/services/adds" onClick={() => setMenuOpen(false)}>Adds</Link>
              <Link to="/services/graphics" onClick={() => setMenuOpen(false)}>Graphics Designing</Link>
              <Link to="/services/software" onClick={() => setMenuOpen(false)}>Software Development</Link>
              <Link to="/services/consultancy" onClick={() => setMenuOpen(false)}>Consultancy</Link>
              <Link to="/services/docuease" onClick={() => setMenuOpen(false)}>DocuEase</Link>
              <Link to="/services/loan" onClick={() => setMenuOpen(false)}>Loan</Link>
            </div>
          )}
        </div>

        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      {/* Right: WhatsApp + Call + Hamburger */}
      <div className="nav-right">
        <a href="https://wa.me/9570197579" target="_blank" rel="noopener noreferrer">
          <img src={wplogo} alt="WhatsApp" className="wp-logo" />
        </a>

        <div className="call-section">
          <FaPhoneAlt className="call-icon" />
          <span className="call-number">9570197579</span>
        </div>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
