import React from 'react'
import Image, { StaticImageData } from 'next/image'

 interface LeaderProps{
   title:string;
   img:StaticImageData;
   btn_text:string;
}

function MeetLeader({title,img,btn_text}:LeaderProps) {
  return (
    <div className='leader-container'>
        <div className="leader-container-elements">
          <div className="leader-container-elements-title">
             <h5>{title}</h5>
          </div>

      <div className="leader-container-elements-image">
        <Image src={img} alt="leader-img"/>
      </div>
      <div className="leader-btn">
        <button>{btn_text}</button>
      </div>
    </div>
    </div>
  )
}

export default MeetLeader
