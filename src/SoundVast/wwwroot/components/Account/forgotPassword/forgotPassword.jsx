import React from 'react';

import Modal from '../../shared/modal/container';
import ForgotPasswordForm from './form/container';

const ForgotPassword = () => (
  <Modal title="Reset your password." id="forgotPassword">
    <ForgotPasswordForm />
  </Modal>
);

export default ForgotPassword;
