import React from 'react'


interface InclusionProps{
   included_title:string;
   accomodation:string;
   meals:string;
   activities:string;
   flight:string;
   transport:string;
   tips:string;
   guide:string;



   not_included_title:string;
   international:string;
   airport:string;
   not_listed_meals:string;
   expenses:string;

}

function Inclusion({
    included_title,
    accomodation,
    meals,
    activities,
    flight,
    transport,
    tips,
    guide,
    not_included_title,
    international,
    airport,
    not_listed_meals,
    expenses
}:InclusionProps) {
  return (
    <div className='inclusion-container' id='included'>

        <div className="inclusion-container-elements">
            <div className="inclusion-container-elements-included">
                <h5>{included_title}</h5>
                <p>{accomodation}</p>
                <p>{meals}</p>
                <p>{activities}</p>
                <p>{flight}</p>
                <p>{transport}</p>
                <p>{tips}</p>
                <p>{guide}</p>
            </div>

            <div className="inclusion-container-elements-not-included">
                <h5>{not_included_title}</h5>
                <p>{airport}</p>
                <p>{not_listed_meals}</p>
                <p>{international}</p>
                <p>{expenses}</p>
            </div>
        </div>

    </div>
  )
}

export default Inclusion
