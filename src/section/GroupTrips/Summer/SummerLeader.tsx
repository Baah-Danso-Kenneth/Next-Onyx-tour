import LeaderSummer from '@/components/LeaderSummer'
import React from 'react'
import LeaderImg from '../../../../public/assets/images/leader-1.jpg'


function SummerLeader() {
  return (
    <div id='leader' className='leader-container'>
        <div className="leader-container-element">
            <LeaderSummer leader='Houston' src={LeaderImg}/>
        </div> 
    </div>
  )
}

export default SummerLeader
