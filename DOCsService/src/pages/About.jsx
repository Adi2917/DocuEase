import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AboutHero from "../components/About/AboutHero";
import MsnVsn from "../components/About/MsnVsn";

const About = () => {
  return (
    <div>
      <Navbar />
      <div style={{textAlign:'center', fontSize:'20px', padding:'2em'}}>
            <h3>ABOUT <u>Us</u></h3>
            <p style={{fontFamily:"serif"}}>
                At Docu Ease, we simplify the process of obtaining essential documents like residence, income, and caste certificates.
                Our goal is to make government and personal documentation fast, transparent, and stress-free for everyone — anytime, anywhere.
            </p>
            <p style={{fontFamily:"serif"}}>
                DOCs Service was founded with a mission to bridge the gap between citizens and essential government services.
            </p>
        </div>

        <AboutHero />
        <MsnVsn />
      <Footer />
    </div>
  );
};

export default About;
