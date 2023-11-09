import React from 'react'
import BackDrop from '../../../public/assets/images/hero-img-lg-screen.jpg'
import Image from 'next/image'

function Hero() {
  return (
    <div className='hero-section'>
      <div className='image-content'>
      <Image className='hero-image' src={BackDrop} alt="background"/>
      </div>
      <div className='hero-section-info'>
          <p>Change awaits in the journey and destination</p>
       </div>
    </div>
  )
}

export default Hero
