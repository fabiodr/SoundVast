import React from 'react';

import styles from './audiosSubHeader.less';
import Filters from './filtersContainer';
import ToggleSideBar from './toggleSideBarContainer';
import DisplayType from '../shared/displayType';
import Dropdown from '../shared/dropdown/dropdownContainer';
import Button from '../shared/button/buttonContainer';
import SortIcon from '../icons/sort';

/* eslint-disable react/no-array-index-key */
const AudiosSubHeader = () => (
  <DisplayType>
    {displayType => (
      <div className={styles.audiosSubHeader}>
        <div className={styles.middleColumn}>
          {!displayType.isMobile && (
            <ul className={styles.filterToggles}>
              {React.Children.toArray(<Filters />).map((filter, i) => <li key={i}>{filter}</li>)}
            </ul>
          )}
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.subHeaderIcons}>
            {displayType.isMobile && (
              <Dropdown
                titleCallback={onClick => (
                  <Button styleName="secondary" onClick={onClick}>
                    <SortIcon />
                  </Button>
                )}
              >
                <Filters styleName="secondary" />
              </Dropdown>
            )}
            <ToggleSideBar className={styles.toggleSideBar} />
          </div>
        </div>
      </div>
    )}
  </DisplayType>
);

export default AudiosSubHeader;
