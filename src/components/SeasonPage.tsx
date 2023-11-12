import Image, { StaticImageData } from 'next/image';
import React from 'react'
import {TbMinusVertical} from 'react-icons/tb'
import Link from 'next/link';
import {Link as ScrollLink} from 'react-scroll'
import {animateScroll as scroll} from 'react-scroll'

interface SeasonalProps{
    season?:string;
    name?:string;
    info?:string;
    title?:string;
    src:StaticImageData;
    days:string;
}

function SeasonPage({season,src,title,info,name,days}:SeasonalProps) {
    
  return (
    <div className='season-container'>

      <div className="season-hero-container">
        <div className="img"><Image src={src} alt='img-alternative'/></div>
          <div className="text"><p>{season}</p></div>
      </div>
      <div className="season-hero-elements">
        <div className="season-hero-info">
          <h1>{title}</h1>
          <div className='duration'>
            <h6>{days}</h6>
             {/* <TbMinusVertical className='line'/> */}
             <p className='line'>|</p>
          </div>
          <p>{info}</p>


          <div className="routes-link">
            <ul>

             <div className='divss'>
              <ScrollLink to="about">
                
              </ScrollLink>
                <Link href="/GroupTrip/Tester/#" className='link'>trip dates</Link>
                <p>|</p>
              </div>


              <div className='divss'>
                <Link href="/about/#" className='link'>the itinerary</Link>
                <p>|</p>
              </div>

              <div className='divss'>
                <Link href="/about/#" className='link'>accomodation</Link>
                <p>|</p>
              </div>

              <div className='divss'>
                <Link href="/about/#" className='link'>what included</Link>
               <p>|</p>
              </div>

                <div className='divss'>
                <Link href="/about/#" className='link'>trip leaders</Link>
                <p>|</p>
              </div>

                 <div className='divss'>
                   <Link href="/about/#" className='link'>faqs</Link>
              </div>

            </ul>
          </div>


          <div>
            about
          </div>


          <div>
            faqx
          </div>

          <div>
            shop
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default SeasonPage
