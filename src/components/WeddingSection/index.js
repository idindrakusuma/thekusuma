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
              <span className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
              <h2 className="main-font">
                Akad Nikah dan Syukuran Pernikahan <br /> insha Allah akan diselenggarakan pada:
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <WeddingInfoBox
                title="Akad Nikah"
                time="08:00 AM WIB"
                date="Sabtu, 03 Oktober 2020"
                description="Lokasi: Orange Ballroom @ HARRIS Hotel Sentraland, Semarang"
              />
              <WeddingInfoBox
                title="Syukuran Pernikahan"
                time="11:00 WIB - 12:30 WIB"
                date="Sabtu, 03 Oktober 2020"
                description="Lokasi: Orange Ballroom @ HARRIS Hotel Sentraland, Semarang"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default WeddingSection;
