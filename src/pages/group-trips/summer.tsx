import FixedLayout from '@/components/shared/FixedLayout'
import SeasonHeroSection from '@/components/shared/GroupTripComponents/SeasonHeroSection'
import React, { useEffect, useState } from 'react'
import SummerImage from '../../../public/assets/images/hudson-hintze-TCq5EVSIZbQ-unsplash.jpg'
import InformationOnTour from '@/components/shared/GroupTripComponents/InformationOnTour'
import SummerContent from '@/section/GroupTrips/Summer/SummerContent'
import SummererContentExperience from '@/section/GroupTrips/Summer/SummerContentExperience'
import ShowCaseItenary from '@/section/GroupTrips/Summer/ShowCaseItenary'
import SummerInclusion from '@/section/GroupTrips/Summer/SummerInclusion'
import SummerWhatWeThinkContent from '@/section/GroupTrips/Summer/SummerWhatWeThinkContent'
import SummerAccomodationContent from '@/section/GroupTrips/Summer/SummerAccomodationContent'
import SummerTripLeaderContent from '@/section/GroupTrips/Summer/SummerTripLeaderContent'
import SummerMeetUpContent from '@/section/GroupTrips/Summer/SummerMeetUpContent'
import SummerQuestionContent from '@/section/GroupTrips/Summer/SummerQuestionContent'
import Layout from '@/components/shared/Layout'
import Loading from '@/components/Loader'


function Summer() {
const [isLoading,setLoading]=useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(true)
    },3000)
  },[])
  
  return (
    !isLoading ? ( <Loading/>) : (
      <>
      <Layout>
      <SeasonHeroSection text='summer trip' img={SummerImage}/>
      <InformationOnTour title='onyx travel summer' duration_from='10 days' duration_to='9 nights' statement='If there was ever a bucket list trip, it’s our 10-day Argentina tour. You’ll explore Mendoza, Buenos Aires, and Patagonia through the eyes of Argentina’s most talented women chefs, artists, and designers. From horseback riding through the Andes, to dining under the Milky Way in Patagonia, this is truly the trip-of-a-lifetime.'/>
      <SummerContent/>
      <SummererContentExperience/>
      <ShowCaseItenary/>
      <SummerInclusion/>
      <SummerWhatWeThinkContent/>
      <SummerAccomodationContent/>
      <SummerTripLeaderContent/>
      <SummerMeetUpContent/>
      <SummerQuestionContent/>
    </Layout>
      </>
    )

  )
}

export default Summer
