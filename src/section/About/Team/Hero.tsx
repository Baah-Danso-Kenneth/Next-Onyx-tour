import React from 'react'
import TeamImage from '../../../../public/assets/images/onyx-group.jpg'
import Image from 'next/image'


function Hero() {
  return (
    <div className='team-hero-img'>
      <Image src={TeamImage} alt='about-team-img'/>
    </div>

  )
}

export default Hero
