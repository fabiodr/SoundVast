import React from 'react';

import styles from './playControls.less';
import PauseIcon from '../../../../images/audioControls/pause.svg';

const Pause = () => (
  <PauseIcon width={50} height={50} className={styles.pause} />
);

export default Pause;
