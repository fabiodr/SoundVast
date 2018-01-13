import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import styles from './login.less';
import ModalButton from '../../shared/button/modalButtonContainer';
import FormGroup from '../../shared/form/formGroup';
import Input from '../../shared/fields/input/input';
import ValidationErrors from '../../shared/validation/validationErrors';
import Modal from '../../shared/modal/modalContainer';
import SocialLogins from '../login/socialLogins/socialLoginsContainer';
import Button from '../../shared/button/button';

const Login = ({ error: errors, handleSubmit, loginProviders }) => (
  <Modal title="Login." id="login">
    <SocialLogins loginProviders={loginProviders} />
    <form onSubmit={handleSubmit} action="">
      <ValidationErrors errors={errors} />

      <FormGroup>
        <Field name="username" component={Input} placeholder="Username" />
        <Field name="password" component={Input} type="password" placeholder="Password" />
      </FormGroup>

      <label className={styles.rememberMe} htmlFor="rememberMe">Remember login?
        <Field name="rememberMe" id="rememberMe" component={Input} type="checkbox" />
      </label>

      <div className={styles.forgotPasswordLink}>
        <ModalButton modalId="forgotPassword">Forgotten your password?</ModalButton>
      </div>
      <div>
        Or <ModalButton modalId="register">register</ModalButton> if you don&apos;t have an account.
      </div>

      <br />

      <Button>Login</Button>
    </form>
  </Modal>
);

Login.defaultProps = {
  error: [],
};

Login.propTypes = {
  loginProviders: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Login;
