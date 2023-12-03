import RecommendCard from '@/components/Cards/RecommendationCard'
import { experiences } from '@/components/shared/Objects'
import React from 'react'

function WinterExperience() {
  return (
    <div className='recommendation-items'>
           {experiences.map((item,index)=>(
            <RecommendCard key={index} {...item}/>
        ))}
      
    </div>
  )
}

export default WinterExperience
