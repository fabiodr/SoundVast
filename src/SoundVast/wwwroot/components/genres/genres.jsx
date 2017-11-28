import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../shared/grid/grid';
import Genre from './genre';

const Genres = ({ genres, type, typeUrl }) => (
  <Grid>
    {genres.filter(x => x.type.toLowerCase() === type.toLowerCase()).map(genre => (
      <Genre
        key={genre.id}
        name={genre.name}
        coverImageUrl={genre.coverImageUrl}
        url={`/${typeUrl}/${genre.name}`}
      />
    ))}
  </Grid>
);

Genres.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      coverImageUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
  type: PropTypes.string.isRequired,
  typeUrl: PropTypes.string.isRequired,
};

export default Genres;
