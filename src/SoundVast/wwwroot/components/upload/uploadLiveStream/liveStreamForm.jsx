import React from 'react';
import PropTypes from 'prop-types';

import LiveStreamInformation from './liveStreamInformation';
import ValidationErrors from '../../shared/validation/validationErrors';
import CancelButton from '../common/cancelButton/cancelButton';
import SaveButton from '../common/saveButton/saveButton';

const Form = ({
  handleSubmit,
  errors,
  id,
  genres,
  form,
  removeLiveStreamForm,
}) => (
  <form onSubmit={handleSubmit} action="">
    <ValidationErrors errors={errors} />

    <LiveStreamInformation id={id} genres={genres} />

    <SaveButton formName={form} />
    <CancelButton remove={removeLiveStreamForm} />
  </form>
);

Form.defaultProps = {
  errors: [],
};

Form.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
  removeLiveStreamForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Form;
