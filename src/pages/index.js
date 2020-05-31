import React from 'react';
/**
 * List of local components
 */
import MainLayout from '@components/Layout';
import HeroSection from '@components/HeroSection';

function Home() {
  return (
    <MainLayout>
      <HeroSection />
    </MainLayout>
  );
}

export default Home;
