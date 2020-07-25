import React from 'react';
import QRCode from 'react-qr-code';
import { object, func } from 'prop-types';
import { Link } from 'gatsby';

import { styWrapper } from './styles';

function TicketData({ guest, onRecheckTicket }) {
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
          <div class="tinfo">Shift Pertama</div>
          <div class="tdata">11.00 WIB - 12.00 WIB</div>
        </div>
      </div>
      <button className="btn" onClick={onRecheckTicket}>
        Cek e-Ticket Lain
      </button>
      <Link to={`/?type=invitation&to=${guest.name}`}>
        <button className="btn primary">Homepage</button>
      </Link>
    </div>
  );
}

TicketData.propTypes = {
  guest: object,
  onRecheckTicket: func.isRequired,
};

TicketData.defaultProps = {
  guest: {},
};

export default TicketData;
