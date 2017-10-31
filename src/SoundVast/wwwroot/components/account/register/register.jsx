import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import genericStyles from '../../shared/generic.less';
import AntiForgeryToken from '../../shared/form/antiForgeryToken/antiForgeryTokenContainer';
import FormGroup from '../../shared/form/formGroup';
import Input from '../../shared/fields/input/input';
import ValidationErrors from '../../shared/validation/validationErrors';
import ModalLink from '../../shared/modal/modalLinkContainer';
import Modal from '../../shared/modal/modalContainer';
import SocialLogins from '../login/socialLogins/socialLoginsContainer';

const Register = ({ error: errors, handleSubmit }) => (
  <Modal title="Register." id="register">
    <SocialLogins />
    <form onSubmit={handleSubmit} action="">
      <AntiForgeryToken form="register" />
      <ValidationErrors errors={errors} />

      <FormGroup>
        <Field name="username" component={Input} placeholder="Username" />
        <Field name="email" component={Input} type="email" placeholder="Email" />
        <Field name="password" component={Input} type="password" placeholder="Password" />
        <Field name="confirmPassword" component={Input} type="password" placeholder="Confirm password" />
      </FormGroup>
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
