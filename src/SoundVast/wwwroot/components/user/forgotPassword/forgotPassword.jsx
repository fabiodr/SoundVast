import React from 'react';

import Modal from '../../shared/modal/modalContainer';
import ForgotPasswordForm from './form/formContainer';

const ForgotPassword = () => (
  <Modal title="Reset your password." id="forgotPassword">
    <ForgotPasswordForm />
  </Modal>
);

export default ForgotPassword;
