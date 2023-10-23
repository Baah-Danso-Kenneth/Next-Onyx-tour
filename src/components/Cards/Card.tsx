import React from 'react'

interface CardProps{
    name:string;
    statement:string;
}

function Card({name, statement}:CardProps) {
  return (
    <div className='card-container'>
      <div className="card-item">
        <p>{statement}</p>
      </div>
      <h6>{name}</h6>
    </div>
  )
}

export default Card
