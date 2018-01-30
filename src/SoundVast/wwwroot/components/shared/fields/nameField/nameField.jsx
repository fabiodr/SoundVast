import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import InputTextField from '../inputField/inputTextField';

const NameField = ({ id, ...props }) => (
  <label htmlFor={`name_${id}`}>
    <span>Name *</span>
    <Field
      {...props}
      name="name"
      id={`name_${id}`}
      component={InputTextField}
    />
  </label>
);

NameField.defaultProps = {
  id: 0,
};

NameField.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default NameField;
