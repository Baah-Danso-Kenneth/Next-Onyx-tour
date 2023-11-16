import Layout from '@/components/Layout'
import Loading from '@/components/Loading'
import WinterInstructorPage from '@/section/GroupTrips/Winter/WinterInstructorPage'
import React, { useEffect, useState } from 'react'

function WinterInstructor() {
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
      <WinterInstructorPage/>
      </Layout> 
      </>
      )

  )

}

export default WinterInstructor
