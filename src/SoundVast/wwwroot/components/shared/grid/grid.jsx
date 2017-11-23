import React from 'react';
import PropTypes from 'prop-types';

import styles from './grid.less';

const Grid = ({ children }) => (
  <div className={styles.grid}>
    {children}
  </div>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
