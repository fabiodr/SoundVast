import React from 'react';
import PropTypes from 'prop-types';

import FlexWrapFix from './flexWrapFix';
import GridCell from './gridCell';
import styles from './grid.less';

const Grid = ({ children }) => (
  <div className={styles.grid}>
    {React.Children.map(children, child => (
      <GridCell>
        {child}
      </GridCell>
    ))}
    <FlexWrapFix key={0} numberOfGhostElements={6} />
  </div>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
