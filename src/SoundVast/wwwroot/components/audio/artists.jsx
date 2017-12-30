import React from 'react';
import PropTypes from 'prop-types';

import styles from './artists.less';
import convertArtistsToString from '../shared/utilities/convertArtistsToString';

const Artists = ({ artists }) => (
  artists.length ? (
    <div className={styles.artists}>
      {convertArtistsToString(artists)}
    </div>
  ) : null
);

Artists.defaultProps = {
  artists: [],
};

Artists.propTypes = {
  artists: PropTypes.arrayOf([
    PropTypes.string.isRequired,
  ]),
};

export default Artists;
