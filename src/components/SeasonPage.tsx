import Image, { StaticImageData } from 'next/image';
import React from 'react'
import MiniRoute from './MiniRoute';

interface SeasonalProps{
    season?:string;
    name?:string;
    info?:string;
    title?:string;
    src:StaticImageData;
    days:string;
}

function SeasonPage({season,src,title,info,name,days}:SeasonalProps) {
    
  return (
    <div className='season-container'>

      <div className="season-hero-container">
        <div className="img"><Image src={src} alt='img-alternative'/></div>
          <div className="text"><p>{season}</p></div>
      </div>
      <div className="season-hero-elements">
        <div className="season-hero-info">
          <h1>{title}</h1>
          <div className='duration'>
            <h6>{days}</h6>
             <p className='line'>|</p>
          </div>
          <p>{info}</p>
        </div>
        <MiniRoute/>
      </div>
      
    </div>
  )
}

export default SeasonPage
