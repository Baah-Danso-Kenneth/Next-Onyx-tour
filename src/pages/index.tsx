import Layout from '@/components/Layout';
import Hero from '@/section/Hero';
import MeetUp from '@/section/MeetUp';
import WhatWeDo from '@/section/WhatWeDo';
import WhereWeGo from '@/section/WhereWeGo';
import React, { useState, useEffect } from 'react';

function LandingPage() {

  return (
    <Layout>
      <Hero/>
      <WhatWeDo/>
      <WhereWeGo/>
      <MeetUp/>
    </Layout>
 );
}

export default LandingPage;
