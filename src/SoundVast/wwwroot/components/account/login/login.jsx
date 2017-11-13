import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import ModalLink from '../../shared/modal/modalLinkContainer';
import genericStyles from '../../shared/generic.less';
import FormGroup from '../../shared/form/formGroup';
import Input from '../../shared/fields/input/input';
import ValidationErrors from '../../shared/validation/validationErrors';
import Modal from '../../shared/modal/modalContainer';
import SocialLogins from '../login/socialLogins/socialLoginsContainer';

const Login = ({ error: errors, handleSubmit, loginProviders }) => (
  <Modal title="Login." id="login">
    <SocialLogins loginProviders={loginProviders} />
    <form onSubmit={handleSubmit} action="">
      <ValidationErrors errors={errors} />

      <FormGroup>
        <Field name="username" component={Input} placeholder="Username" />
        <Field name="password" component={Input} type="password" placeholder="Password" />
      </FormGroup>

      <Field name="rememberMe" component={Input} type="checkbox" />
      <div>
        Or <ModalLink modalId="register">register</ModalLink> if you don&apos;t have an account.
      </div>
      <div>
        <ModalLink modalId="forgotPassword">Forgotten your password?</ModalLink>
      </div>
      <br />

      <button className={genericStyles.button}>
        Login
      </button>
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
