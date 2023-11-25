import RecommendCard from '@/components/Cards/RecommendationCard'
import { summer_experiences } from '@/components/shared/Objects'
import React from 'react'

function SummerExperience() {
  return (
    <div className='recommendation-items'>
           {summer_experiences.map((item,index)=>(
            <RecommendCard key={index} {...item}/>
        ))}
      
    </div>
  )
}

export default SummerExperience
