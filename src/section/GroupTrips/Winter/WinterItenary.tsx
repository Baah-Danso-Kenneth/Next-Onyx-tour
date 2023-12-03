import ItenaryCards from '@/components/ItenaryCards'
import { winterItenaryData} from '@/components/shared/Objects'
import React from 'react'

function WinterItenary() {
    return (
        <div>
          {winterItenaryData.map((item, index)=>{
            return(
                <ItenaryCards key={index} {...item}/>
            )
          })}
        </div>
      )
}

export default WinterItenary
