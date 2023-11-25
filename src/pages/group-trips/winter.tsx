import FixedLayout from '@/components/shared/FixedLayout'
import SeasonHeroSection from '@/components/shared/GroupTripComponents/SeasonHeroSection'
import React from 'react'
import WinterImage from '../../../public/assets/images/winter-img6.jpg'
import InformationOnTour from '@/components/shared/GroupTripComponents/InformationOnTour'
<<<<<<< HEAD
import WinterContent from '@/section/GroupTrips/Winter/WinterContent'
=======
>>>>>>> 08ee5cc0af9e7a714ad1458c241d22d9e04a9f9f


function winter() {
  return (
    <FixedLayout>
      <SeasonHeroSection text='winter trip' img={WinterImage}/>
<<<<<<< HEAD
        <InformationOnTour title='onyx travel winter ' duration_from='7 days' duration_to='6 nights' statement='A fresh take on the tried-and-true trip to France. We’re showing you the real France, and connecting you with the talented women living here today. You’ll hand-dye silk in Provence, dine in an historic abbey with a Michelin-star chef, and so much more. Bon voyage!'/>
        <WinterContent/>
=======
            <InformationOnTour title='onyx travel winter ' duration_from='7 days' duration_to='6 nights' statement='A fresh take on the tried-and-true trip to France. We’re showing you the real France, and connecting you with the talented women living here today. You’ll hand-dye silk in Provence, dine in an historic abbey with a Michelin-star chef, and so much more. Bon voyage!'/>
>>>>>>> 08ee5cc0af9e7a714ad1458c241d22d9e04a9f9f
    </FixedLayout>
  )
}

export default winter
