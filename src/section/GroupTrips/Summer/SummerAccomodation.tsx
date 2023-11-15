import Accomodation from '@/components/Accomodation'
import React from 'react'
import Accommodation4 from '../../../../public/assets/images/winter-ac-4.jpg';

function SummerAccomodation() {
  return (
    <div id='accomodation' className='winter-accomodation-container'>
        <div className="title">
            <h3>Where we sleep</h3>
        </div>
        <div className="winter-accomodation-container-element">
            <Accomodation name='Sansiro-gio' location='Ohio' description='classic | prestigeous' src={Accommodation4}/>
            <Accomodation name='Sansiro-gio' location='Ohio' description='classic | prestigeous' src={Accommodation4}/>
            <Accomodation name='Sansiro-gio' location='Ohio' description='classic | prestigeous' src={Accommodation4}/>
            <Accomodation name='Sansiro-gio' location='Ohio' description='classic | prestigeous' src={Accommodation4}/>
        </div>
      
    </div>
  )
}

export default SummerAccomodation
