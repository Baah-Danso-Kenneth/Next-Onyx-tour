import React from 'react'
import  CompanyLogo from '../../../public/assets/images/onyx-loader-logo.png';
import StarImage from '../../../public/assets/images/star.png';
import BookingImage from '../../../public/assets/images/booking.png';
import ShadeImage from '../../../public/assets/images/swim-shade.png';



import Image from 'next/image';

function Instruction() {
  return (
    <div className='instructor-container'>
        <div className="instructor-container-elements">

            <div className="logo">
                <Image src={CompanyLogo} alt='logo-company'/>
            </div>

            <div className="items">

                <div className="first-item">
                    <Image src={StarImage} alt="star-image"/>
                  <h3>Group trips</h3>
                  <p>We really hate shouting across a dinner table, so we cap our group size 
                    at 10-12 women per trip. No ifs, ands, or buts about it. </p>
                </div>

                <div className="second-item">
                    <Image src={BookingImage} alt='booking-img'/>
                  <h3>flexible bookings</h3>
                  <p>Life happens. Rest assured you can change 
                    your trip date anytime up to 75 days before your original trip’s departure.  </p>
                </div>

                <div className="third-item">
                    <Image src={ShadeImage} alt="swim-shade"/>
                <h3>price transparency</h3>
                  <p>Know where your tourism dollars are going...directly into the pockets of local, talented women. </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Instruction
