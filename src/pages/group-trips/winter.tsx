import FixedLayout from '@/components/shared/FixedLayout'
import SeasonHeroSection from '@/components/shared/GroupTripComponents/SeasonHeroSection'
import React from 'react'
import WinterImage from '../../../public/assets/images/winter-img6.jpg'
import InformationOnTour from '@/components/shared/GroupTripComponents/InformationOnTour'
import WinterContent from '@/section/GroupTrips/Winter/WinterContent'


function winter() {
  return (
    <FixedLayout>
      <SeasonHeroSection text='winter trip' img={WinterImage}/>
        <InformationOnTour title='onyx travel winter ' duration_from='7 days' duration_to='6 nights' statement='A fresh take on the tried-and-true trip to France. We’re showing you the real France, and connecting you with the talented women living here today. You’ll hand-dye silk in Provence, dine in an historic abbey with a Michelin-star chef, and so much more. Bon voyage!'/>
        <WinterContent/>
            <InformationOnTour title='onyx travel winter ' duration_from='7 days' duration_to='6 nights' statement='A fresh take on the tried-and-true trip to France. We’re showing you the real France, and connecting you with the talented women living here today. You’ll hand-dye silk in Provence, dine in an historic abbey with a Michelin-star chef, and so much more. Bon voyage!'/>
    </FixedLayout>
  )
}

export default winter
