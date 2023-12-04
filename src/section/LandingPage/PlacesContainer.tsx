import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface PlacesProps{
    image:StaticImageData;
    itenary:string;
    place:string;
    logo:React.ReactNode;
}
function PlacesContainer({image,itenary,place,logo}:PlacesProps) {
  return (
    <div className='places-container'>
      <Image src={image} alt="ping"/>
      <p className='place'>{place}</p>
      <div className="logo-itenary">
          <h1>{itenary}</h1>
          <p>{logo}</p>
      </div>
    </div>
  )
}

export default PlacesContainer
