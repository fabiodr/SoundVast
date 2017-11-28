import React from 'react';
import PropTypes from 'prop-types';

import styles from './grid.less';
import GridContent from './gridContent';

const Grid = ({ children }) => (
  <div className={styles.grid}>
    <GridContent>
      {children}
    </GridContent>
  </div>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
