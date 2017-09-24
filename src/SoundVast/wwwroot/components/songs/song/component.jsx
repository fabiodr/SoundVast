import React from 'react';
import PropTypes from 'prop-types';

import styles from './component.less';
import Like from './ratingControl/like/container';
import Dislike from './ratingControl/dislike/container';

const Song = ({ name, artist, id }) => (
  <div>
    <figcaption className={styles.name}>{name}</figcaption>
    <figcaption className={styles.artist}>{artist}</figcaption>
    <Like songId={id} />
    <Dislike songId={id} />
  </div>
);

Song.defaultProps = {
  index: 0,
  id: 0,
  name: null,
  artist: null,
};

Song.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  artist: PropTypes.string,
};

export default Song;
