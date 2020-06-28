import React from 'react';
import { string, bool } from 'prop-types';
import { styWrapper, styFlex } from './styles';

function ConfirmationSection({ isAnonymGuest, guestName }) {
  const handleClick = () => {};

  if (isAnonymGuest) return null;

  return (
    <div id="fh5co-started" className="fh5co-bg" css={styWrapper}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font">{` Apakah kamu hadir, ${guestName}?`}</h2>
            <p>
              Atas kehadiran & do'a restu saudara/i, <br /> kami ucapkan teima kasih. Wassalamualaikum Warahmatullahi
              Wabarakatuh.
            </p>
          </div>
        </div>
        <div className="row" css={styFlex}>
          <div className="col-md-3">
            <button className="btn btn-default btn-block" onClick={handleClick}>
              Lihat E-Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ConfirmationSection.propTypes = {
  isAnonymGuest: bool.isRequired,
  guestName: string.isRequired,
};

export default React.memo(ConfirmationSection);
