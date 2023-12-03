import React from 'react'
import Image from 'next/image'
import Arts from '../../../public/assets/images/artsszone.png'

function ThirdAdventure() {
  return (
       <div className='adventure-components'>
        <div className="adventure-components-elements">
            <div className="adventure-components-elements-image">
                <Image src={Arts} alt="arts"/>
            </div>

            <div className="adventure-components-elements-text">
                <div className="title">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                </div>
   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla mollitia 
                    quidem magnam nam quo sequi repellat, assumenda ea in reprehenderit officiis soluta, dolores similique dolor dolorem cumque, laboriosam autem! Provident?</p>
                
                <div className="adventure-btn">
                    <button>winter trips</button>
                </div>
            </div>
        </div>

   </div>
  )
}

export default ThirdAdventure
