import React from 'react';
import PropTypes from 'prop-types';

import styles from './song.less';
import Like from '../../rating/like/likeContainer';
import Dislike from '../../rating/dislike/dislikeContainer';

const Song = ({ name, artist, audioId }) => (
  <div>
    <Like audioId={audioId} />
    <Dislike audioId={audioId} />
    <figcaption className={styles.name}>{name}</figcaption>
    <figcaption className={styles.artist}>{artist}</figcaption>
  </div>
);

Song.defaultProps = {
  audioId: null,
  name: null,
  artist: null,
};

Song.propTypes = {
  audioId: PropTypes.number,
  name: PropTypes.string,
  artist: PropTypes.string,
};

export default Song;
