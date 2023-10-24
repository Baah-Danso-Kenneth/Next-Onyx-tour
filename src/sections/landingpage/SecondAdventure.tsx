import React from 'react'
import ArtsImage from '../../../public/assets/images/artsszone.png'
import Image from 'next/image'

function SecondAdventure() {
  return (
    <div className='funtime2-container'>
    <div className="funtime2-container-element">
        <div className="img_section">
           <Image src={ArtsImage} alt='art-zone'/>
        </div>

        <div className="text-section">
            <div className="title">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sapiente 
                    hic nemo. Magni nemo quibusdam corporis asperiores dolorem c
                    upiditate ut.</p>
                <div className="button-section">
                    <button>2024 + 2025 Calender</button>
                </div>
            </div>
        </div>
    </div>
  
</div>
  )
}

export default SecondAdventure
