import React from 'react';
import PropTypes from 'prop-types';
import { Creatable } from 'react-select';

const CreatableSelectInput = ({
  input,
  ...props
}) => (
  <Creatable
    {...props}
    onChange={value => input.onChange(value)}
    onBlur={() => input.onBlur(input.value)}
    value={input.value}
  />
);

CreatableSelectInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    value: PropTypes.any,
  }).isRequired,
};

export default CreatableSelectInput;
