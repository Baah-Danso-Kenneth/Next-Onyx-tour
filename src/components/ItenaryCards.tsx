import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface ItenaryProps{
    img:StaticImageData;
    statement:string;
    meals:string;
    day:string;
}
function ItenaryCards({img,statement,meals,day}:ItenaryProps) {
  return (
    <div className='itenary-container' id='itenary'>

       <div className="itenary-flex">
        <div className="itenary-container-image">
            <Image src={img} alt="img"/>
        </div>

        <div className="itenary-container-text">
            <h3>{day}</h3>
            <p>{statement}</p>
            <p>{meals}</p>
        </div>  

    </div>

    </div>
  )
}

export default ItenaryCards
