import FixedLayout from '@/components/shared/FixedLayout'
import SeasonHeroSection from '@/components/shared/GroupTripComponents/SeasonHeroSection'
import React from 'react'
import SummerImage from '../../../public/assets/images/hudson-hintze-TCq5EVSIZbQ-unsplash.jpg'
import InformationOnTour from '@/components/shared/GroupTripComponents/InformationOnTour'
import SummerContent from '@/section/GroupTrips/Summer/SummerContent'


function summer() {
  return (
    <FixedLayout>
      <SeasonHeroSection text='summer trip' img={SummerImage}/>
      <InformationOnTour title='onyx travel summer' duration_from='10 days' duration_to='9 nights' statement='If there was ever a bucket list trip, it’s our 10-day Argentina tour. You’ll explore Mendoza, Buenos Aires, and Patagonia through the eyes of Argentina’s most talented women chefs, artists, and designers. From horseback riding through the Andes, to dining under the Milky Way in Patagonia, this is truly the trip-of-a-lifetime.'/>
      <SummerContent/>
    </FixedLayout>
  )
}

export default summer