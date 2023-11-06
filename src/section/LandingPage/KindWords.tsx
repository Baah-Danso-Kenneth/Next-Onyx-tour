import RecommendCard from '@/components/Card/RecommendCard'
import React from 'react'

function KindWords() {

  const testimonials = [
    {statement:'Truly transformative experience and I can’t wait to travel with them again! Highly recommended for solo female travelers!', name:'Shingle T.'},
    {statement:'I didn’t know any of the women in the group, but it only took a few minutes to feel that I was among friends. Everyone was fun and interesting, and Wild Terrains created an atmosphere that made us all feel like we belonged. I would recommend this trip to anyone, of any age or background who is looking for a new experience.',name:'Shingle T.'},
    {statement:'Truly transformative experience and I can’t wait to travel with them again! Highly recommended for solo female travelers!', name:'Shingle T.'},
    {statement:'Truly transformative experience and I can’t wait to travel with them again! Highly recommended for solo female travelers!', name:'Shingle T.'},
    {statement:'Truly transformative experience and I can’t wait to travel with them again! Highly recommended for solo female travelers!', name:'Shingle T.'},
    {statement:'I didn’t know any of the women in the group, but it only took a few minutes to feel that I was among friends. Everyone was fun and interesting, and Wild Terrains created an atmosphere that made us all feel like we belonged. I would recommend this trip to anyone, of any age or background who is looking for a new experience.',name:'Suzzy'}
  ]
  return (
    <div className='kind-word-container'>
        <div className="kind-word-container-elements">
            <div className="title">
                <p>Kind words</p>
            </div>

            <div className="float-kind-word">
              {testimonials.map(({name, statement}, index)=>(
                <RecommendCard key={index} name={name} statement={statement}/>
              ))}

            </div>

            <div className="button">
              <button>more this way</button>
            </div>
        </div>
    </div>
  )
}

export default KindWords
