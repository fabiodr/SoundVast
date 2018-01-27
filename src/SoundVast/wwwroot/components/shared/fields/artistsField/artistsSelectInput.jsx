import React from 'react';
import PropTypes from 'prop-types';
import { AsyncCreatable } from 'react-select';

import ImageOption from '../select/imageOptionContainer';
import ArtistsValue from './artistsValue';

const ArtistsSelectInput = ({
  input,
  options,
  loadArtists,
  ...props
}) => (
  <AsyncCreatable
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
    loadOptions={loadArtists}
    autoload={false}
  />
);

ArtistsSelectInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    value: PropTypes.any,
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  loadArtists: PropTypes.func.isRequired,
};


export default ArtistsSelectInput;
