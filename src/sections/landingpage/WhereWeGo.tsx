import React from 'react'
import VoltaImage from '../../../public/assets/images/afajato.jpg';
import CentralImage from '../../../public/assets/images/central.jpg';
import EasternImage from '../../../public/assets/images/eastern.jpg';
import GreaterImage from '../../../public/assets/images/greater_accra.jpg';
import DestinationCard from '@/components/Cards/DestinationCard';



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
      <div className="we-go-element">
       <div className="title">
          <h3>Where We Go</h3>
        </div>  

        <div className="where-we-go-flex">
          {destinationInfo.map(({name, src, itenary, icon},index)=>(
            <DestinationCard key={index} name={name} src={src} itenary={itenary} icon={icon}/>
          ))}
        </div>
        </div>
    </div>
  )
}

export default WhereWeGo

