import { StaticImageData } from 'next/image'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


interface LeaderProps{
    src:StaticImageData;
    leader:string;
}
function Leader({src,leader}:LeaderProps) {
  return (
    <div className='leader-content'>
       <div className='leader-content-title'>
        <h2>Meet your trip leader</h2>
        </div>
         <div className="image-content">
            <Image src={src} alt='trip-leader'/>
         </div>
         <div className="button-btn">

          <button>
            <Link href="#" className='link'>meet  {leader}</Link>
          </button>
         </div>
    </div>
  )
}

export default Leader
