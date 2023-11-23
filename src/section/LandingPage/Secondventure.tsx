import React from 'react'
import Arts from '../../../public/assets/images/artsszone.png'
import Image from 'next/image'

function Secondventure() {
  return (
    <div className='adventure-components-second'>
        <div className="adventure-components-second-elements">
            <div className="adventure-components-elements-second-image">
                <Image src={Arts} alt="arts"/>
            </div>

            <div className="adventure-components-elements-second-text">
                <div className="title">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                </div>
   
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla mollitia 
                    quidem magnam nam quo sequi repellat, assumenda ea in reprehenderit officiis soluta, dolores similique dolor dolorem cumque, laboriosam autem! Provident?</p>          
                <div className="adventure-second-btn">
                    <button>winter trips</button>
                </div>
            </div>
        </div>

   </div>
  )
}

export default Secondventure
