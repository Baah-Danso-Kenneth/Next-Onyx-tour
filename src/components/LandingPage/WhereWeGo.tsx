import React from 'react'
import { WhereWegoProps } from '../shared/Objects'
import PlacesContainer from '@/section/LandingPage/PlacesContainer'


function WhereWeGo() {
  return (
    <div className='where-we-go-container'>
        <div className="where-we-go-container-elements">
            <div className="title">
                <h1>Where we go</h1>
            </div>
            <div className="places">
              {WhereWegoProps.map((item, index)=>(
                <PlacesContainer key={index} {...item} />
              ))}
            </div>

        </div> 
    </div>
  )
}

export default WhereWeGo
