import React, { useState } from 'react';

import MainLayout from '@components/Layout/Ticket';
import Ticket from '@components/Ticket';

import useGuestData from '@/hooks/useGuestData';
import { styTicket } from '@components/Ticket/styles';

function ETicket() {
  const [value, setValue] = useState('');
  const [selectedGuest, setSelectedGuest] = useState({});
  const [isShowTicket, setIsShowTicket] = useState(false);

  const { data, loading } = useGuestData();

  const handleSetValue = (e) => {
    setValue(e.target.value);
  };

  const handleCheckTicket = () => {
    const guestCode = value.toUpperCase();
    const guest = data.find((g) => (g.code || '').toUpperCase() === guestCode);

    if (guest) {
      setSelectedGuest(guest);
      setIsShowTicket(true);
      return;
    }

    alert('Maaf, Data tidak ditemukan. Mohon di cek lagi..');
  };

  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === 13) {
      handleCheckTicket();
    }
  };

  const renderTypeContent = () => {
    if (isShowTicket) return <Ticket guest={selectedGuest} onRecheckTicket={() => setIsShowTicket(false)} />;

    return (
      <>
        <div style={{ marginTop: '-100px' }}>
          <h2 className="sub-title-ticket">Penukaran e-Ticket Pernikahan</h2>
          <h1 className="title">Dinda & Indra</h1>
        </div>
        <div className="input-ticket">
          <input
            value={value}
            disabled={loading}
            type="text"
            placeholder={`${loading ? 'Tunggu sebentar..' : 'Masukan kode undangan..'}`}
            onChange={handleSetValue}
            onKeyDown={handleKeyDown}
          />
        </div>
      </>
    );
  };

  return (
    <MainLayout>
      <div css={styTicket}>
        <div className="homepage">{renderTypeContent()}</div>
      </div>
    </MainLayout>
  );
}

export default ETicket;
