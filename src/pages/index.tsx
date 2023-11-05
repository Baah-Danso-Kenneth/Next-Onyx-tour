import Layout from '@/components/Layout';
import Bookings from '@/section/Bookings';
import Hero from '@/section/Hero';
import KindWords from '@/section/KindWords';
import MeetUp from '@/section/MeetUp';
import Recommend from '@/section/Recommend';
import Sponsors from '@/section/Sponsors';
import WhatWeDo from '@/section/WhatWeDo';
import WhereWeGo from '@/section/WhereWeGo';
import Adventure from '@/section/Adenture';
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

