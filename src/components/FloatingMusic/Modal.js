import React from 'react';
import { Helmet } from 'react-helmet';
import { bool, func } from 'prop-types';

import { styWrapperModal } from './styles';

function ModalMusic({ isShow, onClickAction }) {
  if (!isShow) {
    return (
      <Helmet>
        <body className=""></body>
      </Helmet>
    );
  }

  return (
    <div css={styWrapperModal} className="modal-open">
      <Helmet>
        <body className="body-hidden"></body>
      </Helmet>
      <div id="myModal" className="modal fade in" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header"></div>
            <div className="modal-body">
              <h2 className="sub-title">Wedding Invitation</h2>
              <h2 className="title">Arin &amp; Miftah</h2>
            </div>
            <div className="modal-footer">
              <center>
                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={onClickAction}>
                  OK
                </button>
                <center></center>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ModalMusic.propTypes = {
  isShow: bool.isRequired,
  onClickAction: func.isRequired,
};

export default React.memo(ModalMusic);
