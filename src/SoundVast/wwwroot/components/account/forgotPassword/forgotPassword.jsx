import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Modal from '../../shared/modal/modalContainer';
import FormGroup from '../../shared/form/formGroup';
import Button from '../../shared/button/button';
import InputTextField from '../../shared/fields/inputField/inputTextField';

const ForgotPassword = ({ handleSubmit }) => (
  <Modal title="Reset your password." id="forgotPassword">
    <form onSubmit={handleSubmit} action="">
      <FormGroup>
        <Field name="email" component={InputTextField} type="email" placeholder="Email" />
      </FormGroup>

      <Button>
        Reset
      </Button>
    </form>
  </Modal>
);

ForgotPassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ForgotPassword;
