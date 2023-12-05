import React from 'react'
import Brand from '../../../../public/assets/images/yensa-nua.png'
import Image from 'next/image'

function MissionStatement() {
  return (
    <div className='mission-container'>
      <div className='mission-container-elements'>
        <div className="logo">
            <Image src={Brand} alt="branding-img"/>
        </div>

        <div className="text-statement">
            <h3>Lorem ipsum dolor sit amet consecte?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nobis. Provident assumenda corporis accusantium mollitia qui voluptatibus reprehenderit quasi laboriosam!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>

      </div>
    </div>
  )
}

export default MissionStatement
