import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Select from '../select/select';

const GenreField = ({ id, genres, label }) => (
  <label htmlFor={`genre_${id}`}>{label}
    <Field name="genreId" id={`genre_${id}`} component={Select}>
      <option value="">None</option>
      {genres.map(genre => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </Field>
  </label>
);

GenreField.defaultProps = {
  label: 'Genre',
  id: 0,
};

GenreField.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  label: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default GenreField;
