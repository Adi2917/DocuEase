import React from 'react'
import './MsnVsn.css';
import msnvsnimg from '../../../src/assets/Aboutimg.png'

const MsnVsn = () => {
  return (
    <div className='msnvsn'>
        
        <div className='msnvsnpara'>
            <h3>Mission 🧭</h3>
            <p>
                Our mission is to simplify the entire documentation process for every individual — from students to professionals — by providing quick, transparent, and reliable support. We aim to eliminate confusion, reduce waiting time, and make every official task accessible and stress-free for everyone, no matter where they are.
            </p>

            <h3>Vision 🌍</h3>
            <p>
                Our vision is to become India’s most trusted digital documentation platform — connecting millions of users with verified services, ensuring ease, accuracy, and comfort in every process. We envision a future where completing official paperwork is as simple as sending a message.
            </p>
        </div>

        <div>
            <img src={msnvsnimg} className='img'/>
        </div>
    </div>


  )
}

export default MsnVsn