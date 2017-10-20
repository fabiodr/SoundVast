import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import formStyles from '../../shared/form/component.less';
import genericStyles from '../../shared/generic.less';
import AntiForgeryToken from '../../shared/form/antiForgeryToken/container';
import FormInput from '../../shared/form/editableField/input/component';
import ValidationErrors from '../../shared/form/validation/errors/component';
import ModalLink from '../../shared/modal/link/container';
import Modal from '../../shared/modal/container';
import SocialLogins from '../login/socialLogins/socialLoginsContainer';
import RegisterForm from './form/container';

const Register = ({ error: errors, handleSubmit }) => (
  <Modal title="Register." id="register">
    <SocialLogins />
    <form onSubmit={handleSubmit} action="">
      <AntiForgeryToken form="register" />
      <ValidationErrors errors={errors} />

      <div className={formStyles.formGroup}>
        <Field name="username" component={FormInput} placeholder="Username" />
        <Field name="email" component={FormInput} type="email" placeholder="Email" />
        <Field name="password" component={FormInput} type="password" placeholder="Password" />
        <Field name="confirmPassword" component={FormInput} type="password" placeholder="Confirm password" />
      </div>
      <div>
        Or <ModalLink modalId="login">login</ModalLink> if you already have an account.
      </div>
      <br />

      <button className={genericStyles.button}>
        Register
      </button>
    </form>
  </Modal>
);

Register.defaultProps = {
  error: [],
};

Register.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Register;
