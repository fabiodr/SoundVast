import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import FormGroup from '../shared/form/formGroup';
import Input from '../shared/fields/input/input';
import ValidationErrors from '../shared/validation/validationErrors';
import Modal from '../shared/modal/modalContainer';
import SpinnerSubmit from '../shared/form/spinnerSubmit/spinnerSubmitContainer';

const FlagModal = ({ error: errors, handleSubmit, form }) => (
  <Modal title="Flag." id="flag">
    <form onSubmit={handleSubmit} action="">
      <ValidationErrors errors={errors} />

      <FormGroup>
        <Field name="flag" component={Input} placeholder="Flag" />
      </FormGroup>

      <SpinnerSubmit formName={form}>Flag</SpinnerSubmit>
    </form>
  </Modal>
);

FlagModal.defaultProps = {
  error: [],
};

FlagModal.propTypes = {
  form: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FlagModal;
