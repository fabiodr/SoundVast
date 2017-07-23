import React from 'react';
import PropTypes from 'prop-types';

import styles from './audio.less';

const Audio = ({ name, artist, coverImageUrl }) => (
  <div className={styles.audio}>
    <figure>
      <img alt="" src={coverImageUrl} />
      <figcaption>{name} by {artist}</figcaption>
    </figure>
  </div>
);

Audio.propTypes = {
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  coverImageUrl: PropTypes.string.isRequired,
};

export default Audio;
