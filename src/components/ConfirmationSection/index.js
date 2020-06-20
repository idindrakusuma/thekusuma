import React from 'react';
import { string } from 'prop-types';
import { GOOGLE_CALENDAR_LINK } from '@/constants';
import { styWrapper, styFlex } from './styles';

function ConfirmationSection({ guestName }) {
  return (
    <div id="fh5co-started" className="fh5co-bg" css={styWrapper}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font">{` Apakah kamu hadir, ${guestName}?`}</h2>
            <p>Atas kehadiran & do'a restu saudara/i, kami ucapkan teima kasih. <br/> Wassalamualaikum Warahmatullahi Wabarakatuh.</p>
          </div>
        </div>
        <div className="row" css={styFlex}>
          <div className="col-md-3">
            <a href={GOOGLE_CALENDAR_LINK} target="_blank" rel="noreferrer">
              <button className="btn btn-default btn-block">Ya, tentu saja!</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

ConfirmationSection.propTypes = {
  guestName: string.isRequired,
};

export default React.memo(ConfirmationSection);
