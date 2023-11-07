import React from 'react'
import Image from 'next/image';

interface TeamProps{
    name:string;
    role:string;
    src:string
}

function TeamBio({name,role,src}:TeamProps) {
  return (
   <div>
      <div>
        <Image src={src}alt={name}/>
      </div>
      <div className="detail">
        <h3>{name}</h3>
        <h5>{role}</h5>
      </div>
    </div>
  )
}

export default TeamBio
