import React from 'react';
import PropTypes from 'prop-types';

import Register from './register/registerContainer';
import Login from './login/loginContainer';
import ForgotPassword from './forgotPassword/forgotPasswordContainer';

const Account = ({ loginProviders }) => (
  <div>
    <Register loginProviders={loginProviders} />
    <Login loginProviders={loginProviders} />
    <ForgotPassword />
  </div>
);

Account.propTypes = {
  loginProviders: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Account;
