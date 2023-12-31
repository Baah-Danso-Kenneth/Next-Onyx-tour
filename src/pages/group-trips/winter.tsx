import FixedLayout from '@/components/shared/FixedLayout'
import SeasonHeroSection from '@/components/shared/GroupTripComponents/SeasonHeroSection'
import React, { useEffect, useState } from 'react'
import WinterImage from '../../../public/assets/images/winter-img6.jpg'
import InformationOnTour from '@/components/shared/GroupTripComponents/InformationOnTour'
import WinterContent from '@/section/GroupTrips/Winter/WinterContent'
import WinterContentExperience from '@/section/GroupTrips/Winter/WinterContentExperience'
import WinterShowCase from '@/section/GroupTrips/Winter/WinterShowCase'
import WinterInclusion from '@/section/GroupTrips/Winter/WinterInclusion'
import WinterWhatWeThinkContent from '@/section/GroupTrips/Winter/WinterWhatWeThinkContent'
import WinterAccomodationContent from '@/section/GroupTrips/Winter/WinterAccomodationContent'
import WinterTripLeaderContent from '@/section/GroupTrips/Winter/WinterTripLeaderContent'
import WinterMeetUpContent from '@/section/GroupTrips/Winter/WinterMeetUpContent'
import WinterQuestionContent from '@/section/GroupTrips/Winter/WinterQuestionContent'
import Layout from '@/components/shared/Layout'
import Loading from '@/components/Loader'


function Winter() {
  const [isLoading,setLoading]=useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(true)
    },3000)
  },[])
  return (

    !isLoading ? (<Loading/>) : (
      <>
      <Layout>
      <SeasonHeroSection text='winter trip' img={WinterImage}/>
        <InformationOnTour title='onyx travel winter ' duration_from='7 days' duration_to='6 nights' statement='A fresh take on the tried-and-true trip to France. We’re showing you the real France, and connecting you with the talented women living here today. You’ll hand-dye silk in Provence, dine in an historic abbey with a Michelin-star chef, and so much more. Bon voyage!'/>
        <WinterContent/>
            <WinterContentExperience/>
            <WinterShowCase/>
            <WinterInclusion/>
            <WinterWhatWeThinkContent/>
            <WinterAccomodationContent/>
            <WinterTripLeaderContent/>
            <WinterMeetUpContent/>
            <WinterQuestionContent/>
    </Layout>
      </>
    )

  )
}

export default Winter
