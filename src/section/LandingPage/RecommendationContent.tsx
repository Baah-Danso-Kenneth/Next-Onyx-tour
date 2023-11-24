import RecommendCard from '@/components/Cards/RecommendationCard'
import React from 'react'


function RecommendationContent() {
    const recommendationStatement=[
        {id:1, statement:"Going on a trip with Wild Terrains is like having an in-the-know girlfriend arrange your itinerary.",name:"- Laurin H."},
        {id:2, statement:"Cannot recommend Wild Terrains—and the Vogue-worthy curation of their trips—enough!.",name:"- Fredrick N."},
        {id:3, statement:"They are truly the most perfectly curated trips - and that is coming from a very selective traveler.",name:"- Benson K."},
        
    ]
  return (
    <div className='recommendation-items'>
        {recommendationStatement.map((item,index)=>(
            <RecommendCard key={index} {...item}/>
        ))}
      
    </div>
  )
}

export default RecommendationContent
