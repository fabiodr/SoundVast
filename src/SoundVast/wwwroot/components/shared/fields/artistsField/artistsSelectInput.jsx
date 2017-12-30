import React from 'react';
import { Creatable } from 'react-select';
import PropTypes from 'prop-types';

import ImageOption from '../select/imageOptionContainer';
import ArtistsValue from './artistsValue';

const options = [];

const ArtistsSelectInput = ({
  input,
  ...props
}) => (
  <Creatable
    {...props}
    options={options}
    optionComponent={ImageOption}
    valueComponent={values => (
      values.value.value === input.value[0].value ?
        <ArtistsValue {...values} values={input.value} />
        : null
    )}
    placeholder=""
    multi
    onChange={value => input.onChange(value)}
    onBlur={() => input.onBlur(input.value)}
    value={input.value}
  />
);

ArtistsSelectInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    value: PropTypes.any,
  }).isRequired,
};


export default ArtistsSelectInput;
