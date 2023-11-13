import React from 'react'
import WinterImg1 from '../../public/assets/images/winter-img1.jpg';
import WinterImg2 from '../../public/assets/images/winter-img2.jpg'
import WinterImg3 from '../../public/assets/images/winter-img3.jpg'
import WinterImg4 from '../../public/assets/images/winter-img4.jpg'
import WinterImg5 from '../../public/assets/images/winter-img5.jpg'
import WinterImg6 from '../../public/assets/images/winter-img6.jpg'
import BookedTrip from './Card/BookedTrip';


function WinterTripsContent() {
  const bookedInfo=[
    {id:1, sold:"sold out", date:"Winter trip: November 3 -12, 2023", src:WinterImg1},
     {id:2, sold:"sold out", date:"Winter trip: November 3 -12, 2023", src:WinterImg2},
      {id:3, sold:"sold out", date:"Winter trip: November 3 -12, 2023", src:WinterImg3},
       {id:4, sold:"sold out", date:"Winter trip: November 3 -12, 2023", src:WinterImg4},
        {id:5, sold:"sold out", date:"Winter trip: November 3 -12, 2023", src:WinterImg5},
         {id:6, sold:"sold out", date:"Winter trip: November 3 -12, 2023", src:WinterImg6},
  ]

  return (
    <div id='trip-date'>
      <div className="trips-date-container">
        <div className="trips-date-elements">
          <div className="trips-date-elements-text">
             <h1>Winter Group trips</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos accusantium aspernatur dolorem sapiente.</p>
              <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur voluptate fugiat unde laboriosam consequatur.</h6>
          </div>
        </div>

        <div className="trips-date-elements-card">
             {bookedInfo.map(({sold, src,date,id})=>{
              return(
                <BookedTrip key={id} sold={sold} src={src} date={date}/>
              )
             })}
          </div>

      </div>
     </div>
  )
}

export default WinterTripsContent
