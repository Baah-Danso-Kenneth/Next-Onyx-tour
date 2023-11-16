import Layout from '@/components/Layout'
import Loading from '@/components/Loading'
import SummerInstructorInfo from '@/section/GroupTrips/Summer/SummerInstructorInfo'
import React, { useEffect, useState } from 'react'

function SummerInstructor() {
  const [isLoading,setIsLoading]=useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(true)
    },3000)
  },[])
  return (

    !isLoading ? (
      <Loading/>
    ) :
    
    (  <>
      <Layout>
      <SummerInstructorInfo/>
      </Layout> 
      </>
      )

  )
}

export default SummerInstructor
