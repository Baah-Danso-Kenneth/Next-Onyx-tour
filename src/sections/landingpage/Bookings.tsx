import React from 'react'
import Image from 'next/image'
import LogoCompany from '../../../public/assets/images/campalla.png'
import StarImage from '../../../public/assets/images/star.png';
import SwimImage from '../../../public/assets/images/swim-shade.png';
import BookImage from '../../../public/assets/images/booking.png';


function Bookings() {
  return (
    <div className='booking-container'>
      <div className="booking-elements">
          <div className="logo">
            <Image  src={LogoCompany}alt=""/>
          </div>
          <div className="flex-content">
            <div className="flex-content-1">
                <Image src={StarImage} alt='star-img'/>
                <h3>Flexings</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolorum voluptate. A, fugiat? Facilis 
                    consequatur veniam temporibus natus beatae esse.</p>
            </div>

              <div className="flex-content-1 adjust">
                <Image  src={BookImage} alt='book-img'/>
                <h3>Flexings</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolorum voluptate. A, fugiat? Facilis 
                    consequatur veniam temporibus natus beatae esse.</p>
            </div>


              <div className="flex-content-1 adjust">
                <Image src={SwimImage} alt='swim'/>
                <h3>Flexings</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolorum voluptate. A, fugiat? Facilis 
                    consequatur veniam temporibus natus beatae esse.</p>
            </div>

          </div>
      </div>
    </div>
  )
}

export default Bookings
