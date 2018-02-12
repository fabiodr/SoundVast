import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import LinkButton from '../shared/button/linkButton';
import styles from './header.less';

const HeaderHomeLink = ({ children }) => (
  <LinkButton
    to="/"
    styleName="secondary"
    className={classnames(styles.navButton, styles.logoContainer)}
    title="Home"
  >
    {children}
    <span className={styles.beta}>beta</span>
  </LinkButton>
);

HeaderHomeLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderHomeLink;
