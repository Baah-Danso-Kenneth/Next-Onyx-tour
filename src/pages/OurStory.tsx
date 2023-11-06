import Layout from '@/components/Layout'
import Adventure from '@/section/About/OurStory/Adventure'
import Description from '@/section/About/OurStory/Description'
import Hero from '@/section/About/OurStory/Hero'
import React from 'react'

function OurStory() {
  return (
    <Layout>
      <Hero/>
      <Description/>
      <Adventure/>
    </Layout>
  )
}

export default OurStory
