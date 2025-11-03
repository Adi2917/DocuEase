import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ServiceIntro from "../components/service/ServiceIntro";
import ServiceCard from "../components/service/ServiceCard";
import './Service.css'
import srvintro from '../../src/assets/srv-intro.webp'


const Services = () => {
  return (
    <div>
      <Navbar />
      <div >
        <div className="imgpara">
          <img src={srvintro} className="srvimg"/>
          <p className="srvintro">
              We make every document process simple, fast, and stress-free.From government certificates to digital forms — everything in one place.
              No long queues, no paperwork hassle, and no confusion.Just clear guidance, trusted support, and quick results — every time.
              Because getting your documents done should be easy and comfortable for everyone.
          </p>
        </div>
      </div>

      <div style={{textAlign:'center', fontSize:'20px'}}>
            <h3>SERV<u>ices</u></h3>
        </div>

      <div className="cardsec">
          <ServiceCard
            image='src\assets\caste.jpg'
            name='cate Certificate'
            fees="₹50 Only"
          />
          <ServiceCard 
            image='src\assets\income.jpg'      
            name='Income Certificate'
            fees="₹50 Only"
          />
          <ServiceCard
            image='src\assets\residence.jpg'
            name='Residence Certificate'
            fees='₹50 Only'
          />
      </div>

      <div className="cardsec">
          <ServiceCard
            image='src\assets\NCL.jpg'
            name='NCL Application'
            fees="₹100 Only"
          />
          <ServiceCard 
            image='src\assets\pan.png'      
            name='Pan-Card Application'
            fees="₹250 Only"
          />
          <ServiceCard
            image='src\assets\pdf.jpg'
            name='Pdf Editor'
            fees='₹30 Only (Per Page)'
          />
       </div>

       <div className="cardsec">
          <ServiceCard 
            image='src\assets\train.png'      
            name='Train Ticket Booking'
            fees="₹100 Only (Application Fees)"
          />
          <ServiceCard
            image='src\assets\scholarship.png'
            name='Scholarship Application'
            fees='₹100 Only'
          />
          <ServiceCard
            image='src\assets\resume.jpg'
            name='Create Resume'
            fees='₹100 Only'
          />
       </div>
      <Footer />
    </div>
  );
};

export default Services;
