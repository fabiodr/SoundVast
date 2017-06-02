import React from 'react';

import Modal from '../../shared/modal/modalContainer';
import SocialLogins from '../login/socialLogins/socialLoginsContainer';

const Register = () => (
  <Modal title="Register." id="register">
    <SocialLogins />
  </Modal>
);

export default Register;
