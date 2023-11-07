import React from 'react'
import Image from 'next/image'
import AboutHeroImage from '../../../../public/assets/images/about-hero.jpg';

function Hero() {
  return (
    <div className='hero-img'>
      <Image src={AboutHeroImage} alt='about-hero-img'/>
    </div>
  )
}

export default Hero
