import React from 'react';
import QRCode from 'react-qr-code';
import { string } from 'prop-types';

function QRCard({ name, code }) {
  return (
    <div className="col-md-3 col-sm-3">
      <div className="qr">
        <div className="qr__wrapper">
          <QRCode value={code} size={250} />
        </div>
        <h3 className="title__name">{name}</h3>
        <h4 className="title__code">{`(${code})`}</h4>
      </div>
    </div>
  );
}

QRCard.propTypes = {
  name: string.isRequired,
  code: string.isRequired,
};

export default React.memo(QRCard);
