import React from 'react'
import ThirdImage from '../../../public/assets/images/pool-side.jpg'
import Image from 'next/image'

function ThirdSection() {
    return (
        <div className='first-section-container'>
          <div className="first-section-container-elements">
    
              <div className="image-section">
                 <Image src={ThirdImage} alt='pool-img'/>
              </div>
    
              <div className="text-section">
                  <h3 className="title">Lorem ipsum dolor sit, amet consectetur!</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis amet, omnis ea iure doloremque recusandae magnam quaerat blanditiis. Eveniet voluptatum voluptates ex nihil? Impedit quisquam alias facere nam, hic harum.</p>

                  <div className="btn-text">
                    <button>sounds like you? this way</button>
                  </div>
              </div>

          </div>
        </div>
      )
}

export default ThirdSection
