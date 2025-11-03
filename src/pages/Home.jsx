import React from "react";
import Navbar from "../components/navbar/Navbar";
import HeroSection from "../components/herosection/HeroSection";
import AboutIntro from "../components/About/AboutIntro";
import ServiceIntro from "../components/service/ServiceIntro";
import Footer from "../components/Footer/Footer";
import TrustSection from "../components/TrustSection/TrustSection";
import ContactForm from "../components/Contact/ContactForm";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutIntro />
      <ServiceIntro />
      <ContactForm />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Home;
