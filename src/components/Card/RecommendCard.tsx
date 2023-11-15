import React from 'react'

export interface CardProps{
    name:string;
    statement:string;
}

function RecommendCard({name, statement}:CardProps) {
  return (
    <div className='card-container'>
      <div className="card-item">
        <p>{statement}</p>
      </div>
      <h6>{name}</h6>
    </div>
  )
}

export default RecommendCard
