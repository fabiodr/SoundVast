import React from 'react';
import PropTypes from 'prop-types';

import LiveStreamInformation from './liveStreamInformation';
import Button from '../../shared/button/button';
import SpinnerSubmit from '../../shared/form/spinnerSubmit/spinnerSubmitContainer';

const Form = ({
  handleSubmit,
  id,
  genres,
  form,
  removeLiveStreamForm,
}) => (
  <form onSubmit={handleSubmit} action="">
    <LiveStreamInformation id={id} genres={genres} />

    <SpinnerSubmit formName={form}>Save</SpinnerSubmit>
    <Button onClick={removeLiveStreamForm}>Cancel</Button>
  </form>
);

Form.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
  removeLiveStreamForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
