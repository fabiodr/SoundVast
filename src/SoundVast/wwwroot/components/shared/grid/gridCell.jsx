import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './gridCell.less';

const GridCell = ({ children, className }) => (
  <div className={classnames(styles.gridCell, className)}>
    {children}
  </div>
);

GridCell.defaultProps = {
  className: null,
};

GridCell.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default GridCell;
