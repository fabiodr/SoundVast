import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../shared/modal/modalContainer';
import SocialLogins from '../login/socialLogins/socialLoginsContainer';
import RegisterForm from './form/formContainer';

const Register = ({ submit }) => (
  <Modal title="Register." id="register">
    <SocialLogins />
    <RegisterForm onSubmit={submit} />
  </Modal>
);

Register.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default Register;
