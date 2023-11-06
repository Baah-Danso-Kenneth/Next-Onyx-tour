import Layout from '@/components/Layout';
import Bookings from '@/section/LandingPage/Bookings';
import Hero from '@/section/LandingPage/Hero';
import KindWords from '@/section/LandingPage/KindWords';
import MeetUp from '@/section/LandingPage/MeetUp';
import Recommend from '@/section/LandingPage/Recommend';
import Sponsors from '@/section/LandingPage/Sponsors';
import WhatWeDo from '@/section/LandingPage/WhatWeDo';
import WhereWeGo from '@/section/LandingPage/WhereWeGo';
import Adventure from '@/section/LandingPage/Adenture';
import React, { useEffect, useState } from 'react';
import Loading from '@/components/Loading';

function LandingPage() {
  const [isLoading, setIsLoading]=useState(false)


  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(true)
    }, 3000);
  },[])

  return (
  !isLoading ? (
    <Loading />
  ) : (
    <div>
      <Layout>
        <Hero />
        <WhatWeDo/>
        <WhereWeGo />
        <Recommend />
        <MeetUp />
        <Sponsors />
        <Adventure />
        <Bookings />
        <KindWords />
      </Layout>
    </div>
  )
);


}

export default LandingPage;

