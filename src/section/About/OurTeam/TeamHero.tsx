import React from 'react'
import Image from 'next/image'
import ImageTeam from '../../../../public/assets/images/absolute_team.jpg'

function TeamHero() {
  return (
    <div className='about-hero-container'>
      <Image src={ImageTeam} alt="about-hero-section"/>
    </div>
  )
}

export default TeamHero
