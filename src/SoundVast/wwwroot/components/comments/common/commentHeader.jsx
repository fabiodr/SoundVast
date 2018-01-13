import React from 'react';
import PropTypes from 'prop-types';

import styles from './commentHeader.less';

const CommentHeader = ({ userName, dateAdded }) => (
  <div>
    <span className={styles.userName}>{userName}</span>
    <span className={styles.dateAdded}>{dateAdded}</span>
  </div>
);

CommentHeader.propTypes = {
  userName: PropTypes.string.isRequired,
  dateAdded: PropTypes.string.isRequired,
};

export default CommentHeader;
