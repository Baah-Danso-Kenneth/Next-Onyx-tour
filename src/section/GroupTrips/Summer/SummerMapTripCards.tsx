import TripCard from '@/components/Cards/TripCard'
import { SummerTripInfo } from '@/components/shared/Objects'
import React from 'react'

function SummerMapTripCards() {
  return (
    <div className='summer-flex'>
      {SummerTripInfo.map((item,index)=>{
        return(
            <TripCard key={index} {...item}/>
        )
      })}
    </div>
  )
}

export default SummerMapTripCards
