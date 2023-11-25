import FixedLayout from '@/components/shared/FixedLayout'
import SeasonHeroSection from '@/components/shared/GroupTripComponents/SeasonHeroSection'
import React from 'react'
import WinterImage from '../../../public/assets/images/winter-img6.jpg'
import InformationOnTour from '@/components/shared/GroupTripComponents/InformationOnTour'
import WinterContent from '@/section/GroupTrips/Winter/WinterContent'
import WinterContentExperience from '@/section/GroupTrips/Winter/WinterContentExperience'
<<<<<<< HEAD
import WinterShowCase from '@/section/GroupTrips/Winter/WinterShowCase'
=======
>>>>>>> 407dd1fa56d62ba63aeb27579d3cbd40d9d52362


function winter() {
  return (
    <FixedLayout>
      <SeasonHeroSection text='winter trip' img={WinterImage}/>
        <InformationOnTour title='onyx travel winter ' duration_from='7 days' duration_to='6 nights' statement='A fresh take on the tried-and-true trip to France. We’re showing you the real France, and connecting you with the talented women living here today. You’ll hand-dye silk in Provence, dine in an historic abbey with a Michelin-star chef, and so much more. Bon voyage!'/>
        <WinterContent/>
            <InformationOnTour title='onyx travel winter ' duration_from='7 days' duration_to='6 nights' statement='A fresh take on the tried-and-true trip to France. We’re showing you the real France, and connecting you with the talented women living here today. You’ll hand-dye silk in Provence, dine in an historic abbey with a Michelin-star chef, and so much more. Bon voyage!'/>
            <WinterContentExperience/>
<<<<<<< HEAD
            <WinterShowCase/>
=======
>>>>>>> 407dd1fa56d62ba63aeb27579d3cbd40d9d52362
    </FixedLayout>
  )
}

export default winter
