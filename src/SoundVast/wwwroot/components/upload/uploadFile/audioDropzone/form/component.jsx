import React from 'react';
import PropTypes from 'prop-types';

import FileInformation from './fileInformation/component';
import ValidationErrors from '../../../../shared/form/validation/errors/component';
import SpinnerSubmit from '../../../../shared/form/spinnerSubmit/container';
import CancelButton from '../../../common/cancelButton/component';

const Form = ({ errors: error, ...props }) => (
  <form onSubmit={props.handleSubmit} action="">
    <ValidationErrors errors={props.errors} />

    <FileInformation id={props.id} />

    <SpinnerSubmit formName={props.form}>
      Save
    </SpinnerSubmit>
    <CancelButton remove={props.removeMusicForm} />
  </form>
);

Form.defaultProps = {
  errors: [],
  isSubmitting: false,
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
  removeMusicForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Form;
