import Layout from '@/components/Layout';
import Hero from '@/section/Hero';
import KindWords from '@/section/KindWords';
import MeetUp from '@/section/MeetUp';
<<<<<<<<< Temporary merge branch 1
=========
import Recommend from '@/section/Recommend';
>>>>>>>>> Temporary merge branch 2
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
