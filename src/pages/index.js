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
import ConfirmationSection from '@components/ConfirmationSection';
import FooterSection from '@components/FooterSection';
import WishesSection from '@components/WishesSection';
import FloatingMusic from '@components/FloatingMusic';

function Home({ location }) {
  const guestName = decodeURIComponent(getQueryValue(location, 'to') || '');
  const firstName = guestName.replace(/ .*/, '');
  /**
   * @TODO
   * should be showing error message when name of guest is empty!
   */

  return (
    <MainLayout>
      <WelcomeSection location={location} guestName={guestName} />
      <HelloSection guestName={firstName} />
      <WeddingSection />
      <StorySection />
      <WishesSection />
      <ConfirmationSection guestName={firstName} />
      <FooterSection />
      <FloatingMusic />
    </MainLayout>
  );
}

Home.propTypes = {
  location: object.isRequired,
};

export default Home;
