import React from "react";
import "./AboutHero.css";

const AboutHero = () => {
  const sectors = [
    {
      title: "Ads & Marketing",
      desc: "We build high-impact marketing strategies and digital ad campaigns that help brands grow faster, stronger, and more efficiently.",
    },
    {
      title: "Graphic Designing",
      desc: "Creative, modern, and industry-level designs crafted to strengthen brand identity across digital and print platforms.",
    },
    {
      title: "Software Development",
      desc: "We develop secure, scalable, and high-performing applications tailored to your business needs using modern technologies.",
    },
    {
      title: "DocuEase Services",
      desc: "A fast and transparent documentation ecosystem offering verified, simplified, and stress-free service experience.",
    },
    {
      title: "Consultancy",
      desc: "Guidance from experienced professionals to help individuals and businesses make smarter and more strategic decisions.",
    },
    {
      title: "Loan Assistance",
      desc: "A seamless loan support system connecting clients with trusted partners for secure and transparent processing.",
    },
  ];

  return (
    <section className="creator-hero">
      <h2 className="creator-heading">
        Why <span>Choose</span> Creators
      </h2>

      <p className="creator-subtext">
        Creators brings six powerful professional sectors together under one
        ecosystem — designed to offer quality, transparency, and efficiency.  
        Our mission is to simplify services, enhance user experience, and help
        individuals as well as businesses grow confidently in every step.
      </p>

      <div className="creator-grid">
        {sectors.map((item, index) => (
          <div key={index} className="creator-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutHero;
