import React from 'react';

import Modal from '../../shared/modal/modalContainer';
import SocialLogins from '../login/socialLogins/socialLoginsContainer';
import LoginForm from './form/formContainer';

const Login = () => (
  <Modal title="Login." id="login">
    <SocialLogins />
    <LoginForm />
  </Modal>
);

export default Login;
