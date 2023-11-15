import React from 'react'
import { LeaderProps } from './Leader'
import Image from 'next/image'
import Link from 'next/link'


function LeaderSummer({src, leader}:LeaderProps) {
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
            <Link href="/instructors/summer-instructor" className='link'>meet  {leader}</Link>
          </button>
         </div>
    </div>
  )
}


export default LeaderSummer
