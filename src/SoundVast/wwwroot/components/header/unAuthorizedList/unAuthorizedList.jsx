import React from 'react';

import styles from '../header.less';
import ModalLink from '../../shared/modal/modalLinkContainer';

const UnAuthorizedList = () => (
  <ul className={styles.outerList}>
    <li><ModalLink modalId="login">Login</ModalLink></li>
    <li><ModalLink modalId="register">Register</ModalLink></li>
  </ul>
);

export default UnAuthorizedList;
