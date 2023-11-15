import WhatIncluded from '@/components/WhatIncluded'
import React from 'react'

function SummerWhatIncluded() {
  return (
    <div id='included'>
      <WhatIncluded
       included="what's included"
       accomodation='most meals (petite bonee)'
       activities='all activites listed'
       transport='transportation onyx & solid'
       tips='tips for drivers & guides'
       onyx_terrains='onyx terrains travel guide'
       not_included="What's not included"
       international='international flights o arrival'
       airport='airport transfer to hotel on arrival'
       meals='meals not listed above'
       insurance='mandatory travel insurance'
       incident='incident & personal expenses'

      />
    </div>
  )
}

export default SummerWhatIncluded
