import React from 'react'
import MiniRoute from './MiniRoute';


interface InformationProps{
    title:string;
    duration_from:string;
    duration_to:string;
    statement:string;
}
function InformationOnTour({title,duration_from,duration_to,statement}:InformationProps) {
  return (
    <div className='information-container'>
        <div className="information-container-elements">
             <div className="title">
                <p>{title}</p>
             </div>

            <div className="duration">
                <p>{duration_from} <span>|</span> {duration_to}</p>
            </div>

             <div className="statement">
                <p>{statement}</p>
             </div>
        </div>   

        <MiniRoute/>
 
    </div>
  )
}

export default InformationOnTour
