import React, { useEffect, useState } from "react";
import "./HeroSection.css";

// --- 6 Section Data ---
import addsImg from "../../../src/assets/adds.jpg";
import graphicsImg from "../../../src/assets/graphics.jpg";
import softwareImg from "../../../src/assets/software.jpg";
import consultancyImg from "../../../src/assets/consultancy.jpg";
import documentationImg from "../../../src/assets/documentation.jpg";
import loanImg from "../../../src/assets/loan.jpg";

const sections = [
  {
    title: "Creative Ads That Drive Results",
    desc: "From social media to print, we design eye-catching ads that grab attention and convert your audience into customers.",
    img: addsImg,
  },
  {
    title: "Professional Graphics Design",
    desc: "Our design team brings your ideas to life with stunning visuals — logos, posters, and branding materials that make an impact.",
    img: graphicsImg,
  },
  {
    title: "Custom Software Development",
    desc: "We build powerful and user-friendly software solutions that help your business run smarter, faster, and better.",
    img: softwareImg,
  },
  {
    title: "Free Consultancy for Your Growth",
    desc: "Get expert advice for business, branding, and digital presence — absolutely free, to help you make better decisions.",
    img: consultancyImg,
  },
  {
    title: "Docuease – Simplifying Documentation",
    desc: "We provide quick, reliable, and stress-free assistance for every document you need — anytime, anywhere.",
    img: documentationImg,
  },
  {
    title: "Easy Loan Assistance",
    desc: "We connect you with trusted loan providers and handle the initial paperwork so you can focus on what matters most.",
    img: loanImg,
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true); // trigger slide-out
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % sections.length);
        setAnimate(false); // slide-in
      }, 600);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { title, desc, img } = sections[current];

  return (
    <div className={`hero-section ${animate ? "slide-out" : "slide-in"}`}>
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{desc}</p>
        <a href="#" className="getstart">
          Get Started
        </a>
      </div>

      <div className="hero-img-container">
        <img src={img} alt={title} className="hero-img" />
      </div>
    </div>
  );
};

export default HeroSection;
