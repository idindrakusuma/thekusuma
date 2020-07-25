import React, { useState } from 'react';

import MainLayout from '@components/Layout/Ticket';
import { styTicket } from '@components/Ticket/styles';

function ETicket() {
  const [value, setValue] = useState('');

  const handleSetValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <MainLayout>
      <div css={styTicket}>
        <div className="homepage">
          <div>
            <h2 className="sub-title-ticket">Penukaran e-Tiket Pernikahan</h2>
            <h1 className="title">Dinda & Indra</h1>
          </div>
          <div className="input-ticket">
            <input placeholder="Masukan kode e-ticket.." value={value} onChange={handleSetValue} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ETicket;
