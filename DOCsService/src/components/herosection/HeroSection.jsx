import React from 'react'
import "./HeroSection.css"
import hese from '../../../src/assets/he-se.jpg'
const HeroSection = () => {
  return (
    <div style={{display:'flex'}} className='hese'>
        <div >
            <div style={{marginLeft:'6em', marginTop:'6em'}}>
                <h1>
                    Get Help To All <br /> Documents
                </h1>

                <p style={{fontSize:'25px'}}>
                    "We provide quick, reliable, and stress-free assistance for every document you need — anytime, anywhere. From government forms to essential certificates, we make the entire process simple and smooth. No long waits, no confusion — just easy, trusted help whenever you need it."                
                </p>
            </div>

            <div >
                <a href="#" className='getstart'>Get Started</a>
            </div>
        </div>

            {/*hese means - herosection */}
        <div>
            <img src={hese} className='hese-img'/>
        </div>
        
    </div>
  )
}

export default HeroSection