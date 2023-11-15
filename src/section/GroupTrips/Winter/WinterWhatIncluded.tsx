import WhatIncluded from '@/components/WhatIncluded'
import React from 'react'

function WinterWhatIncluded() {

  const allItems = [
    {
      included: "what's included",
      accomodation: 'most meals (as listed above)',
      activities: 'all activities listed above',
      transport: 'transportation to & from activities',
      tips: 'tips for drivers & guides',
      onyx_terrains: 'onyx terrains travel guide',
      not_included:"What's not included",
      international: 'international flights to /from ',
      airport: 'airport transfer to hotel on arrival',
      meals: 'meals not listed above',
      insurance: 'mandatory travel insurance',
      incident: 'incident & personal expenses',

    }

  ];

  return (
    <div id="included">
      {allItems.map((item,index)=>(
        <WhatIncluded key={index} {...item}/>
      ))}
    </div>
  )
}

export default WinterWhatIncluded
