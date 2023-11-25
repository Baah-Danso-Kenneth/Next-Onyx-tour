import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface TripsInterface{
    img:StaticImageData;
    date:string;
    button_text:string
}

function TripCard({img,date,button_text}:TripsInterface) {
  return (
    <div className='trip-card-container'>
        <div className="trip-card-container-elements">
            <div className="trip-card-container-elements-img">
               <Image src={img} alt=""/>
            </div>
            <div className="trip-card-container-elements-description">
                <p>{date}</p>
            </div>
            <div className="trip-card-container-elements-button">
                <button>{button_text}</button>
            </div>
        </div>
    </div>
  )
}

export default TripCard
