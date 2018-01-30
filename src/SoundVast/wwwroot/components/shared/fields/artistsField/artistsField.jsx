import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import ArtistsSelectInput from './artistsSelectInput';

const ArtistsField = ({ id, artists, ...props }) => {
  const options = artists.map(artist => ({
    label: artist.name,
    value: artist.id,
    imageOptionUrl: artist.coverImageUrl,
  }));

  return (
    <label htmlFor={`artists_${id}`}>
      <span>Artists</span>
      <Field
        {...props}
        name="artists"
        id={`artists_${id}`}
        component={ArtistsSelectInput}
        options={options}
        normalize={value => (value === '' ? undefined : value)}
      />
    </label>
  );
};

ArtistsField.defaultProps = {
  artists: [],
  id: 0,
};

ArtistsField.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    coverImageUrl: PropTypes.string.isRequired,
  })),
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default ArtistsField;
