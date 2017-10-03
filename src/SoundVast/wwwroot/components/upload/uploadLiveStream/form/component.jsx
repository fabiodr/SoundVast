import React from 'react';
import PropTypes from 'prop-types';

import LiveStreamInformation from './liveStreamInformation/component';
import ValidationErrors from '../../../shared/form/validation/errors/component';
import AntiForgeryToken from '../../../shared/form/antiForgeryToken/container';
import CancelButton from '../../common/cancelButton/container';

const Form = ({ errors: error, remove, ...props }) => (
  <form onSubmit={props.handleSubmit} action="">
    <AntiForgeryToken form={props.form} />
    <ValidationErrors errors={props.errors} />

    <LiveStreamInformation id={props.id} />

    <button>
      Save
    </button>
    <CancelButton remove={remove} index={props.index} />
  </form>
);

Form.defaultProps = {
  errors: [],
  isSubmitting: false,
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  form: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Form;
