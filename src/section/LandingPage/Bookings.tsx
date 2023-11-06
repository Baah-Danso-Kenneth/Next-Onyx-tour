import React from 'react'
import Image from 'next/image'
import Logo from '../../public/assets/images/campalla.png';
import PricingImage from '../../public/assets/images/booking.png';
import SwimImage from '../../public/assets/images/swim-shade.png'
import Starimg from '../../public/assets/images/star.png';

function Bookings() {
  return (
    <div className='bookings-container'>
        <div className="bookings-container-elements">

            <div className="logo">
               <Image src={Logo} alt='company-logo'/>
            </div>
           <div className='flex-items'>
            <div className="first-item">
               <Image src={Starimg} alt="star-img"/>
               <h1>Flexing</h1>
               <p>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Vitae mollitia, aliquam enim suscipit sapiente sint?</p>
            </div>

            <div className="second-item">
            <Image src={SwimImage} alt="star-img"/>
               <h1>Flexing</h1>
               <p>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Vitae mollitia, aliquam enim suscipit sapiente sint?</p>
            </div>

            <div className="third-item">
               <Image src={PricingImage} alt="star-img"/>
               <h1>Flexing</h1>
               <p>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Vitae mollitia, aliquam enim suscipit sapiente sint?</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Bookings
