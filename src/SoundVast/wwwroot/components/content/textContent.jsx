import React from 'react';
import PropTypes from 'prop-types';

import styles from './textContent.less';

const TextContent = ({ children }) => (
  <div className={styles.textContent}>
    {children}
  </div>
);

TextContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextContent;
