/* eslint-disable react/forbid-prop-types*/
import React from 'react';
import PropTypes from 'prop-types';

import Validate from '../validation/validate';

const Input = ({ input, meta: { touched, error }, ...props }) => (
  <div>
    <input {...input} {...props} />
    <Validate touched={touched} error={error} />
  </div>
);

Input.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
  }).isRequired,
};

export default Input;
