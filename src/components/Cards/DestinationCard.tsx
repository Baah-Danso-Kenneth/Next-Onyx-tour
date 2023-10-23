import Image from 'next/image';
import React from 'react'

interface DestinationProps{
    src:string;
    itenary:string;
    name:string;
    icon:string
}


function DestinationCard({src, itenary, name, icon}:DestinationProps) {
  return (
    <div className='destination-container'>
      <div className="destination-img">
        <Image src={src} alt="image"  />
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
