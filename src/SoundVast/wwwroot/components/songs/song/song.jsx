import React from 'react';
import PropTypes from 'prop-types';

import styles from './song.less';
import Like from '../../rating/like/likeContainer';
import Dislike from '../../rating/dislike/dislikeContainer';

const Song = ({ name, artist, id }) => (
  <div>
    <Like id={id} />
    <Dislike id={id} />
    <figcaption className={styles.name}>{name}</figcaption>
    <figcaption className={styles.artist}>{artist}</figcaption>
  </div>
);

Song.defaultProps = {
  id: null,
  name: null,
  artist: null,
};

Song.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  artist: PropTypes.string,
};

export default Song;
