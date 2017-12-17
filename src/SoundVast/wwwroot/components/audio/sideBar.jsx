import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import CommentBox from '../comments/commentBoxContainer';
import Comments from '../comments/commentsContainer';
import styles from './sideBar.less';

const SideBar = ({ data }) => (
  ReactDOM.createPortal(
    <div className={styles.sideBar}>
      <div>
        <CommentBox />
        <Comments data={data} />
      </div>
    </div>
    , document.getElementById('main'))
);

SideBar.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SideBar;
