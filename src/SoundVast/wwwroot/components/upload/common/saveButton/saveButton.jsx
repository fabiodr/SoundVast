import React from 'react';
import PropTypes from 'prop-types';

import SpinnerSubmit from '../../../shared/form/spinnerSubmit/spinnerSubmitContainer';

const SaveButton = ({ formName }) => (
  <SpinnerSubmit formName={formName}>
    Save
  </SpinnerSubmit>
);

SaveButton.propTypes = {
  formName: PropTypes.string.isRequired,
};

export default SaveButton;
