import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface SeasonProps{
   img:StaticImageData;
   text:string
}

function SeasonHeroSection({img,text}:SeasonProps) {
  return (
    <div className='season-container'>
        <Image src={img} alt=""/>
      <div className="season-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default SeasonHeroSection
