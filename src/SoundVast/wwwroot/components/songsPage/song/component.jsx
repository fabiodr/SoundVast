import React from 'react';
import PropTypes from 'prop-types';

import styles from './component.less';
import PlayState from './playState/container';

const Song = ({ isCurrent, name, artist, coverImageUrl, togglePlay }) => (
  <div className={styles.song}>
    <figure>
      <button onClick={togglePlay} className={styles.imageContainer}>
        <img alt="" src={coverImageUrl} />
        <PlayState isCurrent={isCurrent} />
      </button>
      <figcaption className={styles.name}>{name}</figcaption>
      <figcaption className={styles.artist}>{artist}</figcaption>
    </figure>
  </div>
);

Song.propTypes = {
  isCurrent: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  coverImageUrl: PropTypes.string.isRequired,
  togglePlay: PropTypes.func.isRequired,
};

export default Song;
