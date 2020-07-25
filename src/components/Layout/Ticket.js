import * as React from 'react';
import { node } from 'prop-types';
import { Helmet } from 'react-helmet';

import { styWrapper } from './styles';

function LayoutTicket({ children }) {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
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
