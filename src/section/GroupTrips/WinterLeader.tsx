import React from 'react'
import Instructor from '../../../public/assets/images/instructor.jpg';
import Leader from '@/components/Leader';


function WinterLeader() {
  const LeaderInfo=[
    {leader:"philip", src:Instructor}
  ]
  return (
    <div id='leader' className='leader-container'>
        <div className="leader-container-element">
           {LeaderInfo.map((item, index)=>(
            <Leader key={index} {...item}/>
           ))}
        </div>
    </div>
  )
}

export default WinterLeader
