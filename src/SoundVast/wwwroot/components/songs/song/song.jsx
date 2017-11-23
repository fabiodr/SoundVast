import React from 'react';
import PropTypes from 'prop-types';

import styles from './song.less';
import Like from '../../rating/like/likeContainer';
import Dislike from '../../rating/dislike/dislikeContainer';
import GridCell from '../../shared/grid/gridCell';
import Play from '../../audio/playContainer';

const Song = ({ coverImageUrl, likes, dislikes, name, artist, audioId }) => (
  <GridCell>
    <Play id={audioId}>
      <img alt="" src={coverImageUrl} className={styles.coverImage} />
    </Play>
    <div className={styles.name}>{name}</div>
    <div className={styles.artist}>{artist}</div>
    <div className={styles.rating}>
      <span>percent</span>
      <Like className={styles.like} audioId={audioId} />
      <Dislike className={styles.dislike} audioId={audioId} />
    </div>
  </GridCell>
);

Song.propTypes = {
  coverImageUrl: PropTypes.string.isRequired,
  audioId: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

export default Song;
