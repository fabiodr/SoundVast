import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import LinkButton from '../shared/button/linkButton';
import styles from './header.less';
import Popups from '../shared/popup/popupsContainer';

const HeaderHomeLink = ({ children }) => (
  <LinkButton
    to="/"
    styleName="secondary"
    className={classnames(styles.navButton, styles.logoContainer)}
  >
    {children}
    <span className={styles.beta}>beta</span>
    <div className={styles.popupsContainer}>
      <Popups />
    </div>
  </LinkButton>
);

HeaderHomeLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderHomeLink;
