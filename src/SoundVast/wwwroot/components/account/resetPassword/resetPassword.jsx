import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import FormGroup from '../../shared/form/formGroup';
import Input from '../../shared/fields/inputField/inputTextField';

const ResetPassword = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} action="">
    <FormGroup>
      <Field name="password" component={Input} type="password" placeholder="Password" />
      <Field name="confirmPassword" component={Input} type="password" placeholder="Confirm password" />
    </FormGroup>

    <button>
      Reset Password
    </button>
  </form>
);

ResetPassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ResetPassword;
