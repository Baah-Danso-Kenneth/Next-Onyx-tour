
import Loading from '@/components/Loader'
import Layout from '@/components/shared/Layout'
import AboutHero from '@/section/About/OurStory/AboutHero'
import FirstSection from '@/section/About/OurStory/FirstSection'
import SecondSection from '@/section/About/OurStory/SecondSection'
import ThirdSection from '@/section/About/OurStory/ThirdSection'
import React, { useEffect, useState } from 'react'

function OurStory() {
  const [isLoading,setLoading]=useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(true)
    },3000)
  },[])

  return (
    !isLoading ? (<Loading/>) : (
       
      <Layout>
        <AboutHero/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
    </Layout>
    )


  )
}

export default OurStory