import React from 'react';
import PropTypes from 'prop-types';

const Validate = ({ touched, error }) => (
  <span>
    {touched && error}
  </span>
);

Validate.defaultProps = {
  error: null,
};

Validate.propTypes = {
  touched: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default Validate;
