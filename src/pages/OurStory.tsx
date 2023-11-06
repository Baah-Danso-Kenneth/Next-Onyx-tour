import Layout from '@/components/Layout'
import Loading from '@/components/Loading'
import Adventure from '@/section/About/OurStory/Adventure'
import Description from '@/section/About/OurStory/Description'
import Hero from '@/section/About/OurStory/Hero'
import React,{useState, useEffect} from 'react'

function OurStory() {
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(true)
    },3000)
    
  },[])
  return (

    !loading ? (
      <Loading/>
    ) : (
      <>
       <Layout>
      <Hero/>
      <Description/>
      <Adventure/>
    </Layout>
    </>

    )

  )
}

export default OurStory
