import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import AntiForgeryToken from '../../../shared/form/antiForgeryToken/container';
import FormInput from '../../../shared/form/editableField/input/component';
import genericStyles from '../../../shared/generic.less';
import ValidationErrors from '../../../shared/form/validation/errors/component';

const Form = ({ error: errors, handleSubmit, loginProvider }) => (
  <form onSubmit={handleSubmit} action="" method="post">
    <AntiForgeryToken form="socialLoginConfirmation" />
    <ValidationErrors errors={errors} />

    <h4>Association Form</h4>

    <hr />

    <p className="text-info">
      You&apos;ve successfully authenticated with {loginProvider}.
        Please enter an email address for this site below and click the Register button to finish
        logging in.
    </p>
    <div className="form-group">
      <Field name="email" component={FormInput} type="email" placeholder="Email" />
    </div>
    <button className={genericStyles.button}>
      Register
    </button>
  </form>
);

Form.defaultProps = {
  error: [],
};

Form.propTypes = {
  loginProvider: PropTypes.string.isRequired,
  error: PropTypes.arrayOf(PropTypes.string.isRequired),
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
