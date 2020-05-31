import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Dinda ❤️ Indra Wedding</title>
      </Helmet>
      {children}
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
