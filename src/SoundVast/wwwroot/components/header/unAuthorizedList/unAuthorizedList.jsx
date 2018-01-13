import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from '../header.less';
import ModalButton from '../../shared/button/modalButtonContainer';

const UnAuthorizedList = ({ className }) => (
  <ul className={classnames(styles.outerList, className)}>
    <li><ModalButton modalId="login">Login</ModalButton></li>
    <li><ModalButton modalId="register">Register</ModalButton></li>
  </ul>
);

UnAuthorizedList.defaultProps = {
  className: null,
};

UnAuthorizedList.propTypes = {
  className: PropTypes.string,
};

export default UnAuthorizedList;
