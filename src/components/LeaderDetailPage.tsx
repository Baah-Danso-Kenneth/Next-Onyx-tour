import { StaticImageData } from 'next/image'
import React from 'react'
import Image  from 'next/image';
import Link from 'next/link';
import Motivation from './Card/Motivation';

interface DetailsProps{
    brand:StaticImageData;
    instructor:StaticImageData;
    name?:string;
    location?:string;
    statement1?:string;
    statement2?:string;
    inspo?:string;
}


interface MoreAboutprops{
    title?:string;
    type1:string;
    type2?:string;
    type3?:string;
    type1_message?:string;
    type2_message?:string;
    type3_message?:string;
    meet?:string;
    link:string;
}


interface InstructorProps extends DetailsProps , MoreAboutprops{}

function LeaderDetailPage({...props}:InstructorProps) {
      const {
    brand,
    instructor,
    name,
    location,
    statement1,
    statement2,
    inspo,
    title,
    type1,
    type2,
    type3,
    type1_message,
    type2_message,
    type3_message,
    meet,
    link,
  } = props;

  return (
    <div className='instructor-container'>
      <div className="instructor-container-element">
        <div className="img-content">
           <Image src={brand} alt="brand-img" />
        </div>

        <div className="brief-bio">
            <div className="bio-img-content">
                <Image src={instructor} alt="instructor-img"/>
            </div>

            <div className="bio-text">
                <div className="bio-text-name">
                    <p>{name}</p>
                </div>
                <div className="bio-text-location">
                    <p>{location}</p>
                </div>

                <p className='statement-1'>{statement1}</p>
                <p className='statement-2'>{statement2}</p>
            </div>
        </div>

       <div className="info-details">
          <Motivation name='Philipa' statement='What’s more empowering than becoming aware of your own strengths and who you are as a person? And what better vehicle for this experience than travel?'/>
       </div>
 
     <div className="more-details">
           <div className="more-details-banner">
            <p>{title}</p>
           </div>

         <div className='more-detail-flex-content'>

           <div className="more-details-first-part1">
              <div className="header-details">
                <h3>{type1}</h3>
              </div>
              <div className="details-info">
                <p>{type1_message}</p>
              </div>
           </div>


           <div className="more-details-second-part2">
             <div className="header-details">
                <h3>{type2}</h3>
              </div>
              <div className="details-info">
                <p>{type2_message}</p>
              </div>
           </div>

           <div className="more-details-third-part3">
             <div className="header-details">
                <h3>{type3}</h3>
              </div>
              <div className="details-info">
                <p>{type3_message}</p>
              </div>
           </div>
        </div>
    </div>



    <div className="meet-instructor">
         <div className="meet-instructor-statement">
            <h2>{meet}</h2>
             </div>
             <div className='btn-more-details'>
               <button>
                    <Link href={link} className='link'>travel with us</Link>
                </button>
            </div>
    </div>

    </div>

  </div>
  )
}

export default LeaderDetailPage
