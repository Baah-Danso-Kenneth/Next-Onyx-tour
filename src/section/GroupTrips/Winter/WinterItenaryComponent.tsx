import React from 'react'
import WinterPlace1 from '../../../../public/assets/images/day-winter-2.jpg';
import WinterPlace2 from '../../../../public/assets/images/day-winter-3.jpg';
import WinterPlace3 from '../../../../public/assets/images/day-winter-2.jpg';
import WinterPlace4 from '../../../../public/assets/images/day-winter-7.jpg';
import WinterPlace5 from '../../../../public/assets/images/day-winter-6.jpg';
import WinterPlace6 from '../../../../public/assets/images/day-winter-7.jpg';
import WinterPlace7 from '../../../../public/assets/images/day-winter-3.jpg';
import WinterPlace8 from '../../../../public/assets/images/day-winter-6.jpg';
import WinterPlace9 from '../../../../public/assets/images/day-winter-10.jpg';
import WinterPlace10 from '../../../../public/assets/images/day-winter-11.jpg';
import WinterPlace11 from '../../../../public/assets/images/day-winter-2.jpg';


import Itenary from '@/components/Itenary';



function WinterItenaryComponent() {

  const itenary=[
    {id:1, 
    days:"day one - patogonia", 
    meals:"Meals included: breakfast, dinner",
    info:"We hope you packed your hiking boots, because today’s looking like a 100% chance of outdoorsy vibes and great company. We’ve got a shorter hike on the schedule this afternoon, and some free time to enjoy the pool, spa, and mountain views at the hotel. In the evening, we're meeting chef Julieta Caruso in a secret Patagonian dreamscape. She’s preparing a super special Argentine feast made with fresh, locally-sourced ingredients. We’ll spend the evening stargazing while we nosh on her delicious food fireside",
    src:WinterPlace1
   },
    {id:2, 
    days:"day one - patogonia", 
    meals:"Meals included: breakfast, dinner",
    info:"It’s been a long journey and you deserve a day of pampering - don’t you think? We’ll meet at Cecile Adam’s Entre Cielos Hotel & Spa for an afternoon of total relaxation. Entre Cielos is famous for its hammam, so naturally we’re taking over the spa - we’ve booked the Classic Hammam Circuit for everyone in our group.In the evening, we’ll gather for a delicious alfresco meal with the queen of Argentinean wine: Sofia Lagarde at her Bodega Lagarde. ",
    src:WinterPlace2
   },
    {id:3, 
    days:"day one - patogonia", 
    meals:"Meals included: breakfast, dinner",
    info:"We hope you packed your hiking boots, because today’s looking like a 100% chance of outdoorsy vibes and great company. We’ve got a shorter hike on the schedule this afternoon, and some free time to enjoy the pool, spa, and mountain views at the hotel. In the evening, we're meeting chef Julieta Caruso in a secret Patagonian dreamscape. She’s preparing a super special Argentine feast made with fresh, locally-sourced ingredients. We’ll spend the evening stargazing while we nosh on her delicious food fireside",
    src:WinterPlace3
   },
    {id:4, 
    days:"day one - patogonia", 
    meals:"Meals included: breakfast, dinner",
    info:"We hope you packed your hiking boots, because today’s looking like a 100% chance of outdoorsy vibes and great company. We’ve got a shorter hike on the schedule this afternoon, and some free time to enjoy the pool, spa, and mountain views at the hotel. In the evening, we're meeting chef Julieta Caruso in a secret Patagonian dreamscape. She’s preparing a super special Argentine feast made with fresh, locally-sourced ingredients. We’ll spend the evening stargazing while we nosh on her delicious food fireside",
    src:WinterPlace4
   },
    {id:5, 
    days:"day one - patogonia", 
    meals:"Meals included: breakfast, dinner",
    info:"We hope you packed your hiking boots, because today’s looking like a 100% chance of outdoorsy vibes and great company. We’ve got a shorter hike on the schedule this afternoon, and some free time to enjoy the pool, spa, and mountain views at the hotel. In the evening, we're meeting chef Julieta Caruso in a secret Patagonian dreamscape. She’s preparing a super special Argentine feast made with fresh, locally-sourced ingredients. We’ll spend the evening stargazing while we nosh on her delicious food fireside",
    src:WinterPlace5
   },
    {id:6, 
    days:"day one - patogonia", 
    meals:"Meals included: breakfast, dinner",
    info:"We hope you packed your hiking boots, because today’s looking like a 100% chance of outdoorsy vibes and great company. We’ve got a shorter hike on the schedule this afternoon, and some free time to enjoy the pool, spa, and mountain views at the hotel. In the evening, we're meeting chef Julieta Caruso in a secret Patagonian dreamscape. She’s preparing a super special Argentine feast made with fresh, locally-sourced ingredients. We’ll spend the evening stargazing while we nosh on her delicious food fireside",
    src:WinterPlace6
   },
    {id:7, 
    days:"day one - patogonia", 
    meals:"Meals included: breakfast, dinner",
    info:"The day is yours! We’ll give you a list of our favorite museums, restaurants and shops so you can explore this enchanting city at your own pace. ",
    src:WinterPlace7
   },
      {id:8, 
    days:"day one - patogonia", 
    meals:"Meals included: breakfast, dinner",
    info:"We hope you packed your hiking boots, because today’s looking like a 100% chance of outdoorsy vibes and great company. We’ve got a shorter hike on the schedule this afternoon, and some free time to enjoy the pool, spa, and mountain views at the hotel. In the evening, we're meeting chef Julieta Caruso in a secret Patagonian dreamscape. She’s preparing a super special Argentine feast made with fresh, locally-sourced ingredients. We’ll spend the evening stargazing while we nosh on her delicious food fireside",
    src:WinterPlace8
   },
    {id:9, 
    days:"day one - patogonia", 
    meals:"Meals included: breakfast, dinner",
    info:"We hope you packed your hiking boots, because today’s looking like a 100% chance of outdoorsy vibes and great company. We’ve got a shorter hike on the schedule this afternoon, and some free time to enjoy the pool, spa, and mountain views at the hotel. In the evening, we're meeting chef Julieta Caruso in a secret Patagonian dreamscape. She’s preparing a super special Argentine feast made with fresh, locally-sourced ingredients. We’ll spend the evening stargazing while we nosh on her delicious food fireside",
    src:WinterPlace9
   },
    {id:10, 
    days:"day one - patogonia", 
    meals:"Meals included: breakfast, dinner",
    info:"We hope you packed your hiking boots, because today’s looking like a 100% chance of outdoorsy vibes and great company. We’ve got a shorter hike on the schedule this afternoon, and some free time to enjoy the pool, spa, and mountain views at the hotel. In the evening, we're meeting chef Julieta Caruso in a secret Patagonian dreamscape. She’s preparing a super special Argentine feast made with fresh, locally-sourced ingredients. We’ll spend the evening stargazing while we nosh on her delicious food fireside",
    src:WinterPlace10
   },
    {id:11, 
    days:"day one - patogonia", 
    meals:"Meals included: breakfast, dinner",
    info:"We hope you packed your hiking boots, because today’s looking like a 100% chance of outdoorsy vibes and great company. We’ve got a shorter hike on the schedule this afternoon, and some free time to enjoy the pool, spa, and mountain views at the hotel. In the evening, we're meeting chef Julieta Caruso in a secret Patagonian dreamscape. She’s preparing a super special Argentine feast made with fresh, locally-sourced ingredients. We’ll spend the evening stargazing while we nosh on her delicious food fireside",
    src:WinterPlace11
   },
    
  ]

  return (
      <div  id = 'itenary' className='winter-container'>
            <div className="winter-container-title">
                <h1>Winter itenary</h1>
            </div>
          <div className="elements">
           {itenary.map(({info,src,meals, days},index)=>(
             <Itenary  key={index} 
             info={info} src={src}
            meals={meals} days={days}/>
         ))}
         </div>
       </div>

  )
}

export default WinterItenaryComponent
