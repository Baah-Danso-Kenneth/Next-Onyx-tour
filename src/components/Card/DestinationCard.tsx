import React from 'react'
import Image from 'next/image';

interface DestinationProps{
  name:string;
  src:string;
  icon:string;
  itenary:string;
}

function DestinationCard({name, src, icon, itenary}:DestinationProps) {
  return (
    <div className='destination-container'>
      <div className="destination-img">
        <Image src={src} alt="destination-img"   width={200} height={250} quality={100}/>
        <p>{name}</p>
      </div>
      <div className="destination-statement">
        <h3>{itenary}</h3>
        <p>{icon}</p>
      </div>
    </div>
  )
}

export default DestinationCard
