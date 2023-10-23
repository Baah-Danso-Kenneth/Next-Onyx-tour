import Layout from '@/components/Layout'
import Hero from '@/sections/landingpage/Hero'
import KindWords from '@/sections/landingpage/KindWords'
import Meetup from '@/sections/landingpage/Meetup'
import Recommend from '@/sections/landingpage/Recommend'
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
      <KindWords/> 
    </Layout>
  )
}

export default index
