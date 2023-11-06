import React from 'react'
import Image from 'next/image'
import WelcomeTravelImage from '../../../../public/assets/images/hero-img-lg-screen.jpg'
import TravelImage from '../../../../public/assets/images/groupies.jpg'
import LadyImage from '../../../../public/assets/images/take_a_pic.jpg'


export function WelcomeTravel() {
  return (
    <div className='welcome-travel-container'>
        <div className="welcome-travel-container-element">

            <div className="img-content">
               <Image src={WelcomeTravelImage} alt="sub-img"/>
            </div>

            <div className="text-content">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing eli.</h1>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum debitis et beatae, aliquid eius eum consequatur. Fugit repudiandae veritatis 
                    eligendi non dolores velit officia recusandae 
                    laboriosam architecto voluptate. 
                    Expedita, beatae!</p>
            </div>
        </div>
    </div>
  )
}


export function TravelByWomen() {
  return (
    <div className='travel-by-women-container'>
        <div className="travel-by-women-container-element">
            <div className="img-content">
                <Image src={TravelImage} alt="travel"/>
            </div>
            <div className="text-content">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis id maiores sunt facere unde ex, ab et tenetur
                     ipsam dolorum hic. Cupiditate blanditiis vel minus
                      obcaecati eos quibusdam similique amet?</p>
                <div className="button-up">
                     <button>more of this</button>
                </div>
               
            </div>
        </div>
    </div>
  )
}


export function DeepConection() {
    return(
    <div className='welcome-travel-container'>
        <div className="welcome-travel-container-element">

            <div className="img-content">
               <Image src={LadyImage} alt="sub-img"/>
            </div>

            <div className="text-content">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing eli.</h1>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum debitis et beatae, aliquid eius eum consequatur. Fugit repudiandae veritatis 
                    eligendi non dolores velit officia recusandae 
                    laboriosam architecto voluptate. 
                    Expedita, beatae!</p>
            </div>
        </div>
    </div>
  )
}

