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
              <h2 className="main-font main-font__wedding">Akad Nikah dan Syukuran Pernikahan</h2>
              <span className="sub-title sub-title__wedding">Insha Allah akan Diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <WeddingInfoBox
                title="Akad Nikah"
                time="Pagi Hari"
                date="Sabtu, 03 Oktober 2020"
                description="HARRIS Hotel Sentraland, Semarang"
                mobileDescription="HARRIS Hotel Sentraland, Semarang"
              />
              <WeddingInfoBox
                title="Syukuran Pernikahan"
                time="11:00 WIB - 12:30 WIB"
                date="Sabtu, 03 Oktober 2020"
                description="HARRIS Hotel Sentraland, Semarang"
                mobileDescription="HARRIS Hotel Sentraland, Semarang"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default WeddingSection;
