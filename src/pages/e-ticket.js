import React, { useState, useEffect, useRef, useCallback } from 'react';

import MainLayout from '@components/Layout';
import Ticket from '@components/Ticket';

import getQueryValue from '@helpers/getQueryValue';
import useGuestData from '@/hooks/useGuestData';
import useConfigData from '@/hooks/useConfigData';
import { styTicket } from '@components/Ticket/styles';

function ETicket({ location }) {
  const codeEticket = getQueryValue(location, 'code') || '';
  const alreadyChecked = useRef(false);

  const [value, setValue] = useState('');
  const [selectedGuest, setSelectedGuest] = useState({});
  const [isShowTicket, setIsShowTicket] = useState(false);

  const { data, loading } = useGuestData();
  const { data: configData, loading: configLoading } = useConfigData();

  const handleSetValue = (e) => {
    setValue(e.target.value);
  };

  const handleCheckTicket = useCallback(
    (tempValue) => {
      const guestCode = (tempValue || value).toUpperCase();
      const guest = data.find((g) => (g.code || '').toUpperCase() === guestCode);

      if (guest) {
        setSelectedGuest(guest);
        setIsShowTicket(true);
        return;
      }

      alert(`Maaf, Kode data ${guestCode} tidak ditemukan. Mohon di cek lagi..`);
    },
    [data, value],
  );

  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === 13) {
      handleCheckTicket();
    }
  };

  /**
   * Effect to autu-check code ticket
   */
  useEffect(() => {
    if (codeEticket !== '' && data.length > 0 && !alreadyChecked.current) {
      alreadyChecked.current = true;
      setValue(codeEticket);
      setTimeout(() => {
        handleCheckTicket(codeEticket);
      }, 1000);
    }
  }, [codeEticket, data.length, handleCheckTicket, loading]);

  const renderTypeContent = () => {
    if (isShowTicket) return <Ticket guest={selectedGuest} configData={configData} />;

    const isLoading = loading || configLoading || false;

    return (
      <>
        <div style={{ marginTop: '-100px' }}>
          <h2 className="sub-title-ticket">Penukaran e-Ticket Pernikahan</h2>
          <h1 className="title">Dinda & Indra</h1>
        </div>
        <div className="row">
          <div class="input-group">
            <input
              value={value}
              disabled={isLoading}
              onChange={handleSetValue}
              onKeyDown={handleKeyDown}
              type="text"
              class="form-control"
              placeholder={`${isLoading ? 'Tunggu sebentar..' : 'Tulis kode undangan..'}`}
            />
            <span class="input-group-btn">
              <button class="btn btn-default" type="button" style={{ height: '54px' }}>
                Cari
              </button>
            </span>
          </div>
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
