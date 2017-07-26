import React from 'react';

import SoundVastTitle from '../shared/title/soundVastTitle';
import Audios from './audios/container';
import styles from './music.less';

const Music = () => (
  <SoundVastTitle title="Music">
    <div className={styles.music}>
      <Audios />
    </div>
  </SoundVastTitle>
);

export default Music;
