import React from "react";
import "./GraphicsIntro.css";
import rightImg from "../../assets/Graphics.jpg";

const GraphicsIntro = () => {
  return (
    <div className="ghero-container">

      {/* HERO (HEADING + IMAGE) */}
      <div className="ghero-hero-row">
        <div className="ghero-left">
          <h1>
            Transforming Ideas <br />
            Into <span>Royal Designs</span>
          </h1>
          <p>
            We create premium graphics that reflect innovation, creativity, and 
            true luxury. Every design is thoughtfully crafted to give your brand 
            a strong identity, a powerful visual impression, and a modern touch.
          </p>

          <button className="ghero-btn">Get Started</button>
        </div>

        <div className="ghero-right">
          <img src={rightImg} alt="graphics" className="hero-main-img" />
        </div>
      </div>

      {/* SCROLLABLE CARDS */}
      <div className="ghero-scroll-wrapper">
        <div className="scroll-cards">

          <div className="bcard">
            <h3>Premium Branding</h3>
            <p>
              We design high-class, luxury-driven brand identities that help 
              businesses stand out. Our branding ensures a memorable presence, 
              visual consistency, and a strong emotional connection with your audience.
            </p>
          </div>

          <div className="bcard">
            <h3>Modern UI / UX Design</h3>
            <p>
              Our UI/UX concepts follow modern trends with clean layouts, 
              interactive elements, and smooth user journeys. We focus on 
              aesthetic beauty and functional clarity for better engagement.
            </p>
          </div>

          <div className="bcard">
            <h3>Social Media Solutions</h3>
            <p>
              From eye-catching posts to high-converting ad creatives, we craft 
              visuals that boost engagement, increase visibility, and reinforce 
              your brand image across all social platforms.
            </p>
          </div>

          <div className="bcard">
            <h3>Creative Concept Building</h3>
            <p>
              Our team delivers unique, out-of-the-box visual ideas that break 
              traditional patterns. We turn simple thoughts into powerful visual 
              stories that capture attention instantly.
            </p>
          </div>

          <div className="bcard">
            <h3>Fast & Professional Delivery</h3>
            <p>
              Quality and speed — both guaranteed. We provide polished, 
              professional, and ready-to-use graphics on time without compromising 
              creativity or design quality.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default GraphicsIntro;
