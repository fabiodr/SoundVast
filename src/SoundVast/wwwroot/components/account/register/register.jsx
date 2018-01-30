import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import styles from './register.less';
import FormGroup from '../../shared/form/formGroup';
import InputTextField from '../../shared/fields/inputField/inputTextField';
import ModalButton from '../../shared/button/modalButtonContainer';
import Modal from '../../shared/modal/modalContainer';
import SocialLogins from '../login/socialLogins/socialLoginsContainer';
import Button from '../../shared/button/button';

const Register = ({ handleSubmit, loginProviders }) => (
  <Modal title="Register." id="register">
    <SocialLogins loginProviders={loginProviders} />
    <form onSubmit={handleSubmit} action="">

      <FormGroup>
        <Field name="username" component={InputTextField} placeholder="Username" />
        <Field name="email" component={InputTextField} type="email" placeholder="Email" />
        <Field name="password" component={InputTextField} type="password" placeholder="Password" />
        <Field name="confirmPassword" component={InputTextField} type="password" placeholder="Confirm password" />
      </FormGroup>
      <div className={styles.loginLink}>
        Or <ModalButton modalId="login">login</ModalButton> if you already have an account.
      </div>
      <br />

      <Button>Register</Button>
    </form>
  </Modal>
);

Register.propTypes = {
  loginProviders: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Register;
