import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Modal from '../../shared/modal/modalContainer';
import formStyles from '../../shared/form/form.less';
import genericStyles from '../../shared/generic.less';
import AntiForgeryToken from '../../shared/form/antiForgeryToken/antiForgeryTokenContainer';
import FormInput from '../../shared/form/editableField/input/input';
import ValidationErrors from '../../shared/form/validation/errors/component';

const ForgotPassword = ({ error: errors, handleSubmit }) => (
  <Modal title="Reset your password." id="forgotPassword">
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
  </Modal>
);

ForgotPassword.defaultProps = {
  error: [],
};

ForgotPassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default ForgotPassword;
