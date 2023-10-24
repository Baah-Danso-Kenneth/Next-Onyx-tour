import Layout from '@/components/Layout'
import Bookings from '@/sections/landingpage/Bookings'
import Brand from '@/sections/landingpage/Brand'
import FirstAdveture from '@/sections/landingpage/FirstAdventure'
import Hero from '@/sections/landingpage/Hero'
import KindWords from '@/sections/landingpage/KindWords'
import Meetup from '@/sections/landingpage/Meetup'
import Recommend from '@/sections/landingpage/Recommend'
import SecondAdventure from '@/sections/landingpage/SecondAdventure'
import WhatWeDo from '@/sections/landingpage/WhatWeDo'
import WhereWeGo from '@/sections/landingpage/WhereWeGo'
import React from 'react'

function index() {
  return (
    <Layout>
      <Hero/>
      <WhatWeDo/>
      <WhereWeGo/>
      <Recommend/>
      <Meetup/>
      <FirstAdveture/>
      <SecondAdventure/>
      <Brand/>
      <Bookings/>
      <KindWords/> 
    </Layout>
  )
}

export default index
