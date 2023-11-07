import React from 'react'
import Image from 'next/image';

interface TeamProps{
    name:string;
    role:string;
    src:string
}

function TeamBio({name,role,src}:TeamProps) {
  return (
   <div className='bio-card'>
      <div className='bio-card-img'>
        <Image src={src}alt={name} width={234.7} height={233.7} quality={100}/>
      </div>
      <div className="bio-card-detail">
        <h3>{name}</h3>
        <h5>{role}</h5>
      </div>
    </div>
  )
}

export default TeamBio
