import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from '../header.less';

const UnAuthorizedList = ({ isLoggedIn }) => (
  !isLoggedIn ?
    <ul className={styles.outerList}>
      <li><Link to="account/login">Login</Link></li>
      <li><Link to="account/register">Register</Link></li>
    </ul>
  : null
);

UnAuthorizedList.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default UnAuthorizedList;
