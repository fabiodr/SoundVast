import React from 'react';

import styles from './audiosSubHeader.less';
import Filters from './filtersContainer';
import ToggleSideBar from './toggleSideBarContainer';
import FilterText from './filterTextContainer';

const AudiosSubHeader = () => (
  <div className={styles.audiosSubHeader}>
    <div className={styles.filtersTextContainer}>
      <FilterText />
    </div>
    <Filters className={styles.filters} />
    <div className={styles.toggleSideBarContainer}>
      <ToggleSideBar className={styles.toggleSideBar} />
    </div>
  </div>
);

export default AudiosSubHeader;
