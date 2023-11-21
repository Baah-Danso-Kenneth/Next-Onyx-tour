import Hero from '@/components/LandingPage/Hero'
import WhatWeDo from '@/components/LandingPage/WhatWeDo'
import Layout from '@/components/shared/Layout'
import React from 'react'

function HomePage() {
  return (
  <Layout>
    <Hero/>
    <WhatWeDo/>
    </Layout>
  )
}

export default HomePage

