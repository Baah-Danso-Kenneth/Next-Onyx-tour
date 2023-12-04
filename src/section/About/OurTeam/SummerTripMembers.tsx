import MeetPeople from '@/components/MeetPeople'
import { meetSummerTeam } from '@/components/shared/Objects'
import React from 'react'

function SummerTripMembers() {
    return (
        <div className='grid-meet-up'>
         {meetSummerTeam.map((item,index)=>(
            <MeetPeople key={index} {...item}/>
         ))} 
        </div>
      )
}

export default SummerTripMembers
