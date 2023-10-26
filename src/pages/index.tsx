import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import Bookings from '@/sections/landingpage/Bookings';
import Brand from '@/sections/landingpage/Brand';
import FirstAdventure from '@/sections/landingpage/FirstAdventure';
import Hero from '@/sections/landingpage/Hero';
import KindWords from '@/sections/landingpage/KindWords';
import Meetup from '@/sections/landingpage/Meetup';
import Recommend from '@/sections/landingpage/Recommend';
import SecondAdventure from '@/sections/landingpage/SecondAdventure';
import WhatWeDo from '@/sections/landingpage/WhatWeDo';
import WhereWeGo from '@/sections/landingpage/WhereWeGo';
import Loader from '@/components/Loader';

function LandingPage() {
  const [loading, setLoading] = useState(true); // Set loading to true initially

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // After 2 seconds, set loading to false
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader /> // Show the Loader component while loading is true
      ) : (
        <Layout>
          <Hero />
          <WhatWeDo />
          <WhereWeGo />
          <Recommend />
          <Meetup />
          <FirstAdventure />
          <SecondAdventure />
          <Brand />
          <Bookings />
          <KindWords />
        </Layout>
      )}
    </div>
  );
}

export default LandingPage;
