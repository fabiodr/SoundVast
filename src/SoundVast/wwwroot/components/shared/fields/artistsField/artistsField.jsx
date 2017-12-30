import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import ArtistsSelectInput from './artistsSelectInput';

const ArtistsField = ({ id, label, ...props }) => (
  <label htmlFor={`artists_${id}`}>{label}
    <Field name="artists" id={`artists_${id}`} component={ArtistsSelectInput} {...props} />
  </label>
);

ArtistsField.defaultProps = {
  label: 'Artists',
  id: 0,
};

ArtistsField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default ArtistsField;
