import MeetPeople from '@/components/MeetPeople'
import { OnyxTeamMembers } from '@/components/shared/Objects'
import React from 'react'

function TheOnyxTeam() {
  return (
    <div className='grid-meet-up'>
     {OnyxTeamMembers.map((item,index)=>(
        <MeetPeople key={index} {...item}/>
     ))} 
    </div>
  )
}

export default TheOnyxTeam
