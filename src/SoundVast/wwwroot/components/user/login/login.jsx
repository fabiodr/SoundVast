import React from 'react';

import Modal from '../../shared/modal/modalContainer';
import SocialLogins from '../login/socialLogins/socialLoginsContainer';
import LoginSuccessMessage from './successMessage/successMessage';
import LoginForm from './form/formContainer';

const Login = () => (
  <div>
    <Modal title="Login." id="login">
      <SocialLogins />
      <LoginForm />
    </Modal>
    <LoginSuccessMessage />
  </div>
);

export default Login;
