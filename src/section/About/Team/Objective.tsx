import React from 'react'
import CompanyLogo from '../../../../public/assets/images/annex-logo.png';
import Image from 'next/image';


function Objective() {
  return (
    <div className='objective-container'>
     <div className='objective-container-element'>
        <div className="img-content">
          <Image src={CompanyLogo} alt="check"/>
        </div>
        <div className="statement">
           <h1>Lorem ipsum dolor sit amet, consectetur</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus inventore quos 
            nam ratione quaerat doloribus sed necessitatibus sunt harum fugiat.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
                 perferendis provident vero eius enim reiciendis quidem quam impedit ipsum! Accusamus!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, doloribus.</p>
        </div>
      </div>
    </div>
  )
}

export default Objective
