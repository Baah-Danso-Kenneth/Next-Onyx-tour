import React from 'react'

interface TripStatementProps{
    title:string;
    statement:string;
}
function TripStatement({title,statement}:TripStatementProps) {
  return (
    <div className='trip-statement-container'>
        <div className="trip-statement-container-elements">
            <div className="trip-statement-container-elements-title">
                <p>{title}</p>
            </div>

            <div className="trip-statement-container-elements-statements">
                <p>{statement}</p>
            </div>
        </div>
      
    </div>
  )
}

export default TripStatement
