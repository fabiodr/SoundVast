import React from 'react';
import PropTypes from 'prop-types';
import { AsyncCreatable } from 'react-select';

import ImageOption from '../select/imageOptionContainer';
import ArtistsValue from './artistsValue';
import ValidationField from '../validationField/validationField';

const ArtistsSelectInput = ({
  input,
  options,
  loadArtists,
  meta: { touched, error = [] },
  ...props
}) => (
  <ValidationField touched={touched} error={error}>
    <AsyncCreatable
      {...input}
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
      loadOptions={loadArtists}
      autoload={false}
    />
  </ValidationField>
);

ArtistsSelectInput.propTypes = {
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
  loadArtists: PropTypes.func.isRequired,
};


export default ArtistsSelectInput;
