import React from "react";
import "./GraphicsHero.css";

const GraphicsHeroNew = () => {
  return (
    <section className="ghn-container">

      {/* LEFT CONTENT */}
      <div className="ghn-left">
        <h1 className="ghn-title">
          Redefining <span>Visual Storytelling</span>
        </h1>

        <p className="ghn-desc">
          We craft modern, sleek, and elegant graphic experiences that convey your
          brand’s story with precision and impact. Our minimal yet premium approach
          ensures clarity, engagement, and a sophisticated aesthetic across all platforms.
        </p>

        <div className="ghn-features">
          <div className="ghn-feature">
            <h3>🎨 Creative Designs</h3>
            <p>Stylish, clean, and visually striking graphics tailored to your brand.</p>
          </div>
          <div className="ghn-feature">
            <h3>✨ Interactive Layouts</h3>
            <p>Dynamic compositions and modern visuals that engage and delight users.</p>
          </div>
          <div className="ghn-feature">
            <h3>🚀 Brand Elevation</h3>
            <p>Boost your brand’s presence with designs that leave a lasting impression.</p>
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="ghn-right">
        <div className="ghn-card card1">3D Concept</div>
        <div className="ghn-card card2">Neon Accent</div>
        <div className="ghn-card card3">Minimal Icon</div>

        <div className="ghn-floating-shapes">
          <div className="shape s1"></div>
          <div className="shape s2"></div>
          <div className="shape s3"></div>
        </div>
      </div>

    </section>
  );
};

export default GraphicsHeroNew;
