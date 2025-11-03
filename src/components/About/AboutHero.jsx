import React from "react";
import "./AboutHero.css";

const AboutHero = () => {
  const reasons = [
    {
      title: "Trusted & Transparent",
      desc: "We believe in full transparency. Every process is clear and reliable, with no hidden costs or false promises — just genuine service you can count on.",
    },
    {
      title: "Fast & Hassle-Free Process",
      desc: "We simplify your documentation journey. No long queues, no paperwork confusion — just a smooth, fast, and digital experience.",
    },
    {
      title: "Friendly Customer Support",
      desc: "Our team is always ready to help you step-by-step. From form filling to application updates — we make it simple for everyone.",
    },
    {
      title: "Secure Data Handling",
      desc: "Your privacy is our top priority. We ensure your personal details remain safe, protected, and never shared without your consent.",
    },
  ];

  return (
    <section className="abouthero">
      <h2 className="abouthero-heading">
        Why <span>Choose</span> DocuEase
      </h2>
      <div className="abouthero-grid">
        {reasons.map((item, index) => (
          <div key={index} className="abouthero-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutHero;
