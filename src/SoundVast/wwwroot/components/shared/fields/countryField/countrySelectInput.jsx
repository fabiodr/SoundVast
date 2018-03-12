import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import ValidationField from '../validationField/validationField';

const CountrySelectInput = ({
  input,
  options,
  meta: { touched, error = [] },
  ...props
}) => (
  <ValidationField touched={touched} error={error}>
    <Select
      {...input}
      {...props}
      options={options}
      placeholder=""
      onBlur={() => input.onBlur(input.value)}
    />
  </ValidationField>
);

CountrySelectInput.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }).isRequired,
};


export default CountrySelectInput;
