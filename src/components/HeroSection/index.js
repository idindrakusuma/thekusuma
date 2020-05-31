import React from 'react';

import { GOOGLE_CALENDAR_LINK } from '@/constants';
import CountContainer from './CountContainer';
import { styWrapper, styHero, styBackground } from './styles';

function HeroSection() {
  return (
    <div css={styHero}>
      <header id="fh5co-header" role="banner" css={styBackground} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center">
              <h1>Dinda &amp; Indra</h1>
              <h2>We Are Getting Married</h2>
              <CountContainer />
              <a href={GOOGLE_CALENDAR_LINK} className="btn btn-default btn-sm" target="_blank" rel="noreferrer">
                Save the date
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeroSection;
