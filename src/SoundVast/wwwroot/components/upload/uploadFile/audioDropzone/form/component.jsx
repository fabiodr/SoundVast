import React from 'react';
import PropTypes from 'prop-types';

import FileInformation from './fileInformation/component';
import ValidationErrors from '../../../../shared/form/validation/errors/component';
import AntiForgeryToken from '../../../../shared/form/antiForgeryToken/container';
import SpinnerSubmit from '../../../../shared/form/spinnerSubmit/container';
import CancelButton from '../../../common/cancelButton/container';

const Form = ({ errors: error, remove, ...props }) => (
  <form onSubmit={props.handleSubmit} action="">
    <AntiForgeryToken form={props.form} />
    <ValidationErrors errors={props.errors} />

    <FileInformation id={props.id} />

    <SpinnerSubmit formName={props.form}>
      Save
    </SpinnerSubmit>
    <CancelButton remove={remove} id={props.id} />
  </form>
);

Form.defaultProps = {
  errors: [],
  isSubmitting: false,
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Form;
