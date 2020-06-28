import React, { Fragment, useState } from 'react';
import { object, string, bool, func } from 'prop-types';

import WeddingImg from '@assets/images/wedding-logo.png';
import { GOOGLE_CALENDAR_LINK } from '@/constants';

import CountContainer from './CountContainer';
import { styWrapper, styHero, styBackground, styButtonDetail, styButton } from './styles';

function WelcomeSection({ location, guestName, isAnonymGuest, onClickDetail }) {
  const [loading, setLoading] = useState(false);
  const [alreadyDownloadData, setAlreadyDownloadData] = useState(false);

  const handleScrollTo = () => {
    /** scroll into detail view */
    const element = document.getElementById('fh5co-couple');
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  const handleShowDetail = () => {
    const myAudio = document.getElementById('myAudio');
    myAudio.play();
    onClickDetail();

    if (!alreadyDownloadData) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setAlreadyDownloadData(true);
        handleScrollTo();
      }, 3000);
    } else {
      handleScrollTo();
    }
  };

  const renderGuestSection = () => {
    if (isAnonymGuest) return null;

    return (
      <Fragment>
        <h2 className="to-dearest">To our Dearest</h2>
        <h2 className="to-dearest-name">{guestName}</h2>
        <a
          href={GOOGLE_CALENDAR_LINK}
          css={styButton}
          className="btn btn-default btn-sm"
          target="_blank"
          rel="noreferrer"
        >
          Tambahkan ke Kalender
        </a>
      </Fragment>
    );
  };

  const renderGuest = () => {
    return (
      <Fragment>
        {renderGuestSection()}
        <button onClick={handleShowDetail} css={styButtonDetail} className="btn btn-default btn-sm">
          {loading ? `Mendownload data...` : 'Lihat Detail Acara'}
        </button>
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
  guestName: string.isRequired,
  isAnonymGuest: bool.isRequired,
  location: object.isRequired,
  onClickDetail: func.isRequired,
};

export default WelcomeSection;
