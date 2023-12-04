import RecommendCard from '@/components/Cards/RecommendationCard'
import { what_we_think_about_winter } from '@/components/shared/Objects'
import React from 'react'

function WinterWhatweThink() {
    return (
        <div className='what-we-think-grid'>
               {what_we_think_about_winter.map((item,index)=>(
                <RecommendCard key={index} {...item}/>
            ))}
          
        </div>
      )
}

export default WinterWhatweThink
