import React from 'react'
import SeasonRoute from './SeasonRoute'

function BriefMessage() {
  return (
    <div className='message-container'>
        <div className="message-container-elements">
            <div className="title">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, assumenda!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam accusantium alias ut necessitatibus at ex unde modi nostrum provident.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat animi earum sed eaque neque exercitationem facere aut id inventore aliquid!</p>
            </div>
            <SeasonRoute/>
        </div>   
    </div>
  )
}

export default BriefMessage
