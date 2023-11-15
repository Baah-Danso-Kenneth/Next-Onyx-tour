import BookedTrip from '@/components/Card/BookedTrip'
import React from 'react'
import SummerTrip from '../../../../public/assets/images/winter-img6.jpg'


function SummerTripContent() {
  return (
    <div id="trip-date" className="trips-date-container">
         <div className="trips-date-elements">
          <div className="trips-date-elements-text">
             <h1>Summer Group trips</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos accusantium aspernatur dolorem sapiente.</p>
              <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur voluptate fugiat unde laboriosam consequatur.</h6>
          </div>
        </div>
        <div className="summer-date-elements-card">
            <BookedTrip sold='sold out' date='summer trip: July 8 - 14, 2024' src={SummerTrip}/>
             <BookedTrip sold='sold out' date='summer trip: July 8 - 14, 2024' src={SummerTrip}/>
              <BookedTrip sold='sold out' date='summer trip: July 8 - 14, 2024' src={SummerTrip}/>
               <BookedTrip sold='sold out' date='summer trip: July 8 - 14, 2024' src={SummerTrip}/>
                <BookedTrip sold='sold out' date='summer trip: July 8 - 14, 2024' src={SummerTrip}/>
                 <BookedTrip sold='sold out' date='summer trip: July 8 - 14, 2024' src={SummerTrip}/>
                  <BookedTrip sold='sold out' date='summer trip: July 8 - 14, 2024' src={SummerTrip}/>
                   <BookedTrip sold='sold out' date='summer trip: July 8 - 14, 2024' src={SummerTrip}/>
        </div>
    </div>
  )
}

export default SummerTripContent
