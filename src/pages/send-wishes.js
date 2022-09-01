import React from 'react';

import MainLayout from '@components/Layout';
import SendWishes from '@components/WishesSection/SendWishes';
import { styWrapper } from '@components/WishesSection/SendWishes/styles';
import getQueryValue from '@helpers/getQueryValue';

function SendWishesWrapper({ location }) {
  const urlCode = getQueryValue(location, 'code') || '';
  const urlName = getQueryValue(location, 'name') || '';
  const urlType = getQueryValue(location, 'type') || '';
  return (
    <MainLayout>
      <div css={styWrapper}>{<SendWishes urlCode={urlCode} urlName={urlName} urlType={urlType} />}</div>
    </MainLayout>
  );
}

export default SendWishesWrapper;
