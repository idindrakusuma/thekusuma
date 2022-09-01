import React from 'react';

import MainLayout from '@components/Layout';
import QRCard from '@components/QRCard';
import useGuestData from '@/hooks/useGuestData';
import { styWrapper } from '@components/QRCard/styles';

function GenerateQRPage() {
  const { data, loading } = useGuestData();

  const finalData = data.filter((guest, index) => index >= 0);

  const renderContent = () => {
    if (loading) return <div>Menyiapkan data..</div>;

    return finalData.map((guest) => {
      return <QRCard name={guest.name} code={guest.code} desc={guest.desc} />;
    });
  };

  return (
    <MainLayout>
      <div css={styWrapper}>
        <div className="row">{renderContent()}</div>
      </div>
    </MainLayout>
  );
}

export default GenerateQRPage;
