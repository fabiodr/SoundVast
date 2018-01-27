import React from 'react';
import { AsyncCreatable } from 'react-select';
import PropTypes from 'prop-types';

import ImageOption from '../select/imageOptionContainer';

const AlbumSelectInput = ({
  input,
  options,
  loadAlbums,
  ...props
}) => (
  <AsyncCreatable
    {...props}
    options={options}
    optionComponent={ImageOption}
    placeholder=""
    onChange={value => input.onChange(value)}
    onBlur={() => input.onBlur(input.value)}
    value={input.value}
    loadOptions={loadAlbums}
    autoload={false}
  />
);

AlbumSelectInput.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    value: PropTypes.any,
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  loadAlbums: PropTypes.func.isRequired,
};

export default AlbumSelectInput;
