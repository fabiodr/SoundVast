import React from 'react';

import CommentBox from '../comments/commentBoxContainer';
import styles from './sideBar.less';

const SideBar = () => (
  <div className={styles.sideBar}>
    <CommentBox />
  </div>
);

export default SideBar;
