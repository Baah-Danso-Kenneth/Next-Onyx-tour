import Layout from '@/components/shared/Layout'
import AboutHero from '@/section/About/AboutHero'
import FirstSection from '@/section/About/FirstSection'
import SecondSection from '@/section/About/SecondSection'
import ThirdSection from '@/section/About/ThirdSection'
import React from 'react'

function OurTeam() {
  return (
    <Layout>
      <AboutHero/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
    </Layout>
  )
}

export default OurTeam
