import React from 'react'
import Image from 'next/image'
import GroupImage from '../../../public/assets/images/all-img.jpg'


function MeetUp() {
  return (
    <div className='meet-up-container'>
        <div className="meet-up-container-elements">
            <div className="meet-up-container-elements-img">
                <Image src={GroupImage} alt='groupies'/>
            </div>

            <div className="meet-up-statement">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <div className="meet-up-text">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio delectus commodi 
                    maxime voluptatibus rem vero facere deserunt quidem sed laudantium.</p>
                 </div>
               <div className="meet-up-button">
                <button>More of us</button>
            </div>
            </div>



        </div>
    </div>
  )
}

export default MeetUp
