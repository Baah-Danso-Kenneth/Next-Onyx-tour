import React from 'react'
import InspoImage from '../../../public/assets/images/artsszone.png';
import Image from 'next/image';


function SecondExperience() {
  return (
<div className='second-experience-container'>
      <div className="second-experience-container-elements">
         <div className="second-experience-container-elements-image">
            <Image src={InspoImage} alt="expo-1"/>
         </div>
         <div className="second-experience-container-elements-text">
            <h3>Lorem ipsum dolor sit amet.</h3>
            < div className='p-tag'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sed illo aut debitis, perspiciatis necessitatibus odit velit dicta rem a ad alias et sequi voluptas voluptatem ipsa nulla saepe totam non quo explicabo incidunt! Ullam mollitia molestias dolorum 
              doloribus eligendi laudantium obcaecati quisquam. Delectus dolor dolores ad! Incidunt, aliquid neque.</p>
            </div>    

            <div className="button">
                <button>tell me more</button>
            </div>

         </div>
      </div>
    </div>
  )
}

export default SecondExperience