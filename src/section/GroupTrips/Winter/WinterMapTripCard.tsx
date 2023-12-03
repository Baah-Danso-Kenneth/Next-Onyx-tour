import TripCard from '@/components/Cards/TripCard'
import { WinterTripInfo } from '@/components/shared/Objects'
import React from 'react'

function WinterMapTripCard() {
    return (
        <div className='summer-flex'>
          {WinterTripInfo.map((item,index)=>{
            return(
                <TripCard key={index} {...item}/>
            )
          })}
        </div>
      )
}

export default WinterMapTripCard
