import React from 'react'
import SummerTripMembers from './SummerTripMembers'

function AllContentSummerTrip() {
    return (
        <div className='main-content-meet-up'id='summer'>
            <div className="main-content-meet-up-title">
                <p>Summer trip</p>
              </div>
            <div className="main-content-meet-up-elements">
                <SummerTripMembers/>
            </div>
          
        </div>
      )
}

export default AllContentSummerTrip
