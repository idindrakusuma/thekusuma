import React, { Fragment } from 'react';
import { object, string } from 'prop-types';

import WeddingImg from '@assets/images/wedding-logo.png';
import { GOOGLE_CALENDAR_LINK } from '@/constants';

import CountContainer from './CountContainer';
import { styWrapper, styHero, styBackground } from './styles';

function WelcomeSection({ location, guestName }) {
  const renderGuest = () => {
    return (
      <Fragment>
        <h2 className="to-dearest">To Our Dearest</h2>
        <h2 className="to-dearest-name">{guestName}</h2>
        <a href={GOOGLE_CALENDAR_LINK} className="btn btn-default btn-sm" target="_blank" rel="noreferrer">
          Add to My Calendar
        </a>
      </Fragment>
    );
  };

  return (
    <div css={styHero}>
      <header
        id="fh5co-header"
        role="banner"
        className="fh5co-cover"
        css={styBackground}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center">
              <img src={WeddingImg} alt="wedding-dinda-indra" />
              <h4 className="sub-title">The Wedding of</h4>
              <h1 className="title">Dinda &amp; Indra</h1>
              <CountContainer />
              {renderGuest()}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

WelcomeSection.propTypes = {
  location: object.isRequired,
  guestName: string.isRequired,
};

export default WelcomeSection;
