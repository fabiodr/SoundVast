import React from 'react';

import Register from './register/component';
import Login from './login/component';
import ForgotPassword from './forgotPassword/component';

const Account = () => (
  <div>
    <Register />
    <Login />
    <ForgotPassword />
  </div>
);

export default Account;
