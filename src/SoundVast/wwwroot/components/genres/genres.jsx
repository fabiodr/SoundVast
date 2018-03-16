import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Grid from '../shared/grid/grid';
import Genre from './genreContainer';
import genreType from './genreType';
import styles from './genres.less';
import preferredUrl from '../shared/utilities/preferredUrl';

const Genres = ({ genres, typeUrl }) => (
  <div className={styles.genres}>
    <Helmet>
      <title>Genres | 30+ genres such as pop, rock etc. for the categories you love</title>
      <meta name="description" content="Filter by genre to find only the radio stations that fit your taste in music." />
      <link rel="canonical" href={`${preferredUrl}/genres`} />
    </Helmet>
    {Object.keys(genres).map(key => (
      <div key={key}>
        <div className={styles.genresTitle}>{genreType[key]} genres</div>
        <Grid>
          {genres[key].map(genre => (
            <Genre
              key={genre.id}
              name={genre.name}
              coverImages={genre.coverImages}
              url={`/${typeUrl}`}
            />
          ))}
        </Grid>
      </div>
    ))}
  </div>
);

Genres.propTypes = {
  genres: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        coverImages: PropTypes.arrayOf({
          dimention: PropTypes.string.isRequired,
          imageUrl: PropTypes.string.isRequired,
        }),
      }),
    ).isRequired,
  ).isRequired,
  typeUrl: PropTypes.string.isRequired,
};

export default Genres;
