import React from 'react';
import PropTypes from 'prop-types';

import styles from './audio.less';
import Play from '../../../images/audioControls/play.svg';

const Audio = ({ name, artist, coverImageUrl }) => (
  <div className={styles.audio}>
    <figure>
      <div className={styles.imageContainer}>
        <button>
          <img alt="" src={coverImageUrl} />
          <Play width={50} height={50} className={styles.play} />
        </button>
      </div>
      <figcaption className={styles.name}>{name}</figcaption>
      <figcaption className={styles.artist}>{artist}</figcaption>
    </figure>
  </div>
);

Audio.propTypes = {
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  coverImageUrl: PropTypes.string.isRequired,
};

export default Audio;
