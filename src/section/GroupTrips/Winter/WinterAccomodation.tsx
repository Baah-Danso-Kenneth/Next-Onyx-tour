import Accomodation from '@/components/Accomodation'
import { winterAccomodation_data } from '@/components/shared/Objects'
import React from 'react'

function WinterAccomodation() {
  return (
    <div className='accomodation-grid'>
      {winterAccomodation_data.map((item,index)=>{
        return(
            <Accomodation key={index} {...item}/>
        )
      })}
    </div>
  )
}

export default WinterAccomodation
