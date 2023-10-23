import Layout from '@/components/Layout'
import Hero from '@/sections/landingpage/Hero'
import KindWords from '@/sections/landingpage/KindWords'
import WhatWeDo from '@/sections/landingpage/WhatWeDo'
import React from 'react'

function index() {
  return (
    <Layout>
      <Hero/>
      <WhatWeDo/>
      <KindWords/>
    </Layout>
  )
}

export default index
