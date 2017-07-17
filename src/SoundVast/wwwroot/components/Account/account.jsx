import React from 'react';

import Register from './register/register';
import Login from './login/login';
import ForgotPassword from './forgotPassword/forgotPassword';

const Account = () => (
  <div>
    <Register />
    <Login />
    <ForgotPassword />
  </div>
);

export default Account;
