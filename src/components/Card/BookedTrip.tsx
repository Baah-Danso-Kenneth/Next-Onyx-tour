import Image from 'next/image';
import React from 'react'

interface BookedTripInterface{
    sold?:string;
    date:string;
    img:string;
}

function BookedTrip({sold,date,img}:BookedTripInterface) {
  return (
    <div className='booked-container'>
        <div className="img">
            <Image src={img} alt="book-img"/>
        </div>
        <div className="text">
            <p>{date}</p>
            <button>book now</button>
        </div>
      
    </div>
  )
}

export default BookedTrip
