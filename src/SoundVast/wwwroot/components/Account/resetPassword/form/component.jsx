import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import formStyles from '../../../shared/form/component.less';
import genericStyles from '../../../shared/generic.less';
import AntiForgeryToken from '../../../shared/form/antiForgeryToken/container';
import FormInput from '../../../shared/form/editableField/input/component';
import ValidationErrors from '../../../shared/form/validation/errors/component';

const Form = ({ error: errors, handleSubmit }) => (
  <form onSubmit={handleSubmit} action="">
    <AntiForgeryToken form="resetPassword" />
    <Field name="userId" component="input" type="hidden" />
    <Field name="code" component="input" type="hidden" />
    <ValidationErrors errors={errors} />

    <div className={formStyles.formGroup}>
      <Field name="password" component={FormInput} type="password" placeholder="Password" />
      <Field name="confirmPassword" component={FormInput} type="password" placeholder="Confirm password" />
    </div>

    <button className={genericStyles.button}>
      Reset Password
    </button>
  </form>
);

Form.defaultProps = {
  error: [],
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Form;
