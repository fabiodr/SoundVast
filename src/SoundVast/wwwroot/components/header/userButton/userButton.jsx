import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './userButton.less';

const UserButton = ({ userName, className }) => (
  <div className={classnames(styles.userButton, className)}>
    {userName}
  </div>
);

UserButton.defaultProps = {
  className: null,
};

UserButton.propTypes = {
  userName: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default UserButton;
