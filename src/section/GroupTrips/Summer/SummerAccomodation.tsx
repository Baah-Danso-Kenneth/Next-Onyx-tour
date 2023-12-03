import Accomodation from '@/components/Accomodation'
import { SummerAccomodation_data } from '@/components/shared/Objects'
import React from 'react'

function SummerAccomodation() {
    return (
        <div className='accomodation-grid'>
          {SummerAccomodation_data.map((item,index)=>{
            return(
                <Accomodation key={index} {...item}/>
            )
          })}
        </div>
      )
}

export default SummerAccomodation
