import MeetPeople from '@/components/MeetPeople'
import { meetWinWerTeam } from '@/components/shared/Objects'
import React from 'react'

function WinterTripMembers() {
    return (
        <div className='grid-meet-up'>
         {meetWinWerTeam.map((item,index)=>(
            <MeetPeople key={index} {...item}/>
         ))} 
        </div>
      )
}

export default WinterTripMembers
