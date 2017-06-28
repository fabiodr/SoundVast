import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import formStyles from '../../../shared/form/form.less';
import genericStyles from '../../../shared/generic.less';
import FormInput from '../../../shared/form/elements/input';
import ValidationErrors from '../../../shared/form/validation/errors/errors';

const Form = ({ error: errors, handleSubmit }) => (
  <form onSubmit={handleSubmit} action="">
    <ValidationErrors errors={errors} />

    <div className={formStyles.formGroup}>
      <Field name="name" component={FormInput} />
      <Field name="artist" component={FormInput} />
      {/* TODO: Genre's dropdown */}
    </div>

    <button className={genericStyles.button}>
      Upload
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
