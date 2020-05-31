import React, { Fragment } from 'react';
import { object } from 'prop-types';

import getQueryValue from '@helpers/getQueryValue';
import WeddingImg from '@assets/images/wedding-logo.png';
import { GOOGLE_CALENDAR_LINK } from '@/constants';

import CountContainer from './CountContainer';
import { styWrapper, styHero, styBackground } from './styles';

function HeroSection({ location }) {
  const nameGuest = decodeURIComponent(getQueryValue(location, 'to') || '');
  /**
   * @TODO
   * should be showing error message when name of guest is empty!
   */

  const renderGuest = () => {
    return (
      <Fragment>
        <h2 className="to-dearest">To Our Dearest</h2>
        <h2 className="to-dearest-name">{nameGuest}</h2>
        <a href={GOOGLE_CALENDAR_LINK} className="btn btn-default btn-sm" target="_blank" rel="noreferrer">
          Add to My Calendar
        </a>
      </Fragment>
    );
  };

  return (
    <div css={styHero}>
      <header id="fh5co-header" role="banner" css={styBackground} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center">
              <img src={WeddingImg} alt="wedding-dinda-indra" />
              <h4>The Wedding of</h4>
              <h1>Dinda &amp; Indra</h1>
              <CountContainer />
              {renderGuest()}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

HeroSection.propTypes = {
  location: object.isRequired,
};

export default HeroSection;
