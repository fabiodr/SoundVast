import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from '../header.less';
import ModalLink from '../../shared/modal/modalLinkContainer';

const UnAuthorizedList = ({ className }) => (
  <ul className={classnames(styles.outerList, className)}>
    <li><ModalLink modalId="login">Login</ModalLink></li>
    <li><ModalLink modalId="register">Register</ModalLink></li>
  </ul>
);

UnAuthorizedList.defaultProps = {
  className: null,
};

UnAuthorizedList.propTypes = {
  className: PropTypes.string,
};

export default UnAuthorizedList;
