import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import AlbumSelectInput from './albumSelectInput';

const AlbumField = ({ id, albums, ...props }) => {
  const options = albums.map(album => ({
    label: album.name,
    value: album.id,
    imageOptionUrl: album.coverImageUrl,
  }));

  return (
    <label htmlFor={`album_${id}`}>
      <span>Album</span>
      <Field
        {...props}
        name="album"
        id={`album_${id}`}
        component={AlbumSelectInput}
        options={options}
      />
    </label>
  );
};

AlbumField.defaultProps = {
  albums: [],
  id: 0,
};

AlbumField.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    coverImageUrl: PropTypes.string.isRequired,
  })),
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default AlbumField;
