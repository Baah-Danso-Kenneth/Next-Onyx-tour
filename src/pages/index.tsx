import Hero from '@/components/LandingPage/Hero'
import Recommend from '@/components/LandingPage/Recommend'
import WhatWeDo from '@/components/LandingPage/WhatWeDo'
import WhereWeGo from '@/components/LandingPage/WhereWeGo'
import Layout from '@/components/shared/Layout'
import React from 'react'

function HomePage() {
  return (
  <Layout>
    <Hero/>
    <WhatWeDo/>
    <WhereWeGo/>
    <Recommend/>
    </Layout>
  )
}

export default HomePage

