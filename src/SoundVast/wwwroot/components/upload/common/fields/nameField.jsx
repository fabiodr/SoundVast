import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import FormInput from '../../../shared/form/editableField/input/input';

const NameField = ({ id, label }) => (
  <label htmlFor={`name_${id}`}>{label} *
    <Field name="name" id={`name_${id}`} component={FormInput} />
  </label>
);

NameField.defaultProps = {
  label: 'Name',
};

NameField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default NameField;
