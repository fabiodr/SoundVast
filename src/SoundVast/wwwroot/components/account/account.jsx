import React from 'react';

import Register from './register/registerContainer';
import Login from './login/loginContainer';
import ForgotPassword from './forgotPassword/forgotPasswordContainer';

const Account = () => (
  <div>
    <Register />
    <Login />
    <ForgotPassword />
  </div>
);

export default Account;
