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
      <div className="names-section">
      <h6>{name}</h6>
      </div>
    </div>
  )
}

export default RecommendCard