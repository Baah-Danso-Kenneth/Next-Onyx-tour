import Image from 'next/image'
import React from 'react'
import TeamWorkImg from '../../../public/assets/images/team-work.jpg'

function AboutHero() {
  return (
    <div className='about-hero-container'>
      <Image src={TeamWorkImg} alt="about-hero-section"/>
      <div className="vision">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis fugit ullam cumque doloremque possimus cupiditate officiis fugiat reiciendis nemo provident?</p>
      </div>
    </div>
  )
}

export default AboutHero
