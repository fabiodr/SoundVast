import React from 'react';

import Modal from '../../shared/modal/container';
import SocialLogins from '../login/socialLogins/container';
import LoginForm from './form/container';

const Login = () => (
  <Modal title="Login." id="login">
    <SocialLogins />
    <LoginForm />
  </Modal>
);

export default Login;
