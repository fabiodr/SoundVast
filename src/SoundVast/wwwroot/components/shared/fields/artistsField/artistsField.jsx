import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import ArtistsSelectInput from './artistsSelectInput';

const ArtistsField = ({ id, label, artists, ...props }) => {
  const options = artists.map(artist => ({
    label: artist.name,
    value: artist.id,
    imageOptionUrl: artist.coverImageUrl,
  }));

  return (
    <label htmlFor={`artists_${id}`}>
      <span>{label}</span>
      <Field
        name="artists"
        id={`artists_${id}`}
        component={ArtistsSelectInput}
        options={options}
        {...props}
      />
    </label>
  );
};

ArtistsField.defaultProps = {
  artists: [],
  label: 'Artists',
  id: 0,
};

ArtistsField.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    coverImageUrl: PropTypes.string.isRequired,
  })),
  label: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default ArtistsField;
