import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Routing ke liye import
import logo from "../../../src/assets/logo.png";
import wplogo from "../../../src/assets/wp-logo.webp";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left: Logo + Name */}
      <div className="nav-left">
        <img src={logo} alt="Docs Service Logo" className="logo" />
        <div className="nav-title">
          <h3>Docu</h3>
          <h3 className="blue">Ease</h3>
        </div>
      </div>

      {/* Center: Menu */}
      <div className={`nav-center ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      {/* Right: WhatsApp + Hamburger */}
      <div className="nav-right">
        <a
          href="https://wa.me/9570197579"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={wplogo} alt="WhatsApp" className="wp-logo" />
        </a>

        {/* Hamburger for small screen */}
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



// import React, { useState } from "react";
// import logo from "../../../src/assets/logo.png";
// import wplogo from "../../../src/assets/wp-logo.webp";
// import "./Navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       {/* Left: Logo + Name */}
//       <div className="nav-left">
//         <img src={logo} alt="Docs Service Logo" className="logo" />
//         <div className="nav-title">
//           <h3>Docu</h3>
//           <h3 className="blue">Ease</h3>
//         </div>
//       </div>

//       {/* Center: Menu */}
//       <div className={`nav-center ${menuOpen ? "open" : ""}`}>
//         <a href="#">Home</a>
//         <a href="#">About</a>
//         <a href="#">Services</a>
//         <a href="#">Contact</a>
//       </div>

//       {/* Right: WhatsApp + Hamburger */}
//       <div className="nav-right">
//         <a
//           href="https://wa.me/qr/LQKK27NCXM5AN1"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img src={wplogo} alt="WhatsApp" className="wp-logo" />
//         </a>
//         <div
//           className={`hamburger ${menuOpen ? "open" : ""}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;