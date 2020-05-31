import React, { Fragment } from 'react';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';

function WeddingSection() {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span>Our Special Event</span>
              <h2 className="main-font">Wedding Details</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <WeddingInfoBox
                title="Main Ceremony"
                time="08:00 AM - 10:00 AM"
                date="Sat - October, 3rd 2020"
                description="need to add detail description about main ceremony. We can add up to 3 sentences yaa"
              />
              <WeddingInfoBox
                title="Wedding Party"
                time="11:00 AM - 13:00 PM"
                date="Sat - October, 3rd 2020"
                description="need to add detail description about main ceremony. We can add up to 3 sentences yaa"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default WeddingSection;
