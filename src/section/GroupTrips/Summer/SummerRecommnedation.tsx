import RecommendCard from '@/components/Card/RecommendCard'
import React from 'react'

function SummerRecommnedation() {
  return (
    <div className='winter-recommend-container'>
        <div className='winter-recommend-container-elements'>
        <RecommendCard name='- Liz O.' statement='Argentina was legitimately the best vacation of my life - full stop. Book it before it sells out!'/>    
        <RecommendCard name='- Margretta B.' statement='The trip was ABSOLUTELY INCREDIBLE…life changing. I can’t recommend it enough. It’s WORTH EVERY PENNY.'/>
       <RecommendCard name='- Elsie D.' statement='Still pinching myself - can’t believe how amazing Argentina was!'/>
         
      </div>
      
    </div>
  )
}

export default SummerRecommnedation
