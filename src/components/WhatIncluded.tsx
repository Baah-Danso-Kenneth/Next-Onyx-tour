import Link from "next/link";

interface WhatIncludedProps { 
  included?: string;
  not_included?:string;
  accomodation?: string;
  activities?: string;
  tips?: string;
  onyx_terrains?: string;
  transport?: string;
  international?: string;
  airport?: string;
  meals?: string;
  insurance?: string;
  incident?: string;
}



function WhatIncluded({included,not_included,accomodation,activities,tips,onyx_terrains, transport, airport,international,meals,incident,insurance}: WhatIncludedProps) {
  return (
    <div className='what-included-container'>
        <div className="what-included-container-elements">
            <div className="include">
               <h5>{included}</h5>
               <p>{accomodation}</p>
               <p>{meals}</p>
               <p>{activities}</p>
               <p>{transport}</p>
               <p>{tips}</p> 
               <Link href="#" className="link">{onyx_terrains}</Link>
            </div>

            <div className="not-included">
                 <h5>{not_included}</h5>
                 <p>{international}</p>
                 <p>{airport}</p>
                 <p>{meals}</p>
                 <p>{incident}</p>
                 <Link href="#" className="link">{insurance}</Link>
            </div>
  
        </div>
    </div>
  )
}

export default WhatIncluded
