import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface BookedTripInterface{
    sold?:string;
    date:string;
    src:StaticImageData;
}

function BookedTrip({sold,date,src}:BookedTripInterface) {
    const randomValue=Math.random();
    const showSold = randomValue < 0.5;

  return (
    <div className="booked-container">
        <div className="booked-container-img">

            {showSold && (
             <div className="sold">
                <p>{sold}</p>
            </div>
            )}

            <Image src={src} alt="book-img" />
        </div>
        <div className="text">
            <p>{date}</p>
            <div className={showSold ? "diff-color": "button-content"}>
                <button>
                    {showSold ? "Join wait list" :"book now"}
                </button>
            </div>
        </div>
      
    </div>
  )
}

export default BookedTrip
