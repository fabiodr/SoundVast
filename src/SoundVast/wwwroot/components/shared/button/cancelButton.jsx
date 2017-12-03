import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';

const CancelButton = ({ onClick }) => (
  <Button type="button" onClick={onClick}>
    Cancel
  </Button>
);

CancelButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CancelButton;
