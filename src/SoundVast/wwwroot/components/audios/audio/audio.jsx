import React from 'react';
import PropTypes from 'prop-types';

import styles from './audio.less';
import PlayControls from './playControls/playControlsContainer';

const Audio = ({ isCurrent, children, coverImageUrl, playOnClick }) => (
  <figure className={styles.audio}>
    <button onClick={playOnClick} className={styles.imageContainer}>
      <img alt="" src={coverImageUrl} />
      <PlayControls isCurrent={isCurrent} />
    </button>
    {children}
  </figure>
);

Audio.propTypes = {
  children: PropTypes.node.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  coverImageUrl: PropTypes.string.isRequired,
  playOnClick: PropTypes.func.isRequired,
};

export default Audio;
