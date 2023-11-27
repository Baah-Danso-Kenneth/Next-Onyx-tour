import TripStatement from '@/components/TripStatement'
import React from 'react'
import WinterMapTripCard from './WinterMapTripCard'

function WinterContent() {
    return (
        <div className='main-content-season' id='trip-date'>
          <div className="main-content-season-elements">
            <TripStatement title='Winter group trips' statement='Our 2024 trips are 7 days, traveling through Paris and Provence. Prices start at USD $4,990 per person.'/>
          <WinterMapTripCard/>
          </div>
       </div>
      )
}

export default WinterContent
