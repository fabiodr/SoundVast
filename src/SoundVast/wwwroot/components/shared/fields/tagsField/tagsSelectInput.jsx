import React from 'react';
import PropTypes from 'prop-types';
import { AsyncCreatable } from 'react-select';

import ValidationField from '../validationField/validationField';

const ArtistsSelectInput = ({
  input,
  options,
  loadTags,
  meta: { touched, error = [] },
  ...props
}) => (
  <ValidationField touched={touched} error={error}>
    <AsyncCreatable
      {...input}
      {...props}
      options={options}
      placeholder=""
      multi
      loadOptions={loadTags}
      onBlur={() => input.onBlur(input.value)}
      autoload={false}
    />
  </ValidationField>
);

ArtistsSelectInput.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
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
  loadTags: PropTypes.func.isRequired,
};


export default ArtistsSelectInput;
