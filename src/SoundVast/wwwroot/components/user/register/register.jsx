import React from 'react';

import Modal from '../../_partials/modal/modalContainer';
import SocialLogins from '../login/socialLogins/socialLoginsContainer';

const Register = () => (
  <Modal title="Register." id="register">
    <SocialLogins />
  </Modal>
);

export default Register;
