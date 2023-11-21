import Layout from '@/components/Layout'
import Hero from '@/section/Shop/Hero'
import ShopItems from '@/section/Shop/ShopItems'
import React from 'react'

function ShopePage() {
  return (
    <Layout>
      <Hero/>
       <ShopItems/>
    </Layout>
  )
}

export default ShopePage
