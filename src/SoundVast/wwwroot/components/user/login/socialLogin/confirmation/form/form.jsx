import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import AntiForgeryToken from '../../../../../shared/form/antiForgeryToken/antiForgeryTokenContainer';
import FormInput from '../../../../../shared/form/elements/input';
import genericStyles from '../../../../../shared/generic.less';

const Form = ({ error, handleSubmit, loginProvider }) => (
  <form onSubmit={handleSubmit} action="" method="post">
    <AntiForgeryToken form="socialLoginConfirmation" />

    <h4>Association Form</h4>

    <hr />
    {error}

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
  error: null,
};

Form.propTypes = {
  loginProvider: PropTypes.string.isRequired,
  error: PropTypes.arrayOf(PropTypes.string.isRequired),
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
