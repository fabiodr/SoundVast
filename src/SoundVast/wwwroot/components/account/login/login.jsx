import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import styles from './login.less';
import ModalButton from '../../shared/button/modalButtonContainer';
import FormGroup from '../../shared/form/formGroup';
import InputTextField from '../../shared/fields/inputField/inputTextField';
import InputCheckboxField from '../../shared/fields/inputField/inputCheckboxField';
import Modal from '../../shared/modal/modalContainer';
import SocialLogins from '../login/socialLogins/socialLoginsContainer';
import Button from '../../shared/button/button';

const Login = ({ handleSubmit, loginProviders }) => (
  <Modal title="Login." id="login">
    <SocialLogins loginProviders={loginProviders} />
    <form onSubmit={handleSubmit} action="">
      <FormGroup>
        <Field name="username" component={InputTextField} placeholder="Username" />
        <Field name="password" component={InputTextField} type="password" placeholder="Password" />
      </FormGroup>

      <Field
        name="rememberMe"
        id="rememberMe"
        component={InputCheckboxField}
        type="checkbox"
        label="Remember login?"
      />

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

Login.propTypes = {
  loginProviders: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Login;
