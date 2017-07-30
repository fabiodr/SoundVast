/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import EditableField from '../component';

const Input = ({ input, meta: { touched, error = [] }, ...props }) => (
  <EditableField touched={touched} error={error}>
    <input {...input} {...props} />
  </EditableField>
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
