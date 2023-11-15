import { StaticImageData } from 'next/image'
import React from 'react'

interface DetailsProps{
    brand:StaticImageData;
    instructor:StaticImageData;
    name:string;
    location:string;
    statement1:string;
    statement2:string;
    inspo:string;
}


interface MoreAboutprops{
    title:string;
    type1:string;
    type2:string;
    type3:string;
    type1_message:string;
    type2_message:string;
    type3_message:string;
    meet:string;
    link:string;
}


interface InstructorProps extends DetailsProps , MoreAboutprops{}

function LeaderDetailPage({...props}:InstructorProps) {
  return (
    <div className='leader-container'>
      <div className="leader-container-element">
        <div className="img-content">

        </div>
        <div className="brief-bio"></div>
        <div className="inspo"></div>
        <div className="more-details">

        </div>

        <div className="meet-instructor"></div>

      </div>
    </div>
  )
}

export default LeaderDetailPage
