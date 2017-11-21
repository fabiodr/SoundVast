import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../shared/button/button';

const CancelButton = ({ remove }) => (
  <Button type="button" onClick={remove}>
    Cancel
  </Button>
);

CancelButton.propTypes = {
  remove: PropTypes.func.isRequired,
};

export default CancelButton;
