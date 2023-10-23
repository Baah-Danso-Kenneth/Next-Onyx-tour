import Card from '@/components/Cards/Card'
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
        <div className="kind-word-container-element">
        <div className="kind-word-container-title">
            <h3>Kind words</h3>
        </div>
       <div className="flex-card-container">
          {testimonials.map(({name,statement},index)=>(
            <Card key={index} name={name} statement={statement}/>
          ))}
       </div>
       </div>
    </div>
  )
}

export default KindWords
