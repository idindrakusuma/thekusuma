import React from 'react';

import MainLayout from '@components/Layout';
import GenerateLink from '@components/GenerateLink';
import { styWrapper } from '@components/GenerateLink/styles';

function GenerateLinkWrapper() {
  return (
    <MainLayout>
      <div css={styWrapper}>{<GenerateLink />}</div>
    </MainLayout>
  );
}

export default GenerateLinkWrapper;
