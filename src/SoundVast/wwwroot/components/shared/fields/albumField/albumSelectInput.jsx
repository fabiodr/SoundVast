import React from 'react';
import { AsyncCreatable } from 'react-select';
import PropTypes from 'prop-types';

import ImageOption from '../select/imageOptionContainer';
import ValidationField from '../validationField/validationField';

const AlbumSelectInput = ({
  input,
  options,
  loadAlbums,
  meta: { touched, error = [] },
  ...props
}) => (
  <ValidationField touched={touched} error={error}>
    <AsyncCreatable
      {...input}
      {...props}
      options={options}
      optionComponent={ImageOption}
      placeholder=""
      loadOptions={loadAlbums}
      autoload={false}
    />
  </ValidationField>
);

AlbumSelectInput.propTypes = {
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
  loadAlbums: PropTypes.func.isRequired,
};

export default AlbumSelectInput;
