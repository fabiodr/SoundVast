import React from 'react';

import styles from './songsHeader.less';
import LinkButton from '../shared/button/linkButton';

const SongsHeader = () => (
  <div className={styles.songsHeader}>
    <LinkButton to="/genres/songs" styleName="secondary">Genres</LinkButton>
  </div>
);

export default SongsHeader;
