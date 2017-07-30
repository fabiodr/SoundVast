import React from 'react';
import PropTypes from 'prop-types';

import styles from './song.less';
import Play from '../../../images/audioControls/play.svg';

const Song = ({ id, name, artist, coverImageUrl, fetchSong }) => (
  <div className={styles.song}>
    <figure>
      <button onClick={() => fetchSong(id)} className={styles.imageContainer}>
        <img alt="" src={coverImageUrl} />
        <Play width={50} height={50} className={styles.play} />
      </button>
      <figcaption className={styles.name}>{name}</figcaption>
      <figcaption className={styles.artist}>{artist}</figcaption>
    </figure>
  </div>
);

Song.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  coverImageUrl: PropTypes.string.isRequired,
  fetchSong: PropTypes.func.isRequired,
};

export default Song;
