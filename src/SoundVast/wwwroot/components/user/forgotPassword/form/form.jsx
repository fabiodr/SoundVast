import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import formStyles from '../../../shared/form/form.less';
import genericStyles from '../../../shared/generic.less';
import AntiForgeryToken from '../../../shared/form/antiForgeryToken/antiForgeryTokenContainer';
import FormInput from '../../../shared/form/elements/input';

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} action="">
    <AntiForgeryToken form="forgotPassword" />

    <div className={formStyles.formGroup}>
      <Field name="email" component={FormInput} type="email" placeholder="Email" />
    </div>

    <button className={genericStyles.button}>
      Reset Password
    </button>
  </form>
);


Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
