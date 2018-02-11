import React from 'react';

import LinkButton from '../shared/button/linkButton';
import styles from './header.less';

const HeaderUploadLink = () => (
  <LinkButton
    to="/upload"
    styleName="secondary"
    className={styles.navButton}
  >
    Upload
  </LinkButton>
);

export default HeaderUploadLink;
