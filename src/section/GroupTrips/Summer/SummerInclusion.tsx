import Inclusion from '@/components/Inclusion'
import React from 'react'

function SummerInclusion() {
    return (
        <div className='host-inclusion-container'>
            <div className="host-inclusion-container-elements">
                <Inclusion
                included_title="what's included"
                accomodation="all accomodations"
                meals="most meals (as listed above)"
                activities="all activities listed above"
                flight="mendoza to buenos aires flight"
                transport="transportaion to & from activities"
                tips="tips for drivers & guides"
                guide="onyx aires travel guide"
    
    
                not_included_title="what's not included"
                airport="airport transfer to hotel on arrival"
                international="international flights to/from Ohio"
                not_listed_meals="meals not listed above"
                expenses="incidental & personal expenses"
    
                />
            </div>
        </div>
      )
}

export default SummerInclusion
