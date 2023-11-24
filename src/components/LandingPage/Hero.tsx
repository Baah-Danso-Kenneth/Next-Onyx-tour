import Image from 'next/image'
import React from 'react'
import HomeScreenImage from '../../../public/assets/images/about-hero.jpg'

function Hero() {
  return (
    <div className='hero-container'>
      <Image src={HomeScreenImage} alt="source"/>
      <div className="hero-text">
        <p>Change awaits in the journey and destination</p>
      </div>
    </div>
  )
}

export default Hero
