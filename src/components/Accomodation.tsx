import React from 'react'
import { StaticImageData } from 'next/image';
import  Image  from 'next/image';

interface AccomadationProps{
  src:StaticImageData;
  name:string;
  location:string;
  description:string;
}

function Accomodation({src,name,location,description}:AccomadationProps){
  return (
<div className="content">
     <div className="img">
        <Image src={src} alt='accomodation-img'/>
      </div>

    <div className="accomodation-text">
      <h5>{name}</h5>
      <p>{location}</p>
     <p>{description}</p>
   </div>

</div>
  )
}

export default Accomodation
