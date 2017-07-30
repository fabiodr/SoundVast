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
    <AntiForgeryToken form="forgotPassword" />
    <ValidationErrors errors={errors} />

    <div className={formStyles.formGroup}>
      <Field name="email" component={FormInput} type="email" placeholder="Email" />
    </div>

    <button className={genericStyles.button}>
      Submit
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
