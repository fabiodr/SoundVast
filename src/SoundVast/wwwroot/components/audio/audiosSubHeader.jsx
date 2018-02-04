import React from 'react';

import styles from './audiosSubHeader.less';
import Filters from './filtersContainer';
import ToggleSideBar from './toggleSideBarContainer';

const AudiosSubHeader = () => (
  <div className={styles.audiosSubHeader}>
    <div className={styles.middleColumn}>
      <Filters className={styles.filters} />
    </div>
    <div className={styles.rightColumn}>
      <ToggleSideBar className={styles.toggleSideBar} />
    </div>
  </div>
);

export default AudiosSubHeader;
