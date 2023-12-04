import React from 'react'
import ShowImage from '../../../../public/assets/images/hero-img-lg-screen.jpg';
import Image from 'next/image';


function FirstSection() {
  return (
    <div className='first-section-container'>
      <div className="first-section-container-elements">

          <div className="image-section">
             <Image src={ShowImage} alt='smile-img'/>
          </div>

          <div className="text-section">
              <h3 className="title">Lorem ipsum dolor sit, amet consectetur!</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis amet, omnis ea iure doloremque recusandae magnam quaerat blanditiis. Eveniet voluptatum voluptates ex nihil? Impedit quisquam alias facere nam, hic harum.</p>
          </div>

      </div>
    </div>
  )
}

export default FirstSection
