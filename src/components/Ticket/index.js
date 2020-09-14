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
          <div class="tinfo">Syukuran Pernikahan / Shift</div>
          <div class="tdata">
            {`${configData.shiftType?.[guest.shift]} / ${guest.shift}` || '11.00 WIB - 13.00 WIB'}
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
          <div class="tinfo">Penting</div>
          <div class="tdata additional">
            <ul style={{ paddingLeft: '16px' }}>
              <li>
                {`Setiap tamu yang hadir wajib menunjukkan QRCode ini sebagai pengganti buku tamu untuk untuk meminimalisir kontak fisik melalui pena.`}
              </li>
              <li style={{ textTransform: 'uppercase' }}>
                Dalam rangka mematuhi protokol kesehatan,
                <span style={{ color: '#f14e95', textTransform: 'uppercase' }}>
                  {` 1 undangan hanya berlaku untuk 2 orang tamu`}
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
