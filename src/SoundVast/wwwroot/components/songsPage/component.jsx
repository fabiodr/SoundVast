import React from 'react';

import SoundVastTitle from '../shared/soundVastTitle/component';
import Songs from './songs/container';
import styles from './component.less';

const SongsPage = () => (
  <SoundVastTitle title="Songs">
    <div className={styles.songsPage}>
      <Songs />
    </div>
  </SoundVastTitle>
);

export default SongsPage;
