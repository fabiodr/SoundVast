import React from 'react';
import PropTypes from 'prop-types';

import styles from '../header.less';
import ModalLink from '../../shared/modal/link/container';

const UnAuthorizedList = ({ isLoggedIn }) => (
  !isLoggedIn ?
    <ul className={styles.outerList}>
      <li><ModalLink modalId="login">Login</ModalLink></li>
      <li><ModalLink modalId="register">Register</ModalLink></li>
    </ul>
    : null
);

UnAuthorizedList.defaultProps = {
  isLoggedIn: false,
};

UnAuthorizedList.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default UnAuthorizedList;
