import React, { useState, useEffect, useRef, useCallback } from 'react';

import MainLayout from '@components/Layout';
import Ticket from '@components/Ticket';

import getQueryValue from '@helpers/getQueryValue';
import useGuestData from '@/hooks/useGuestData';
import useConfigData from '@/hooks/useConfigData';
import { styTicket } from '@components/Ticket/styles';

function ETicket({ location }) {
  const codeEticket = getQueryValue(location, 'code') || '';
  const nameEticket = getQueryValue(location, 'name') || '';
  const alreadyChecked = useRef(false);

  const [value, setValue] = useState('');
  const [selectedGuest, setSelectedGuest] = useState({});
  const [isShowTicket, setIsShowTicket] = useState(false);

  const { data, loading } = useGuestData();
  const { data: configData } = useConfigData();

  const handleCheckTicket = useCallback(
    (tempValue) => {
      const guestCode = (tempValue || value).toUpperCase();
      const guest = data.find((g) => (g.code || '').toUpperCase() === guestCode);

      if (guest) {
        if (guest.name.toUpperCase().includes(nameEticket.toUpperCase())) {
          setSelectedGuest(guest);
          setIsShowTicket(true);
          return;
        }
      }

      alert(`Maaf, Kode data ${guestCode} tidak ditemukan. Mohon di cek lagi..`);
      window.location.assign('https://arin.miftahussalam.com/');
    },
    [data, nameEticket, value],
  );
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

  return (
    <MainLayout>
      <div css={styTicket}>
        <div className="homepage">
          {isShowTicket ? (
            <Ticket guest={selectedGuest} configData={configData} />
          ) : (
            <h3 style={{ fontSize: '1.7rem' }}>🧑‍💻Validasi data tamu.. Mohon tunggu..</h3>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default ETicket;
