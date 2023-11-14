import React from 'react'
import Accommodation1 from '../../../public/assets/images/winter-ac-img-1.jpg';
import Accommodation2 from '../../../public/assets/images/winter-ac-2.jpg';
import Accommodation3 from '../../../public/assets/images/winter-ac-3.jpg';
import Accommodation4 from '../../../public/assets/images/winter-ac-4.jpg';
import Accomodation from '@/components/Accomodation';


function WinterAccomodation() {
    const accomodationInfo=[
      {name:'Monte Khalu', location:'mendoza, balma', description:"elegant-classy | durable | quality",src:Accommodation1},
      {name:'entre cielos',location:'mendoza, balma', description:"elegant-classy | durable | quality",src:Accommodation2},
      {name:'Monte Khalu', location:'mendoza, balma', description:"elegant-classy | durable | quality",src:Accommodation3},
      {name:'Monte Khalu', location:'mendoza, balma', description:"elegant-classy | durable | quality",src:Accommodation4},
    ]

  return (
    <div id='accomodation' className='winter-accomodation-container'>
        <div className="title">
          <h3>where we sleep</h3>
        </div>
      <div className="winter-accomodation-container-element">
        {accomodationInfo.map((item,index)=>(
          <Accomodation key={index} {...item}/>
        ))}        
       <div className="winter-accomdation-container-statement"></div>
      </div>
    </div>
  )
}

export default WinterAccomodation
