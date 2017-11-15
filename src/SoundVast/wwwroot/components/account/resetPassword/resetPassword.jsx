import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import genericStyles from '../../shared/generic.less';
import FormGroup from '../../shared/form/formGroup';
import Input from '../../shared/fields/input/input';
import ValidationErrors from '../../shared/validation/validationErrors';

const ResetPassword = ({ error: errors, handleSubmit }) => (
  <form onSubmit={handleSubmit} action="">
    <ValidationErrors errors={errors} />

    <FormGroup>
      <Field name="password" component={Input} type="password" placeholder="Password" />
      <Field name="confirmPassword" component={Input} type="password" placeholder="Confirm password" />
    </FormGroup>

    <button className={genericStyles.button}>
      Reset Password
    </button>
  </form>
);

ResetPassword.defaultProps = {
  error: [],
};

ResetPassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default ResetPassword;
