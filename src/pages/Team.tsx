import Layout from '@/components/Layout';
import Loading from '@/components/Loading';
import Hero from '@/section/About/Team/Hero';
import Information from '@/section/About/Team/Information';
import MeetTeam from '@/section/About/Team/MeetTeam';
import Objective from '@/section/About/Team/Objective';
import React, { useEffect, useState } from 'react';


function Team() {

    const [loading,setLoading]=useState(false)
    useEffect(()=>{
      setTimeout(()=>{
          setLoading(true)
      },300)
    },[])

  return (

    !loading ? 
    <Loading/>
     : 
     (
    <div>
        <Layout>
          <Hero/>
          <MeetTeam/>
          <Information/>
          <Objective/>
        </Layout>
    </div>
     )

  )
}

export default Team
