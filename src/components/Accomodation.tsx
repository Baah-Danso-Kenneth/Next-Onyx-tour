import Image, { StaticImageData } from 'next/image'
import React from 'react'


interface AccommodationProps{
    accomodation_img:StaticImageData;
    accomodation_name:string;
    accomodation_location:string;
    accomodation_info:string;
}

function Accomodation({accomodation_img,accomodation_name,
                        accomodation_location,
                         accomodation_info}:AccommodationProps) {
  return (
    <div className='accomodation-container'>
      <div className="accomodation-container-img">
        <Image src={accomodation_img} alt="accomodation"/>
      </div>
      <div className="accomodation-name">
        <h5>{accomodation_name}</h5>
      </div>
      <div className="accomodation-location">
        <p>{accomodation_location}</p>
      </div>
      <div className="accomodation-info">
        <p>{accomodation_info}</p>
      </div>
    </div>
  )
}

export default Accomodation
