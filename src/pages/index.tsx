import Layout from '@/components/Layout'
import Hero from '@/sections/landingpage/Hero'
import WhatWeDo from '@/sections/landingpage/WhatWeDo'
import React from 'react'

function index() {
  return (
    <Layout>
      <Hero/>
      <WhatWeDo/>
    </Layout>
  )
}

export default index
