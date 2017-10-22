import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { compose, withPropsOnChange, setPropTypes, defaultProps } from 'recompose';
import genreTypeNames from '../../../genre/genreTypeNames';

import FormSelect from '../../../shared/form/editableField/select/select';

const GenreField = ({ id, genres, label }) => (
  <label htmlFor={`genre_${id}`}>{label}
    <Field name="genreId" id={`genre_${id}`} component={FormSelect}>
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
};

GenreField.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
};

const enhance = compose(
  defaultProps({
    type: null,
  }),
  setPropTypes({
    type: PropTypes.oneOf(Object.keys(genreTypeNames).map(key => genreTypeNames[key])),
  }),
  withPropsOnChange(
    ['type', 'genres'],
    ({ type, genres }) => ({
      genres: type !== null ? genres.filter(genre => genre.type === type) : genres,
    }),
  ),
);

export default enhance(GenreField);
