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
                “Our platform empowers creators to turn their skills, talent, and ideas into real opportunities. Whether you're a designer, developer, consultant, marketer, or content creator, we provide a streamlined ecosystem to showcase your work, connect with clients, and grow your personal brand. With powerful tools, seamless collaboration options, and business-ready features, creators can focus on what they do best while we handle the rest.”
            </p>
            <p style={{fontFamily:"serif"}}>
                “Your skills deserve a bigger stage. Our platform helps creators present their work, reach more clients, and build a strong professional identity.”
            </p>
        </div>

        <AboutHero />
        <MsnVsn />
      <Footer />
    </div>
  );
};

export default About;
