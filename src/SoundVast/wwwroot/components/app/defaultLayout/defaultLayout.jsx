import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Header from '../../header/header';
import User from '../../user/userContainer';

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    render={matchProps => (
      <div>
        <User />
        <Header />
        <Component {...matchProps} />
      </div>
    )}
    {...rest}
  />
);

DefaultLayout.propTypes = {
  component: PropTypes.func.isRequired,
};

export default DefaultLayout;
