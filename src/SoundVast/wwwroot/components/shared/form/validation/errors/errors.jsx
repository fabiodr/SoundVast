import React from 'react';
import PropTypes from 'prop-types';

import ValidationError from '../error/error';

const Errors = ({ errors }) => (
  <div>
    {errors.map(error => <ValidationError key={error} error={error} />)}
  </div>
);

Errors.propTypes = {
  errors: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Errors;
