import React from 'react';
import PropTypes from 'prop-types';

const CancelButton = ({ remove }) => (
  <button type="button" onClick={remove}>
    Cancel
  </button>
);

CancelButton.propTypes = {
  remove: PropTypes.func.isRequired,
};

export default CancelButton;
