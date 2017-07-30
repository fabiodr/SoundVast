import React from 'react';

import SoundVastTitle from '../shared/title/soundVastTitle';
import Songs from './songs/container';
import styles from './songsPage.less';

const SongsPage = () => (
  <SoundVastTitle title="Songs">
    <div className={styles.songsPage}>
      <Songs />
    </div>
  </SoundVastTitle>
);

export default SongsPage;
