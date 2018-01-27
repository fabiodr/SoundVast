import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import AlbumSelectInput from './albumSelectInput';

const AlbumField = ({ id, label, albums, ...props }) => {
  const options = albums.map(album => ({
    label: album.name,
    value: album.id,
    imageOptionUrl: album.coverImageUrl,
  }));

  return (
    <label htmlFor={`album_${id}`}>{label}
      <Field
        name="album"
        id={`album_${id}`}
        component={AlbumSelectInput}
        options={options}
        {...props}
      />
    </label>
  );
};

AlbumField.defaultProps = {
  albums: [],
  label: 'Album',
  id: 0,
};

AlbumField.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({
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

export default AlbumField;
