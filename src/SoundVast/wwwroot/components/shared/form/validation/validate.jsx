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
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
};

export default Validate;
