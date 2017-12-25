import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import FlexWrapFix from './flexWrapFix';
import GridCell from './gridCell';
import styles from './grid.less';

const Grid = ({ children, className, cellClassName }) => (
  <div className={classnames(styles.grid, className)}>
    {React.Children.map(children, child => (
      <GridCell className={cellClassName}>
        {child}
      </GridCell>
    ))}
    <FlexWrapFix key={0} numberOfGhostElements={6} />
  </div>
);

Grid.defaultProps = {
  className: null,
  cellClassName: null,
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  cellClassName: PropTypes.string,
};

export default Grid;
