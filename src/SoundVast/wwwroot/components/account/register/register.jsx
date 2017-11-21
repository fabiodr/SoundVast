import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import styles from './register.less';
import FormGroup from '../../shared/form/formGroup';
import Input from '../../shared/fields/input/input';
import ValidationErrors from '../../shared/validation/validationErrors';
import ModalLink from '../../shared/modal/modalLinkContainer';
import Modal from '../../shared/modal/modalContainer';
import SocialLogins from '../login/socialLogins/socialLoginsContainer';
import Button from '../../shared/button/button';

const Register = ({ error: errors, handleSubmit, loginProviders }) => (
  <Modal title="Register." id="register">
    <SocialLogins loginProviders={loginProviders} />
    <form onSubmit={handleSubmit} action="">
      <ValidationErrors errors={errors} />

      <FormGroup>
        <Field name="username" component={Input} placeholder="Username" />
        <Field name="email" component={Input} type="email" placeholder="Email" />
        <Field name="password" component={Input} type="password" placeholder="Password" />
        <Field name="confirmPassword" component={Input} type="password" placeholder="Confirm password" />
      </FormGroup>
      <div className={styles.loginLink}>
        Or <ModalLink modalId="login">login</ModalLink> if you already have an account.
      </div>
      <br />

      <Button>Register</Button>
    </form>
  </Modal>
);

Register.defaultProps = {
  error: [],
};

Register.propTypes = {
  loginProviders: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Register;
