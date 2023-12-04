import React from 'react'
import RecommendCard from '../Cards/RecommendationCard'
import KindWordContent from '@/section/LandingPage/KindWordContent'

function KindWords() {
  return (
    <div className='kind-word-container'>
         <div className="title">
           <h1>kind words</h1>
         </div>

           <div className="kind-word-container-element">
              <KindWordContent/>
           </div>

           <div className="kind-word-btn">
            <button>more this way</button>
           </div>

    </div>
  )
}

export default KindWords
