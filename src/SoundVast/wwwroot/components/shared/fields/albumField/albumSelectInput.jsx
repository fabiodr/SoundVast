import React from 'react';
import { Creatable } from 'react-select';
import PropTypes from 'prop-types';

import ImageOption from '../select/imageOptionContainer';
import ImageValue from '../select/imageValue';

const options = [];

const AlbumSelectInput = ({
  input,
  ...props
}) => (
  <Creatable
    {...props}
    options={options}
    optionComponent={ImageOption}
    valueComponent={ImageValue}
    placeholder=""
    onChange={value => input.onChange(value)}
    onBlur={() => input.onBlur(input.value)}
    value={input.value}
  />
);

AlbumSelectInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    value: PropTypes.any,
  }).isRequired,
};

export default AlbumSelectInput;