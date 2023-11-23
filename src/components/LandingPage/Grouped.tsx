import GridContainer from '@/section/LandingPage/GridContainer'
import React from 'react'

function Grouped() {
  return (
    <div className='grouped-container'>
        <div className="grouped-container-elements">
            <GridContainer/>
            <div className="grouped-container-text">
                <h1>Lorem ipsum dolor sit amet.</h1>

                <div className="p-statement">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, sequi aliquam unde dignissimos doloremque facere rem! Sequi rem nam, officiis eius ex voluptate dicta perferendis libero doloremque velit corrupti ad?</p>
                </div>

                <div className="gallery-btn">
                    <button>more about us</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Grouped
