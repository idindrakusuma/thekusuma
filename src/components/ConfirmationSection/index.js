import React from 'react';
import { string } from 'prop-types';
import { styWrapper, styFlex } from './styles';

function ConfirmationSection({ guestName }) {
  return (
    <div id="fh5co-started" className="fh5co-bg" css={styWrapper}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font">{`Are You Attending, ${guestName}?`}</h2>
            <p>Need to add one or two sentences in in section. Thanks!</p>
          </div>
        </div>
        <div className="row" css={styFlex}>
          <div className="col-md-3">
            <button type="submit" className="btn btn-default btn-block">
              Yes, Of Course
            </button>
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
