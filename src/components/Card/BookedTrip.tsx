import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface BookedTripInterface{
    sold?:string;
    date:string;
    img:StaticImageData;
}

function BookedTrip({sold,date,img}:BookedTripInterface) {
  return (
    <div className='booked-container'>
        <div className="booked-container-img">
            <div className="sold">
                <p>{sold}</p>
            </div>
            <Image src={img} alt="book-img"/>
        </div>
        <div className="text">
            <p>{date}</p>
            <div className="button-content">
                <button>book now</button>
            </div>
        </div>
      
    </div>
  )
}

export default BookedTrip
