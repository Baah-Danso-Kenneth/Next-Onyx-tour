import Adventure from '@/components/LandingPage/Adventure'
import Grouped from '@/components/LandingPage/Grouped'
import Hero from '@/components/LandingPage/Hero'
import Instruction from '@/components/LandingPage/Instruction'
import KindWords from '@/components/LandingPage/KindWords'
import Recommend from '@/components/LandingPage/Recommend'
import Sponsors from '@/components/LandingPage/Sponsors'
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
    <Grouped/>
    <Sponsors/>
    <Adventure/>
    <Instruction/>
    <KindWords/>
    </Layout>
  )
}

export default HomePage

