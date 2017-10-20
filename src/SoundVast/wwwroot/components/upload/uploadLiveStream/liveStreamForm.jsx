import React from 'react';
import PropTypes from 'prop-types';

import LiveStreamInformation from './liveStreamInformation';
import ValidationErrors from '../../shared/form/validation/errors/component';
import AntiForgeryToken from '../../shared/form/antiForgeryToken/antiForgeryToken';
import SpinnerSubmit from '../../shared/form/spinnerSubmit/spinnerSubmitContainer';
import CancelButton from '../common/cancelButton/cancelButton';

const Form = ({ errors: error, ...props }) => (
  <form onSubmit={props.handleSubmit} action="">
    <AntiForgeryToken form={props.form} />
    <ValidationErrors errors={props.errors} />

    <LiveStreamInformation id={props.id} />

    <SpinnerSubmit formName={props.form}>
      Save
    </SpinnerSubmit>
    <CancelButton remove={props.removeLiveStreamForm} />
  </form>
);

Form.defaultProps = {
  errors: [],
  isSubmitting: false,
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
  removeLiveStreamForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Form;
