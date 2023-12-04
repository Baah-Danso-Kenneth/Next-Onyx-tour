import React from 'react'
import WinterMeetUp from './WinterMeetUp'

function WinterMeetUpContent() {
  return (
    <div className='main-content-meet-up'>
        <div className="main-content-meet-up-title">
            <p>People you&apos;ll meet</p>
          </div>
        <div className="main-content-meet-up-elements">
            <WinterMeetUp/>
        </div>
      
    </div>
  )
}

export default WinterMeetUpContent
