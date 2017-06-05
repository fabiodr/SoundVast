import React from 'react';

import Modal from '../../shared/modal/modalContainer';
import SocialLogins from '../login/socialLogins/socialLoginsContainer';
import RegisterForm from './form/formContainer';

const Register = () => (
  <Modal title="Register." id="register">
    <SocialLogins />
    <RegisterForm />
  </Modal>
);

export default Register;
