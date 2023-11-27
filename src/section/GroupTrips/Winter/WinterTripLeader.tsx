import MeetLeader from '@/components/MeetLeader'
import React from 'react'
import WinterLeaderImg from '../../../../public/assets/images/leader-1.jpg';


function WinterTripLeader() {
  return (
    <div className='flex-item'>
       <MeetLeader img={WinterLeaderImg} title="meet your trip leader" btn_text='meet suzzy'/>
    </div>
  )
}

export default WinterTripLeader
