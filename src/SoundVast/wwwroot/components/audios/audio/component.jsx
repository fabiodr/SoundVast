import React from 'react';
import PropTypes from 'prop-types';

import styles from './component.less';
import PlayState from './playState/container';

const Audio = ({ isCurrent, children, coverImageUrl, playOnClick }) => (
  <figure className={styles.audio}>
    <button onClick={playOnClick} className={styles.imageContainer}>
      <img alt="" src={coverImageUrl} />
      <PlayState isCurrent={isCurrent} />
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
