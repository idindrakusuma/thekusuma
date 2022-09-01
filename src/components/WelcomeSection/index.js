import React, { Fragment, useState } from 'react';
import { object, string, bool, func } from 'prop-types';
import { Link } from 'gatsby';

import WeddingImg from '@assets/images/wedding-logo.png';
import { GOOGLE_CALENDAR_LINK } from '@/constants';
import CountContainer from './CountContainer';
import ScrollToDown from './ScrollToDown';
import { styWrapper, styHero, styBackground, styButtonWrapper } from './styles';

const DELAY_TIME = 1500;

function WelcomeSection({ location, guestName, isInvitation, isAnonymGuest, codeLink, onClickDetail }) {
  const [loading, setLoading] = useState(false);
  const [alreadyDownloadData, setAlreadyDownloadData] = useState(false);

  const handleScrollTo = () => {
    /** scroll into detail view */
    const element = document.getElementById('fh5co-couple');
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  const handleShowDetail = () => {
    if (loading) return undefined;

    try {
      const myAudio = document.getElementById('myAudio');
      myAudio.play();
    } catch {
      console.error('FAILED_TO_PLAY_MUSIC');
    }

    onClickDetail();

    if (!alreadyDownloadData) {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setAlreadyDownloadData(true);
        handleScrollTo();
      }, DELAY_TIME);
    } else {
      handleScrollTo();
    }
  };

  const renderGuestSection = () => {
    if (isAnonymGuest) return <h2 className="to-dearest-name">Dear Friends,</h2>;

    return (
      <Fragment>
        <h3 className="to-dearest">To our Dearest</h3>
        <h2 className="to-dearest-name">{guestName}</h2>
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
              <img src={WeddingImg} alt="wedding-arin-miftah" />
              <h4 className="sub-title">The Wedding of</h4>
              <h1 className="title">Arin &amp; Miftah</h1>
              <div className={isAnonymGuest ? 'margin__bottom' : ''}>
                <CountContainer />
              </div>
              <div className="row" css={styButtonWrapper}>
                  <div className="col-md-3">
                    <a href={GOOGLE_CALENDAR_LINK} title="Add to My Calendar" target="_blank" rel="noreferrer">
                      <button className="btn btn-default btn-block">Add to Calendar</button>
                    </a>
                  </div>
              </div>
              <br></br>
              {renderGuestSection()}
              {isInvitation && (
                <div className="row" css={styButtonWrapper}>
                  <div className="col-md-3">
                    <Link to={`/e-ticket?${codeLink}`}>
                      <button className="btn btn-default btn-block">Lihat e-Ticket</button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <br></br>
          <div className="row">
            <ScrollToDown loading={loading} onClick={handleShowDetail} />
          </div>
        </div>
      </header>
    </div>
  );
}

WelcomeSection.propTypes = {
  guestName: string.isRequired,
  isInvitation: bool.isRequired,
  isAnonymGuest: bool.isRequired,
  location: object.isRequired,
  codeLink: string,
  onClickDetail: func.isRequired,
};

WelcomeSection.defaultProps = {
  codeLink: '',
};

export default WelcomeSection;
