import React, { Fragment } from 'react';
import { string } from 'prop-types';

import Bride from '@assets/images/bride.jpg';
import Groom from '@assets/images/bride.jpg';

import { styWrapper } from './styles';

function HelloSection({ guestName }) {
  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">{`Hallo, ${guestName}!`}</h2>
              <h3 className="sub-title">October 3rd, 2020 HARRIS Hotel Sentraland, Semarang</h3>
              <p>We invited you to celebrate our wedding</p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Dinda Saraswati</h3>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                  the blind texts. Separated they live in Bookmarksgrove
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Indra Kusuma</h3>
                <p>
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                  the blind texts. Separated they live in Bookmarksgrove
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  guestName: string.isRequired,
};

export default HelloSection;
