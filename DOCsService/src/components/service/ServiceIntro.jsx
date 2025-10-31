import React from 'react'
import ServiceCard from "./ServiceCard";
import srvimg from '../../../src/assets/srv-intro.webp'
import './ServiceIntro.css'
import { Link } from "react-router-dom";


const ServiceIntro = () => {
  return (
    <div >
        <div style={{textAlign:'center', fontSize:'20px'}}>
            <h3>SERV<u>ice</u></h3>
        </div>
        <div className='servsection'>
            <img src={srvimg} className='servimg'/>
            <div className='parabtn'>
                <p className='servintro'>
                    We make every document process simple, fast, and stress-free.From government certificates to digital forms — everything in one place.
                    No long queues, no paperwork hassle, and no confusion.Just clear guidance, trusted support, and quick results — every time.
                    Because getting your documents done should be easy and comfortable for everyone.
                </p>
                <button className='morebtn'>
                    <Link to="/Services" style={{ textDecoration: 'none', color: 'inherit' }}>
                        Go for more <br />Service
                    </Link>
                </button>
            </div>
            
        </div>

        <div className='card'>
            
            <div >
                <ServiceCard
                    image="src\assets\pan.png"
                    name="PAN Card Application"
                    fees="₹200 Only"
                />
            </div>

            <div>
                <ServiceCard 
                    image="src\assets\NCL.jpg"
                    name="NCL Application"
                    fees="₹100 Only"
                />
            </div>
 
            <div>
                <ServiceCard
                    image="src\assets\pdf.jpg"
                    name="PDF Editing"
                    fees="₹50 Only"
                />
            </div>
        </div>
    </div>
  )
}

export default ServiceIntro