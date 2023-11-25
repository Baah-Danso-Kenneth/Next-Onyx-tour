import React from 'react'
import { Link as ScrollLink} from 'react-scroll'
import {animateScroll as scroll} from 'react-scroll'


function MiniRoute() {

  const scrollToSection=(sectionId:any)=>{
     scroll.scrollTo(sectionId,{
      smooth:true,
      duration:500
     })
  }


  return (          
          <div className="routes-link">
            <ul>
             <div className='divss'>
              <ScrollLink to="trip-date" smooth={true} duration={500} className='items'>
                <span className='link' onClick={()=>scrollToSection('trip-date')}>trip dates</span>
                <p>|</p>
              </ScrollLink>
              </div>


              <div className='divss'>
              <ScrollLink to="itenary" smooth={true} duration={500} className='items'>
                <span className='link' onClick={()=>scrollToSection('itenary')}>itenary</span>
                <p>|</p>
              </ScrollLink>
              </div>

              <div className='divss'>
                <ScrollLink to="accomodation" smooth={true} duration={500} className='items'>
                <span className='link' onClick={()=>scrollToSection('accomodation')}>accomodation</span>
                <p>|</p>
              </ScrollLink>
              </div>

              <div className='divss'>
               <ScrollLink to="included" smooth={true} duration={500} className='items'>
                <span className='link' onClick={()=>scrollToSection('included')}>what included</span>
                <p>|</p>
              </ScrollLink>
              </div>

                <div className='divss'>
                <ScrollLink to="leader" smooth={true} duration={500} className='items'>
                <span className='link' onClick={()=>scrollToSection('leader')}>trip leaders</span>
                <p>|</p>
              </ScrollLink>
              </div>

              <div className='divss'>
                 <ScrollLink to="faqs" smooth={true} duration={500} className='items'>
                <span className='link' onClick={()=>scrollToSection('faqs')}>faq</span>
                  <p>|</p>
              </ScrollLink>
              </div>

            </ul>


          </div>
  )
}

export default MiniRoute