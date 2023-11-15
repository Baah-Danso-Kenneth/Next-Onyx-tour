import React from 'react'
import { CardProps } from './RecommendCard'

function Motivation({name, statement}:CardProps) {
  return (
    <div className='motivation-card-container'>
      <div className="motivation-card-item">
        <p>{statement}</p>
      </div>
      <h6>{name}</h6>
    </div>
  )
}

export default Motivation
