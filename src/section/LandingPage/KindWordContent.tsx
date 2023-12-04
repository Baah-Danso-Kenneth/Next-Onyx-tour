import React from 'react'
import RecommendationContent from './RecommendationContent'
import RecommendCard from '@/components/Cards/RecommendationCard'

function KindWordContent() {
    const kindwordStatement=[
        {id:1, name:'— Erin E.', statement:'Truly transformative experience and I can’t wait to travel with them again! Highly recommended for solo female travelers!'},
        {id:2, name:'— Beverlee M.',statement:'Go! I cannot encourage you enough. It is life-changing.' },
        {id:3, name:'— Theresa T.', statement:'Grab your sister, best friend, or mom and sign up for the next travel experience. You’ll leave happy, full, and inspired!'},
        {id:4, name:'— Renee F', statement:'Wild Terrains is unlike any travel company out there! - and this is coming from a gal who has traveled the world solo!! Lauren and her team made me feel so welcome and “at home”. Truly an amazing experience!'},
         {id:5, name:'— Laurice F.', statement:'I didn’t know any of the women in the group, but it only took a few minutes to feel that I was among friends. Everyone was fun and interesting, and Wild Terrains created an atmosphere that made us all feel like we belonged. I would recommend this trip to anyone, of any age or background who is looking for a new experience.'},
         {id:6, name:'— Julie D.', statement:'I must say, this trip exceeded all my expectations. I personally adore planning my own travel and adventures so I was unsure how I would feel coming on a planned group trip. This trip will change your mind about group travel.'}   
    ]

  return (
    <div className='kind-word-items'>
        {kindwordStatement.map((item, index)=>(
            <RecommendCard key={index} {...item}/>
        ))}
      
    </div>
  )
}

export default KindWordContent
