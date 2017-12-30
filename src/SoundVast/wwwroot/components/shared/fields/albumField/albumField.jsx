import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import AlbumSelectInput from './albumSelectInput';

const AlbumField = ({ id, label, ...props }) => (
  <label htmlFor={`album_${id}`}>{label}
    <Field name="album" id={`album_${id}`} component={AlbumSelectInput} {...props} />
  </label>
);

AlbumField.defaultProps = {
  label: 'Album',
  id: 0,
};

AlbumField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default AlbumField;
