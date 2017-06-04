import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from '../header.less';
import ModalLink from '../../shared/modal/link/linkContainer';

const UnAuthorizedList = ({ isLoggedIn }) => (
  !isLoggedIn ?
    <ul className={styles.outerList}>
      <li><Link to="account/login">Login</Link></li>
      <li><ModalLink modalId="register">Register</ModalLink></li>
    </ul>
  : null
);

UnAuthorizedList.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default UnAuthorizedList;
