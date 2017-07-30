import React from 'react';

import Modal from '../../shared/modal/container';
import SocialLogins from '../login/socialLogins/container';
import RegisterForm from './form/container';

const Register = () => (
  <Modal title="Register." id="register">
    <SocialLogins />
    <RegisterForm />
  </Modal>
);

export default Register;
