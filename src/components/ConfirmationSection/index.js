import React from 'react';
import { string, bool } from 'prop-types';
import { Link } from 'gatsby';

import { styWrapper, styFlex } from './styles';

function ConfirmationSection({ isInvitation, guestName, codeLink }) {

  return (
    <div id="fh5co-started" className="fh5co-bg" css={styWrapper}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
          {!guestName && (
            <h2 className="main-font">{` Terima Kasih`}</h2>
          )}
          {guestName && (
            <h2 className="main-font">{` Apakah kamu hadir, ${guestName}?`}</h2>
          )}
            <p>
              Atas kehadiran & do'a restu saudara/i, <br /> kami ucapkan terima kasih. Wassalaamu'alaikum warahmatullahi wabarakaatuh.
            </p>
          </div>
        </div>
        {isInvitation && (
        <div className="row" css={styFlex}>
          <div className="col-md-3">
            <Link to={`e-ticket?${codeLink}`}>
              <button className="btn btn-default btn-block">Lihat e-Ticket</button>
            </Link>
          </div>
        </div>
        )}
        {!isInvitation && (
        <div className="row" css={styFlex}>
          <div className="col-md-3">
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

ConfirmationSection.propTypes = {
  codeLink: string.isRequired,
  isInvitation: bool.isRequired,
  guestName: string.isRequired,
};

export default React.memo(ConfirmationSection);
