import React from 'react'
import CentralImage from '../../../public/assets/images/central.jpg';
import VoltaImage from '../../../public/assets/images/central.jpg';
import EasternImage from '../../../public/assets/images/eastern.jpg';
import GreaterImage from '../../../public/assets/images/greater_accra.jpg';
import DestinationCard from '@/components/Card/DestinationCard';


function WhereWeGo() {
    const destinationInfo=[
    {name:'Volta Region', src:VoltaImage, itenary:'See the itenary', icon:'>>'},
    {name:'Central Region', src:CentralImage, itenary:'See the itenary', icon:'>>'},
    {name:'Greater Accra', src:GreaterImage, itenary:'See the itenary', icon:'>>'},
    {name:'Eastern Region', src:EasternImage, itenary:'See the itenary', icon:'>>'},
    {name:'Volta Region', src:VoltaImage, itenary:'See the itenary', icon:'>>'},
    {name:'Central Region', src:CentralImage, itenary:'See the itenary', icon:'>>'},
    {name:'Greater Accra', src:GreaterImage, itenary:'See the itenary', icon:'>>'},
    {name:'Eastern Region', src:EasternImage, itenary:'See the itenary', icon:'>>'},
]

  return (
    <div className='we-go-container'>
      <div className="we-go-container-elements">
        <p className="title">Where we go</p>
        
        <div className="places-container">
         {destinationInfo.map(({name, src, itenary, icon},index)=>(
          <DestinationCard key={index} name={name} src={src.src} itenary={itenary} icon={icon}/>
         ))}
        </div>
        
      </div>
    </div>
  )
}

export default WhereWeGo
