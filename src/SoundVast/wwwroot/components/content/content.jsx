import React from 'react';
import PropTypes from 'prop-types';

import styles from './content.less';

const Content = ({ children }) => (
  <div className={styles.content}>
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
