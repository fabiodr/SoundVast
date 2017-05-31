import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from '../header.less';

const UnAuthorizedList = ({ isLoggedIn }) => (
  !isLoggedIn ?
    <ul className={styles.outerList}>
      <li><Link to="account/login" id="login-link">Login</Link></li>
      <li><Link to="account/register" id="register-link">Register</Link></li>
    </ul>
  : null
);

UnAuthorizedList.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default UnAuthorizedList;
