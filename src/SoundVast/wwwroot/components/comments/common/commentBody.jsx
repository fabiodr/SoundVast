import React from 'react';
import PropTypes from 'prop-types';

import styles from './commentBody.less';

const CommentBody = ({ children }) => (
  <div className={styles.commentBody}>
    {children}
  </div>
);

CommentBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CommentBody;
