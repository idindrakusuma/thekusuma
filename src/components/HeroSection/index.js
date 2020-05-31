import React from 'react';


import { GOOGLE_CALENDAR_LINK } from '@/constants';
import CountItem from './CountItem';
import { styMargin, styWrapper, styHero, styBackground } from './styles';

function HeroSection() {
  const renderCountdown = () => {
    return (
      <div className="col-md-12" css={styMargin('0 0 16px 0')}>
        <CountItem text="Days" number={60} />
        <CountItem text="Hours" number={60} />
        <CountItem text="Minutes" number={60} />
        <CountItem text="Seconds" number={60} />
      </div>
    );
  };

  return (
    <div css={styHero}>
      <header
        id="fh5co-header"
        role="banner"
        css={styBackground}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row" css={styWrapper}>
            <div className="col-md-8 col-md-offset-2 text-center">
              <h1>Dinda &amp; Indra</h1>
              <h2>We Are Getting Married</h2>
              {renderCountdown()}
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
