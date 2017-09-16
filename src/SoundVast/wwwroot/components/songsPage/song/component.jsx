import React from 'react';
import PropTypes from 'prop-types';

import styles from './component.less';
import PlayIcon from '../../../images/audioControls/play.svg';

const Song = ({ name, artist, coverImageUrl, songPlayOnClick }) => (
  <div className={styles.song}>
    <figure>
      <button onClick={songPlayOnClick} className={styles.imageContainer}>
        <img alt="" src={coverImageUrl} />
        <PlayIcon width={50} height={50} className={styles.play} />
      </button>
      <figcaption className={styles.name}>{name}</figcaption>
      <figcaption className={styles.artist}>{artist}</figcaption>
    </figure>
  </div>
);

Song.propTypes = {
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  coverImageUrl: PropTypes.string.isRequired,
  songPlayOnClick: PropTypes.func.isRequired,
};

export default Song;
