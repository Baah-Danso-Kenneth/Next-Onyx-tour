import RecommendCard from '@/components/Cards/RecommendationCard'
import { what_we_think_summer } from '@/components/shared/Objects'
import React from 'react'

function SummerWhatWeThink() {
    return (
        <div className='what-we-think-grid'>
               {what_we_think_summer.map((item,index)=>(
                <RecommendCard key={index} {...item}/>
            ))}
          
        </div>
      )
}

export default SummerWhatWeThink
