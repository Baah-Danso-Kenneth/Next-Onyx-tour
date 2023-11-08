import Layout from '@/components/Layout'
import Loading from '@/components/Loading'
import Hello from '@/section/About/SayHello/Hello'
import React,{useState,useEffect} from 'react'

function TalkToUs() {
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
      setTimeout(()=>{
        setLoading(true)
      },3000)
  },[])

  return (
    !loading ? 
    <Loading/>
      :
      (
    <Layout>
      <Hello/> 
    </Layout>
      )

  )
}

export default TalkToUs
