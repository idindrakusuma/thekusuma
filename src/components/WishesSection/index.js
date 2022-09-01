import React from 'react';
import WishesContainer from './WishesContainer';
import { string } from 'prop-types';

function WishesSection( {codeLink} ) {
  return (
    <div id="fh5co-testimonial">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Dari Sahabat</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <WishesContainer codeLink={codeLink} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

WishesContainer.propTypes = {
  codeLink: string.isRequired,
};

export default WishesSection;
