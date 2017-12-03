import React from 'react';

import CommentBox from '../comments/commentBoxContainer';
import Comments from '../comments/commentsContainer';
import styles from './sideBar.less';

const SideBar = () => (
  <div className={styles.sideBar}>
    <div>
      <CommentBox />
      <Comments />
    </div>
  </div>
);

export default SideBar;
