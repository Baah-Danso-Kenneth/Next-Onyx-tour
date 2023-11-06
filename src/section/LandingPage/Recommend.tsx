import RecommendCard from '@/components/Card/RecommendCard'
import React from 'react'

function Recommend() {
      const recommendationInfo=[
        {name:"Sharyn V.", statement:"Going on a trip with Wild Terrains is like having an in-the-know girlfriend arrange your itinerary."},
        {name:"Rebecca H.", statement:"Cannot recommend Wild Terrains—and the Vogue-worthy curation of their trips—enough!"},
        {name:"Amy G.", statement:"They are truly the most perfectly curated trips - and that is coming from a very selective traveler."},

    ]


  return (
    <div className='recommend-container'>
      <div className="recommend-container-elements">
        {recommendationInfo.map(({name, statement}, index)=>(
          <RecommendCard key={index} name={name} statement={statement}/>
        ))}
      </div>
    </div>
  )
}

export default Recommend
