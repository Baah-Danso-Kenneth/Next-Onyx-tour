import React from 'react'
import TravelGroup from '../../../public/assets/images/travel_group1.jpg';
import Image from 'next/image';

function Meetup() {
  return (
    <div className='link-up-container'>
        <div className="link-up-container-element">
               <div className="image-section">
                 <Image src={TravelGroup} alt="gropies"/>
               </div>

               <div className="text-section">
                     <h3>In the Movement of fun through growth </h3>
                      
                      <div className="statemet">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
                             quas quo quae exercitationem corrupti eligendi 
                            voluptatum quidem ex aliquid deserunt quibusdam 
                            repellat nulla eveniet labore voluptates accusamus, commodi sunt iusto!</p>

                            <div className="button-section">
                                <button>more about us</button>
                            </div>
                      </div>
               
               </div>
        </div>
    </div>
  )
}

export default Meetup
