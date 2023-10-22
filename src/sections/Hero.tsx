import React from 'react'
import HeroImage from '../../public/assets/images/hero_image.png';
import Image from 'next/image';

function Hero() {
  return (
    <div className='hero-container'>
      <div className="hero-section-overlay"></div>
      <div className="hero-image-section">
        <Image className='img-img' src={HeroImage} alt="source"/>
      </div>
      <div className="hero-statement">
        <p>Change awaits in the Journey and destination</p>
      </div>
      </div>
  )
}

export default Hero
