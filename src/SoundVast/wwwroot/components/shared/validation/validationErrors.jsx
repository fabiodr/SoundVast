import React from 'react';
import PropTypes from 'prop-types';

import ValidationError from './validationError';

const Errors = ({ errors, ...props }) => (
  <div>
    {errors.map(error => <ValidationError key={error} error={error} />)}
  </div>
);

Errors.defaultProps = {
  errors: [],
};

Errors.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.string,
  ),
};

export default Errors;
