import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CommentsIcon from '../icons/comments';
import styles from './toggleSideBar.less';
import Button from '../shared/button/button';

const ToggleSideBar = ({ onClick, className, showingSideBar }) => (
  <Button
    styleName="secondary"
    className={classnames(styles.toggleSideBar, className)}
    title={showingSideBar ? 'Hide the sidebar' : 'Show the sidebar'}
    onClick={onClick}
  >
    <CommentsIcon className={styles.toggleSideBarIcon} />
  </Button>
);

ToggleSideBar.defaultProps = {
  className: null,
};

ToggleSideBar.propTypes = {
  showingSideBar: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default ToggleSideBar;