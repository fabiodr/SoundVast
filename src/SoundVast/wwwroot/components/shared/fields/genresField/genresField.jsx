import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import GenresSelectInput from './genresSelectInput';

const GenresField = ({ id, genres, ...props }) => {
  const options = genres.map(genre => ({ label: genre.name, value: genre.id }));

  return (
    <label htmlFor={`genres_${id}`}>
      <span>Genres</span>
      <Field
        {...props}
        name="genres"
        id={`genres_${id}`}
        component={GenresSelectInput}
        options={options}
      />
    </label>
  );
};

GenresField.defaultProps = {
  id: 0,
};

GenresField.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default GenresField;
