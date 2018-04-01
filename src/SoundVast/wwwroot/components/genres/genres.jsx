import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Grid from '../shared/grid/grid';
import Genre from './genreContainer';
import styles from './genres.less';
import preferredUrl from '../shared/utilities/preferredUrl';

const Genres = ({ genres }) => (
  <div className={styles.genres}>
    <Helmet>
      <title>Genres | 30+ genres such as pop, rock etc. for the categories you love</title>
      <meta name="description" content="Filter by genre to find only the radio stations that fit your taste in music." />
      <link rel="canonical" href={`${preferredUrl}/genres`} />
    </Helmet>
    <Grid>
      {genres.map(genre => (
        <Genre
          key={genre.id}
          name={genre.name}
          coverImageUrl={genre.coverImageUrl}
          url="radios"
        />
      ))}
    </Grid>
  </div>
);

Genres.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      coverImageUrl: PropTypes.string,
    }),
  ).isRequired,
};

export default Genres;
