import Layout from '@/components/Layout';
import Hero from '@/section/Hero';
import KindWords from '@/section/KindWords';
import MeetUp from '@/section/MeetUp';
import Recommend from '@/section/Recommend';
import Sponsors from '@/section/Sponsors';
import WhatWeDo from '@/section/WhatWeDo';
import WhereWeGo from '@/section/WhereWeGo';
import React, { useState, useEffect } from 'react';

function LandingPage() {

  return (
    <Layout>
      <Hero/>
      <WhatWeDo/>
      <WhereWeGo/>
      <Recommend/>
      <MeetUp/>
      <Sponsors/>
      <KindWords/>
    </Layout>
 );
}

export default LandingPage;
