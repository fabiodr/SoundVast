import React from 'react';
import PropTypes from 'prop-types';

import LiveStreamInformation from './liveStreamInformation';
import ValidationErrors from '../../shared/validation/validationErrors';
import Button from '../../shared/button/button';
import SpinnerSubmit from '../../shared/form/spinnerSubmit/spinnerSubmitContainer';

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

    <SpinnerSubmit formName={form}>Save</SpinnerSubmit>
    <Button onClick={removeLiveStreamForm}>Cancel</Button>
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
