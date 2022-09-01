import * as React from 'react';
import { node } from 'prop-types';
import { Helmet } from 'react-helmet';

import Favicon from '@assets/images/arin-miftah-favicon.png';
import { styWrapper } from './styles';

function LayoutTicket({ children }) {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href={Favicon} />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap" rel="stylesheet" />
      </Helmet>
      <section css={styWrapper}>
        <div className="main-page">{children}</div>
      </section>
    </>
  );
}

LayoutTicket.propTypes = {
  children: node.isRequired,
};

export default LayoutTicket;
