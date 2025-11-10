import React from 'react';
import './AdverIntro.css';
import adImage from '../../assets/advertisement.avif'; // Replace with your actual image path

const keyTerms = [
  { 
    term: 'Creativity', 
    description: 'We design ads that are visually stunning and original, ensuring your brand stands out in a crowded marketplace.' 
  },
  { 
    term: 'Engagement', 
    description: 'Our strategies focus on connecting deeply with your audience through interactive and meaningful content.' 
  },
  { 
    term: 'ROI', 
    description: 'We prioritize your investment returns by creating campaigns that convert and optimize performance metrics.' 
  },
  { 
    term: 'Branding', 
    description: 'Our solutions strengthen brand identity, build trust, and create a consistent presence for your brand.' 
  },
  { 
    term: 'Innovation', 
    description: 'We use modern technologies and creative thinking to stay ahead of trends and capture attention.' 
  },
];

const AdverIntro = () => {
  return (
    <div className="adver-intro">
      <h1 className="adver-heading">Elevate Your Brand with Smart Advertising</h1>
      <p className="adver-description">
        Our advertising solutions maximize visibility, connect with your audience, and drive measurable results.
        We focus on innovative strategies that make your campaigns stand out professionally.
      </p>

      {/* Top section: Image + first 2 cards */}
      <div className="top-section">
        <img src={adImage} alt="Advertising" className="adver-image" />

        <div className="first-two-cards">
          {keyTerms.slice(0, 2).map((item, idx) => (
            <div className="keyterm-card" key={idx}>
              <h3 className="term-title">{item.term}</h3>
              <p className="term-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section: 3 cards in a row */}
      <div className="bottom-three-cards">
        {keyTerms.slice(2).map((item, idx) => (
          <div className="keyterm-card" key={idx}>
            <h3 className="term-title">{item.term}</h3>
            <p className="term-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdverIntro;
