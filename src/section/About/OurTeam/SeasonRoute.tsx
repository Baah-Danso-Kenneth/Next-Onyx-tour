import React from 'react'
import { Link as ScrollLink} from 'react-scroll'
import {animateScroll as scroll} from 'react-scroll'


function SeasonRoute() {
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
                 <ScrollLink to="winter" smooth={true} duration={500} className='items'>
                   <span className='link' onClick={()=>scrollToSection('winter')}>winter</span>
                   <p id="primer">|</p>
                 </ScrollLink>
                 </div>
   
   
                 <div className='divss'>
                 <ScrollLink to="summer" smooth={true} duration={500} className='items'>
                   <span className='link' onClick={()=>scrollToSection('summer')}>summer</span>
                   <p id="primer">|</p>
                 </ScrollLink>
                 </div>
   
               </ul>
             </div>
     )
   }

export default SeasonRoute
