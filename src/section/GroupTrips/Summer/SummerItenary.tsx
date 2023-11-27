import ItenaryCards from '@/components/ItenaryCards'
import { SummerItenaryData } from '@/components/shared/Objects'
import React from 'react'

function SummerItenary() {
  return (
    <div>
      {SummerItenaryData.map((item, index)=>{
        return(
            <ItenaryCards key={index} {...item}/>
        )
      })}
    </div>
  )
}

export default SummerItenary
