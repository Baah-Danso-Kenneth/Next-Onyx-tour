import MeetLeader from '@/components/MeetLeader'
import React from 'react'
import SummerLeaderImg from '../../../../public/assets/images/instructor.jpg'

function SummerTripLeader() {
  return (
    <div className='flex-item'>
    <MeetLeader img={SummerLeaderImg} title="meet your trip leader" btn_text='meet paul'/>
 </div>
  )
}

export default SummerTripLeader
