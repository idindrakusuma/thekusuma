import React from 'react';
import QRCode from 'react-qr-code';
import { object } from 'prop-types';
import { Link } from 'gatsby';

import { styWrapper } from './styles';

function TicketData({ guest, configData }) {
  return (
    <div css={styWrapper}>
      <div class="container">
        <div class="ticket">
          <div id="qrcode">
            <QRCode value={guest.code} size={250} />
          </div>
        </div>
        <div class="details">
          <div class="tinfo">Nama</div>
          <div class="tdata name">{guest.name}</div>
          <div class="tinfo">Keterangan</div>
          <div class="tdata">{guest.desc}</div>
          <div class="tinfo">Waktu Pelaksanaan</div>
          <div class="tdata">{configData.shiftType?.[guest.shift] || '11.00 WIB - 13.00 WIB'}</div>
          <div class="tinfo"></div>
          <div class="tdata additional">
            * Setiap tamu yang hadir wajib menunjukkan QRCode ini sebagai pengganti buku tamu dan menghindari penularan
            melalui pena
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
