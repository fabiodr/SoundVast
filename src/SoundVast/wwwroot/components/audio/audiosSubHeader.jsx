import React from 'react';
import PropTypes from 'prop-types';

import styles from './audiosSubHeader.less';
import Filters from './filtersContainer';
import ToggleSideBar from './toggleSideBarContainer';

const AudiosSubHeader = ({ genresUrl }) => (
  <div className={styles.audiosSubHeader}>
    <div className={styles.middleColumn}>
      <Filters className={styles.filters} genresUrl={genresUrl} />
    </div>
    <div className={styles.rightColumn}>
      <ToggleSideBar className={styles.toggleSideBar} />
    </div>
  </div>
);

AudiosSubHeader.propTypes = {
  genresUrl: PropTypes.string.isRequired,
};

export default AudiosSubHeader;
