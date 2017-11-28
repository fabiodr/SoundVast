import React from 'react';
import PropTypes from 'prop-types';

import styles from './gridCell.less';

const GridCell = ({ children }) => (
  <div className={styles.gridCell}>
    {children}
  </div>
);

GridCell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GridCell;
