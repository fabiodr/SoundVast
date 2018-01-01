import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const GenresSelectInput = ({
  input,
  options,
  ...props
}) => (
  <Select
    {...props}
    options={options}
    placeholder=""
    multi
    onChange={value => input.onChange(value)}
    onBlur={() => input.onBlur(input.value)}
    value={input.value}
  />
);

GenresSelectInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    value: PropTypes.any,
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};


export default GenresSelectInput;
