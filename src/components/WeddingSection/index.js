import React, { Fragment } from 'react';
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
              <div className="col-md-6 col-sm-6 text-center">
                <div className="event-wrap">
                  <h3>Main Ceremony</h3>
                  <div className="event-col">
                    <i className="icon-clock"></i>
                    <span>08:00 AM - 10:00 AM</span>
                  </div>
                  <div className="event-col">
                    <i className="icon-calendar"></i>
                    <span>Sat - October, 3rd 2020</span>
                  </div>
                  <p>need to add detail description about main ceremony. We can add up to 3 sentences yaa</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 text-center">
                <div className="event-wrap">
                  <h3>Wedding Party</h3>
                  <div className="event-col">
                    <i className="icon-clock"></i>
                    <span>11:00 AM - 13:00 PM</span>
                  </div>
                  <div className="event-col">
                    <i className="icon-calendar"></i>
                    <span>Sat - October, 3rd 2020</span>
                  </div>
                  <p>need to add detail description about main ceremony. We can add up to 3 sentences yaa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default WeddingSection;
