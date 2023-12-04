import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';

 interface LeaderProps{
   title:string;
   img:StaticImageData;
   btn_text:string;
}

function MeetLeader({title,img,btn_text}:LeaderProps) {
  const router=useRouter()

  const currentSeason = router.pathname.includes('winter') ? 'winter' : 'summer'
  const link = `/${currentSeason}-trip-leader`


  return (
    <div className='leader-container' id='leader'>
        <div className="leader-container-elements">
          <div className="leader-container-elements-title">
             <h5>{title}</h5>
          </div>

      <div className="leader-container-elements-image">
        <Image src={img} alt="leader-img"/>
      </div>
      <div className="leader-btn">
        <button><Link className='link'href={link}>{btn_text}</Link></button>
      </div>
    </div>
    </div>
  )
}

export default MeetLeader
