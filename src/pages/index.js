import React from 'react';
import { object } from 'prop-types';
import getQueryValue from '@helpers/getQueryValue';
/**
 * List of local components
 */
import MainLayout from '@components/Layout';
import WelcomeSection from '@components/WelcomeSection';
import HelloSection from '@components/HelloSection';
import WeddingSection from '@components/WeddingSection';
import StorySection from '@components/StorySection';

function Home({ location }) {
  const guestName = decodeURIComponent(getQueryValue(location, 'to') || '');
  /**
   * @TODO
   * should be showing error message when name of guest is empty!
   */

  return (
    <MainLayout>
      <WelcomeSection location={location} guestName={guestName} />
      <HelloSection guestName={guestName} />
      <WeddingSection />
      <StorySection />
    </MainLayout>
  );
}

Home.propTypes = {
  location: object.isRequired,
};

export default Home;
