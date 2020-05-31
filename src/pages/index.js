import React from 'react';
import { object } from 'prop-types';
/**
 * List of local components
 */
import MainLayout from '@components/Layout';
import HeroSection from '@components/HeroSection';

function Home({ location }) {
  return (
    <MainLayout>
      <HeroSection location={location} />
    </MainLayout>
  );
}

Home.propTypes = {
  location: object.isRequired,
};

export default Home;
