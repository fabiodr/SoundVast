import React from 'react';
import PropTypes from 'prop-types';
import { compose, branch, renderNothing } from 'recompose';

import LinkButton from '../shared/button/linkButton';
import styles from './header.less';

const HeaderUploadLink = ({ title, children }) => (
  <LinkButton
    to="/upload"
    styleName="secondary"
    className={styles.navButton}
    title={title}
  >
    {children}
  </LinkButton>
);

HeaderUploadLink.defaultProps = {
  title: null,
};

HeaderUploadLink.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default compose(
  branch(
    () => !JSON.parse(process.env.ENABLE_UPLOAD),
    renderNothing,
  ),
)(HeaderUploadLink);
