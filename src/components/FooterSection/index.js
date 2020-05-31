import React from 'react';

function FooterSection() {
  return (
    <footer id="fh5co-footer" role="contentinfo">
      <div className="container">
        <div className="row copyright">
          <div className="col-md-12 text-center">
            <p>
              <small className="block">&copy; 2020 Dinda & Indra Wedding. All Rights Reserved.</small>
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

export default FooterSection;
