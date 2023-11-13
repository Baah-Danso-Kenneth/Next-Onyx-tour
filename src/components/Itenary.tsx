import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface ItenaryProps{
  id?:number;
  name?:string;
  days:string;
  meals:string;
  info:string;
  src:StaticImageData
}
function Itenary({name,days,src,meals,info}:ItenaryProps) {
  return (
    <div className='itenary-container'>
         <div className="content">
           <div className="images">
            <Image src={src} alt="image-itenary"/>
           </div>

           <div className="text">
             <h6>{days}</h6>
             <p>{info}</p>
             <p>{meals}</p>
           </div>
         </div>
</div>
  )
}

export default Itenary
