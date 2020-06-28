import React from 'react';
import { bool } from 'prop-types';

function FooterSection({ isAnonymGuest }) {
  return (
    <footer id="fh5co-footer" role="contentinfo" className={`${isAnonymGuest ? 'footer__with-border' : ''}`}>
      <div className="container">
        <div className="row copyright">
          <div className="col-md-12 text-center">
            <p>
              <small className="block">&copy; 2020 Dinda & Indra Wedding. All Rights Reserved.</small>
              <small className="block">
                Song by{' '}
                <a href="https://www.youtube.com/watch?v=fb167KAxvrg" target="_blank" rel="noreferrer">
                  Anandito Anisa - Pernikahan Impian
                </a>
              </small>
              <small className="block">
                Original Template from{' '}
                <a href="http://freehtml5.co/" target="_blank" rel="noreferrer">
                  FREEHTML5.co
                </a>
              </small>
              <small className="block">
                Re-created by Indra Kusuma using ReactJS. Check the code at{' '}
                <a href="https://github.com/idindrakusuma/thekusuma" target="_blank" rel="noreferrer">
                  Github
                </a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

FooterSection.propTypes = {
  isAnonymGuest: bool.isRequired,
};

export default React.memo(FooterSection);
