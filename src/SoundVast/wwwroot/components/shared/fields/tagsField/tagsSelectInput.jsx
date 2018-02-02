import React from 'react';
import PropTypes from 'prop-types';
import { Creatable } from 'react-select';

import ValidationField from '../validationField/validationField';

const TagsSelectInput = ({
  input,
  meta: { touched, error = [] },
  ...props
}) => (
  <ValidationField touched={touched} error={error}>
    <Creatable
      {...input}
      {...props}
      placeholder=""
      multi
      options={[]}
      onBlur={() => input.onBlur(input.value)}
    />
  </ValidationField>
);

TagsSelectInput.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.any,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }).isRequired,
};


export default TagsSelectInput;
