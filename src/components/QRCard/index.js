import React from 'react';
import QRCode from 'react-qr-code';
import { string } from 'prop-types';

function QRCard({ name, code, desc }) {
  const URL = `https://arin.miftahussalam.com?to=${encodeURIComponent(name).replace(/%20/g, "+")}&type=invitation&code=${code}`;
  return (
    <div className="col-md-2 col-sm-2">
      <div className="qr">
        <div className="qr__wrapper">
          <QRCode value={URL} size={150} />
        </div>
        {name ? (
          <>
            <h3 className="title__name">{name}</h3>
            <h4 className="title__code">{`(${desc})`}</h4>
          </>
        ) : (
          <>
            <h3 className="title__name">{code}</h3>
            <h4 className="title__code title__transaparent">{`(${desc})`}</h4>
          </>
        )}
      </div>
    </div>
  );
}

QRCard.propTypes = {
  name: string.isRequired,
  desc: string.isRequired,
  code: string.isRequired,
};

export default React.memo(QRCard);
