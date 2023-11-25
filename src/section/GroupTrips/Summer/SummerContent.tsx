import React from 'react'
import SummerMapTripCards from './SummerMapTripCards'
import TripStatement from '@/components/TripStatement'

function SummerContent() {
  return (
    <div className='main-content-season'>
      <div className="main-content-season-elements">
        <TripStatement title='Summer group trips' statement='Our 2024 trips are 7 days, traveling through Paris and Provence. Prices start at USD $4,990 per person.'/>
        <TripStatement title='Winter group trips' statement='Our 2024 trips are 7 days, traveling through Paris and Provence. Prices start at USD $4,990 per person.'/>
      <SummerMapTripCards/>
      </div>
   </div>
  )
}

export default SummerContent
