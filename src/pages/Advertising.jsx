import React from 'react';
import Navbar from '../components/navbar/Navbar';
import AdverHero from '../components/Advertisement/AdverHero';
import Footer from '../components/Footer/Footer';
import AdverIntro from '../components/Advertisement/AdverIntro';

const Advertising = () => {
  return (
    <div>
      <Navbar />
      <AdverHero />
      <AdverIntro/>
      <Footer />
    </div>
  );
};

export default Advertising;
