import Layout from '@/components/Layout';
import Hero from '@/section/Hero';
import MeetUp from '@/section/MeetUp';
import Recommend from '@/section/Recommend';
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
    </Layout>
 );
}

export default LandingPage;
