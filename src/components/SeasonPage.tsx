import Image from 'next/image';
import React from 'react'

interface SeasonalProps{
    season:string;
    heroImg:string;
    name:string;
}

function SeasonPage({season, heroImg}:SeasonalProps) {
  return (
    <div className='season-container'>

      <div className="season-hero-container">
        <div className="img"><Image src={heroImg} alt=''/></div>
        <div className="text">{season}</div>
      </div>
      <div className="season-hero-elments">

      </div>
    </div>
  )
}

export default SeasonPage
