import Image, { StaticImageData } from 'next/image'
import React from 'react'
import RecommendCard from './Cards/RecommendationCard';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface TripLeaderProps{
   brand_img:StaticImageData;
   img_model:StaticImageData;
   name:string;
   location:string;
   statement:string;

   inspo:string;
   inspo_name:string;
   learn_more:string;
   learn_more_title_1:string;
   learn_more_title_2:string;
   learn_more_title_3:string;

   learn_more_statement_1:string;
   learn_more_statement_2:string;
   learn_more_statement_3:string;
   which_page:string;
   link:string;
   btn_text:string;
}

function TripLeader(props:TripLeaderProps) {

    const {
        brand_img,
        img_model,
        name,
        location,
        statement,
        inspo,
        inspo_name,
        learn_more,
        learn_more_title_1,
        learn_more_title_2,
        learn_more_title_3,
        learn_more_statement_1,
        learn_more_statement_2,
        learn_more_statement_3,
        which_page,
        link,
        btn_text,
    } = props




  return (
    <div className='leader-instructor-container'>
       <div className="leader-instructor-container-elements">
      <div className="logo">
        <Image src={brand_img} alt=""/>
      </div>

      <div className="bio-container">
        <div className="image-zone">
            <Image src={img_model} alt='img-img'/>
        </div>

        <div className="text">
            <h5>{name}</h5>
            <h3>{location}</h3>
            <p>{statement}</p>
        </div>
      </div>

      <div className="inspo">
        <RecommendCard statement={inspo} name={inspo_name} />
      </div>

      <div className="learn-more-content">
          <div className="learn-more-content-title">
             <h3>{learn_more}</h3>
          </div>

          <div className="grid-content-learn-more">

            <div className="content-1">
                <div className="content-1-title">
                    <h3>{learn_more_title_1}</h3>
                </div>

                <div className="content-1-p-tag">
                    <p>{learn_more_statement_1}</p>
                </div>

            </div>


             <div className="content-2">
                <div className="content-2-title">
                    <h3>{learn_more_title_2}</h3>
                </div>

                <div className="content-2-p-tag">
                    <p>{learn_more_statement_2}</p>
                </div>
            </div>

            <div className="content-3">
                <div className="content-3-title">
                    <h3>{learn_more_title_3}</h3>
                </div>

                <div className="content-3-p-tag">
                    <p>{learn_more_statement_3}</p>
                </div>

            </div>

          </div>
      </div>

      <div className="experience-to-observer">
          <div className="header-for-experience">
            <h3>{which_page}</h3>
          </div>

          <div className="travel-btn">
            <button>
                <Link href={link} className='link'>{btn_text}</Link>
            </button>
          </div>
      </div>
    </div>
    </div>
  )
}

export default TripLeader
