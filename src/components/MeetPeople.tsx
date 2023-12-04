import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface MeetPeopleProps{
   img:StaticImageData;
   name:string;
   task:string;
}
function MeetPeople({img,name,task}:MeetPeopleProps) {
  return (
    <div className='meet-people-container'>
        <div className="meet-people-container-elements">
            <Image src={img} alt="img"/>
            <div className="info">
                <h5>{name}</h5>
                <p>{task}</p>
            </div>
        </div>
    </div>
  )
}

export default MeetPeople
