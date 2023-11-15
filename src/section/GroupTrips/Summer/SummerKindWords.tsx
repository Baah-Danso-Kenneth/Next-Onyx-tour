import RecommendCard from '@/components/Card/RecommendCard'
import React from 'react'

function SummerKindWords() {
  return (
    <div className='card-winter-recommend-container'>
        <div className="card-winter-recommend-container-elements">
          <RecommendCard name='- Torike A.' statement='My trip to Argentina was wonderful and surpassed any experience I could have curated myself or found with any other travel company. The activities are truly unique and unforgettable, all while supporting local, women business owners who have amazing personalities, fortitude, and knowledge in their respective fields. If you find yourself considering a trip with Wild Terrains, go! It is worth every penny and you will not regret it.'/>
          <RecommendCard name='- Oley M.' statement='MAGICAL. This trip exceeded my expectations in every way. The care and detail that went into planning every aspect of this trip was remarkable. We were treated like VIP guests everywhere. As much of a planner as I am, there was no way I could’ve replicated this trip on my own.'/>
          <RecommendCard name='- matthew Parker P.' statement='Argentina was the trip of a (and my) lifetime! Paige, our AMAZING, fun, knowledgeable trip leader is incredible and elevated all of it - providing insight into the culture, language and heart of the country. She is a star and beyond words - I would follow her anywhere! Thank you Wild Terrains, for moments I’ll never forget and stories I’ll never stop telling.'/>
          <RecommendCard statement='I have traveled extensively all over the world, and have to say that my recent excursion to Argentina with Wild Terrains was one of the most fun trips I have taken. Our group was a wonderful mix of independent, travel-loving women of all ages and professions.' name='- lovelace B.'/>
        </div>
    </div>
  )
}

export default SummerKindWords
