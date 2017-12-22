import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Input from '../input/input';

const ArtistField = ({ id, label, ...props }) => (
  <label htmlFor={`artist_${id}`}>{label}
    <Field name="artist" id={`artist_${id}`} component={Input} {...props} />
  </label>
);

ArtistField.defaultProps = {
  label: 'Artist',
  id: 0,
};

ArtistField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default ArtistField;
