import Layout from '@/components/shared/Layout'
import AllContentSummerTrip from '@/section/About/OurTeam/AllContentSummerTrip'
import AllContentWinterTrip from '@/section/About/OurTeam/AllContentWinterTrip'
import AllOnyxTeam from '@/section/About/OurTeam/AllOnyxTeam'
import TeamHero from '@/section/About/OurTeam/TeamHero'
import React, { useEffect, useState } from 'react'
import MissionStatement from '../../section/About/OurTeam/MissionStatement'
import BriefMessage from '@/section/About/OurTeam/BriefMessage'

function OurTeam() {
  const [isLoading,setLoading]=useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(true)
    },3000)
  },[])

  return (
       
      <Layout>
        <TeamHero/>
        <AllOnyxTeam/>
        <BriefMessage/>
        <AllContentSummerTrip/>
        <AllContentWinterTrip/>
        <MissionStatement/>
     </Layout>
    )
}

export default OurTeam

