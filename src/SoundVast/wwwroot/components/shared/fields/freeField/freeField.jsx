import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import InputCheckboxField from '../inputField/inputCheckboxField';

const FreeField = ({ id, ...props }) => (
  <Field
    {...props}
    component={InputCheckboxField}
    name="free"
    id={`free_${id}`}
    label="Allow free downloads?"
  />
);

FreeField.defaultProps = {
  id: 0,
};

FreeField.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default FreeField;
