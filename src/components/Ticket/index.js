import React from 'react';
import QRCode from 'react-qr-code';
import { object } from 'prop-types';
import { Link } from 'gatsby';

import { styWrapper } from './styles';

function TicketData({ guest, configData }) {
  const URL = `https://arin.miftahussalam.com?to=${encodeURIComponent(guest.name).replace(/%20/g, "+")}&type=invitation&code=${guest.code}`;
  return (
    <div css={styWrapper}>
      <div class="container">
        <div class="ticket">
          <div id="qrcode">
            <QRCode value={URL} size={250} />
          </div>
        </div>
        <div class="details">
          <div class="tinfo">Nama</div>
          <div class="tdata name">{guest.name}</div>
          <div class="tinfo">Keterangan</div>
          {guest.desc && (
            <div class="tdata">{guest.desc}</div>
          )}
          {!guest.desc && (
            <div class="tdata">-</div>
          )}
          <div class="tinfo">Waktu</div>
          <div class="tdata">
            11.00 s/d 15.00 WIB
          </div>
          {/* attendance */}
          {guest.isAttended ? (
            <>
              <div class="tinfo">Sudah hadir pada</div>
              <div class="tdata">
                <span class="badge badge-success">{guest.attendedAt}</span>
              </div>
            </>
          ) : null}
          {/** souvenir */}
          {guest.isExchanged ? (
            <>
              <div class="tinfo">Sudah menukarkan souvenir pada</div>
              <div class="tdata">
                <span class="badge badge-success">{guest.exchangedAt}</span>
              </div>
            </>
          ) : null}
          {/* Additional info */}
          <div class="tinfo">Note:</div>
          <div class="tdata additional">
            <ul style={{ paddingLeft: '16px' }}>
              <li>
                QRCode berisi link e-invitation
              </li>
              <li>
                <span style={{ color: '#f14e95', textTransform: 'uppercase' }}>
                  {`Diharapkan hadir sesuai waktu yang sudah ditentukan`}
                </span>
              </li>
            </ul>
            <br />
          </div>
        </div>
      </div>
      <Link to={`/?type=invitation&to=${guest.name}&code=${guest.code}`}>
        <button className="btn primary">{`< Kembali ke Homepage`}</button>
      </Link>
    </div>
  );
}

TicketData.propTypes = {
  guest: object,
  configData: object,
};

TicketData.defaultProps = {
  guest: {},
  configData: {},
};

export default TicketData;
