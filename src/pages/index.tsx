import Layout from '@/components/Layout';
import Hero from '@/section/Hero';
import MeetUp from '@/section/MeetUp';
<<<<<<< HEAD
import Recommend from '@/section/Recommend';
=======
>>>>>>> 2f461016d2c468a5c175d15599b3a4c804ff8de3
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
