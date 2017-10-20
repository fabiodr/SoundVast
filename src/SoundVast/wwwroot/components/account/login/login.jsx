import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import ModalLink from '../../shared/modal/link/container';
import formStyles from '../../shared/form/component.less';
import genericStyles from '../../shared/generic.less';
import AntiForgeryToken from '../../shared/form/antiForgeryToken/container';
import FormInput from '../../shared/form/editableField/input/component';
import ValidationErrors from '../../shared/form/validation/errors/component';
import Modal from '../../shared/modal/container';
import SocialLogins from '../login/socialLogins/container';

const Login = ({ error: errors, handleSubmit }) => (
  <Modal title="Login." id="login">
    <SocialLogins />
    <form onSubmit={handleSubmit} action="">
      <AntiForgeryToken form="login" />
      <ValidationErrors errors={errors} />

      <div className={formStyles.formGroup}>
        <Field name="username" component={FormInput} placeholder="Username" />
        <Field name="password" component={FormInput} type="password" placeholder="Password" />
      </div>

      <Field name="rememberMe" component="checkbox" checked />
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
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Login;
