import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer/Footer'
import GraphicsIntro from '../components/Graphics/GraphicsIntro'
import GraphicsHero from '../components/Graphics/GraphicsHero'
const Graphics = () => {
  return (
    <div>
        <Navbar />
        <GraphicsIntro />
        <GraphicsHero />
        <Footer/>
    </div>
  )
}

export default Graphics